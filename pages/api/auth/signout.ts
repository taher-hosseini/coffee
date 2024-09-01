import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        res.setHeader(
            "Set-Cookie",
            serialize("token", "", {
                httpOnly: true,
                path: "/",
                expires: new Date(0), // تنظیم زمان انقضا به گذشته برای حذف کوکی
            })
        );

        return res.status(200).json({ message: "Signed out successfully" });
    } catch (err) {
        console.error("Signout error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default handler;
