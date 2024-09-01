import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { compare } from "bcryptjs";
import { generateToken } from "@/utils/auth";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await connectToDB();

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ message: "Invalid email or password" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken({ email: user.email, id: user._id });

        res.setHeader(
            "Set-Cookie",
            serialize("token", token, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24,
            })
        );

        return res.status(200).json({ message: "Signed in successfully" });
    } catch (err) {
        console.error("Signin error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default handler;
