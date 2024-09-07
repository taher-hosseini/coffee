// pages/api/products/index.ts
import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();
        // const products = await Product.find().populate('category');
        const products = await Product.find()
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
