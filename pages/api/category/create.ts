// pages/api/categories/index.ts
import connectToDB from "@/configs/db";
import Category from "@/models/Category";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { name, description } = req.body;

        // Validation
        if (!name) {
            return res.status(422).json({ message: 'Category name is required' });
        }

        const newCategory = new Category({
            name,
            description
        });

        const savedCategory = await newCategory.save();
        res.status(201).json({ category: savedCategory });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;

