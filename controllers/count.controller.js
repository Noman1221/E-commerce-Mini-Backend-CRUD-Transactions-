import Cart from "../models/cart.model";

export const CartIncDec = async (req, res) => {

    try {
        const { count } = req.body;
        const currentCount = await Cart.count.find({});
        currentCount = currentCount + 1;
        const newCount = new Cart({
            count: currentCount,
        })
        await newCount.save();
        res.status(201).json({ message: "count increament" });
    } catch (error) {
        res.status(501).json({ message: error.message });
    }

}