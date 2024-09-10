// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    role: string;  // admin or user
}

const UserSchema: Schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },  // admin by default 'user'
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
