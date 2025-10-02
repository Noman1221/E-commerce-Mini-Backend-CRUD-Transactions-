import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 230 },
    stock: { type: Number, default: 2 },
});

const Product = mongoose.model("Product", productSchema);
export default Product;