// models/Product.ts
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    category: { type: String, required: true },
    imageUrl: { type: String },
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
