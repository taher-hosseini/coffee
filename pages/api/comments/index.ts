// pages/api/comments/index.ts
import connectToDB from '@/configs/db';
import Comment from '@/models/Comment';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        // اینجا از populate برای پر کردن اطلاعات محصول و کاربر استفاده می‌کنیم
        const comments = await Comment.find()
            .populate('product', 'name')  // نمایش فقط نام محصول
            .populate('user', 'firstname lastname email');  // نمایش نام و ایمیل کاربر

        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
