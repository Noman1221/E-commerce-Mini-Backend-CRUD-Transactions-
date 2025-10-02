import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
        count: {
            type: Number, default: 1
        },
    }
)
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;