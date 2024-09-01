// utils/auth.ts

import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

// تعیین نوع `password` به عنوان `string` و نوع بازگشتی به عنوان `Promise<string>`
const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

// تعیین نوع `data` به عنوان `object` و نوع بازگشتی به عنوان `string`
const generateToken = (data: object): string => {
    // استفاده از متغیر `privateKey` به عنوان `string` و بررسی وجود آن
    const privateKey = process.env.privateKey as string;

    if (!privateKey) {
        throw new Error("Private key is not defined in environment variables.");
    }

    const token = sign({ ...data }, privateKey, {
        expiresIn: "24h",
    });

    return token;
};

export { hashPassword, generateToken };
