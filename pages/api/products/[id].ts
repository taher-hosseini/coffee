import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '@/configs/db';
import Product from '@/models/Product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDB();

    const { id } = req.query;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error('Error in fetching product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
