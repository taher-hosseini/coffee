// pages/api/products/create.ts
import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import Category from "@/models/Category";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { name, image, originalPrice, discount, count, rating, salesCount, category } = req.body;

        // Validation
        if (!name || !image || !originalPrice || !category) {
            return res.status(422).json({ message: 'Required fields are missing' });
        }

        // Check if the category exists
        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found' });
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
            category,  // ذخیره‌سازی آی‌دی دسته‌بندی
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ product: savedProduct });
    } catch (error) {
        console.error('Error in create product API:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
