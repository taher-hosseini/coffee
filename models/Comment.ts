// models/Category.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
    content: string;
    user: mongoose.Schema.Types.ObjectId;
    product: mongoose.Schema.Types.ObjectId;
    sentiment: string;  // positive, negative, neutral
    createdAt: Date;
}

const CommentSchema: Schema = new Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    sentiment: { type: String, default: 'neutral' },
    // sentiment: { type: String, enum: ['positive', 'negative', 'neutral'], default: 'neutral' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);
