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

        const { name, description, price, category, imageUrl } = req.body;

        // Validation
        if (!name || !description || !price || !category) {
            console.error('Required fields are missing:', req.body);
            return res.status(422).json({ message: 'Required fields are missing' });
        }

        const newProduct = new Product({
            name,
            description,
            price,
            category,
            imageUrl,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ product: savedProduct });
    } catch (error) {
        console.error('Error in create product API:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
