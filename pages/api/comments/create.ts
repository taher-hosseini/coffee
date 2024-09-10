import connectToDB from '@/configs/db';
import Comment from '@/models/Comment';
import Product from '@/models/Product';
import { authenticate } from '@/middlewares/auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const FLASK_API_URL = 'http://localhost:5000/analyze-sentiment'; // Update this if your Flask server is hosted elsewhere

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { content, productId } = req.body;
        const userId = req.user.userId;

        if (!content || !productId) {
            return res.status(422).json({ message: 'Content and Product ID are required' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Call the Flask API to get sentiment analysis
        try {
            const sentimentResponse = await axios.post(FLASK_API_URL, { text: content });

            console.log('Flask API Response:', sentimentResponse.data);  // Print the whole response for debugging

            const sentiment = sentimentResponse.data.sentiment || 'neutral';
            console.log('Sentiment:', sentiment);  // Print the sentiment value for debugging

            const newComment = new Comment({
                content,
                user: userId,
                product: productId,
                sentiment,
            });

            const savedComment = await newComment.save();
            res.status(201).json({ comment: savedComment });
        } catch (apiError) {
            console.error('Error calling Flask API:', apiError);
            return res.status(500).json({ message: 'Error calling sentiment analysis service' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default authenticate(handler);
