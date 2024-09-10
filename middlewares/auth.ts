// middlewares/auth.ts
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export const authenticate = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer Token

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded; // Attach the decoded user information to the request object
        return handler(req, res);
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
