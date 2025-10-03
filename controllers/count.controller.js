import Cart from "../models/cart.model.js";

export const incCount = async (req, res) => {
    try {
        let { productId } = req.body;
        let isCart = await Cart.findOne({ productId });


        if (isCart) {


            isCart.count += 1;
            await isCart.save();
            return res.status(200).json({ message: "count is increment", isCart })
        } else {
            let addNewCart = new Cart({
                productId, count: 1,
            });
            await addNewCart.save()
            return res.status(200).json({ message: "new cart added", addNewCart });
        };
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const decCount = async (req, res) => {
    try {
        let { productId } = req.body;
        const isCart = await Cart.findOne({ productId });
        if (isCart.count > 1) {
            isCart.count -= 1;
            await isCart.save();
            res.status(200).json({ message: "cart removed", isCart })
        } else {
            await Cart.deleteOne({ productId });
            return res.status(200).json({ message: "cart removed", isCart })
        };
    } catch (error) {
        res.json({ message: error.message });
    };

}
