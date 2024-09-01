import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateToken, hashPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await connectToDB();

        const { firstname, lastname, username, email, password } = req.body;

        if (!firstname || !lastname || !username || !email || !password) {
            return res.status(422).json({ message: "Data is not valid!" });
        }

        const isUserExist = await UserModel.findOne({
            $or: [{ username }, { email }],
        });

        if (isUserExist) {
            return res.status(422).json({ message: "This username or email already exists!" });
        }

        const hashedPassword = await hashPassword(password);
        const token = generateToken({ email });
        const users = await UserModel.find({});

        await UserModel.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            role: users.length > 0 ? "USER" : "ADMIN",
        });

        res.setHeader(
            "Set-Cookie",
            serialize("token", token, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24,
            })
        );

        return res.status(201).json({ message: "User created successfully :))" });
    } catch (err) {
        console.error("Signup error:", err);
        return res.status(500).json({ message: "Unknown internal server error" });
    }
};

export default handler;
