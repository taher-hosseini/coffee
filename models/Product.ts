// models/Product.ts
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    finalPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    discount: { type: Number },
    count: { type: Number },
    rating: { type: Number },
    salesCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },  // ارتباط با دسته‌بندی
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
