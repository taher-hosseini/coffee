// pages/api/products/update.ts
import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { id, name, description, price, category, imageUrl } = req.body;

        // Validation
        if (!id) {
            return res.status(422).json({ message: 'Product ID is required' });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, description, price, category, imageUrl },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
