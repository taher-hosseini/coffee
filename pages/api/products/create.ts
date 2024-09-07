// pages/api/products/create.ts
import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { name, image, originalPrice, discount, count, rating, salesCount, createdAt } = req.body;

        // Validation
        if (!name || !image || !originalPrice) {
            console.error('Required fields are missing:', req.body);
            return res.status(422).json({ message: 'Required fields are missing' });
        }
        const finalPrice = originalPrice - (originalPrice * (discount || 0) / 100);

        const newProduct = new Product({
            name,
            image,
            finalPrice,
            originalPrice,
            discount: discount || 0,
            count,
            rating,
            salesCount,
            createdAt,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ product: savedProduct });
    } catch (error) {
        console.error('Error in create product API:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
