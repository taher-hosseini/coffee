// pages/api/categories/index.ts
import connectToDB from "@/configs/db";
import Category from "@/models/Category";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();
        const categories = await Category.find();
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
