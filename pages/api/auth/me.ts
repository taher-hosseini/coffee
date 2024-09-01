import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await connectToDB();

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const privateKey = process.env.privateKey as string;
        const decodedToken = verify(token, privateKey) as { id: string };

        const user = await UserModel.findById(decodedToken.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ user });
    } catch (err) {
        console.error("Me error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default handler;
