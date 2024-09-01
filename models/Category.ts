// models/Category.ts
import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
});

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
