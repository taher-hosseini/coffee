// pages/api/auth/signup.ts
import connectToDB from '@/configs/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { firstname, lastname, username, email, password } = req.body;

        // بررسی فیلدها
        if (!firstname || !lastname || !username || !email || !password) {
            return res.status(422).json({ message: 'All fields are required' });
        }

        // بررسی وجود کاربر با این ایمیل
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).json({ message: 'User already exists with this email' });
        }

        // هش کردن رمز عبور
        const hashedPassword = await bcrypt.hash(password, 12);

        // ایجاد کاربر جدید
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            role: 'user'  // نقش پیش‌فرض
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
