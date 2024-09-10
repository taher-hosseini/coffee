import connectToDB from "@/configs/db";
import User from "@/models/User";
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await connectToDB();

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ message: 'Required fields are missing' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret', {
        //     expiresIn: '1h'
        // });

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET! || 'secret', {
            expiresIn: '1h',
        });

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Error in user login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
