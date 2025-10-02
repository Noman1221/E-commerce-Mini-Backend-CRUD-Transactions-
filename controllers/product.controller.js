import Product from "../models/product.model.js";


export const CreateProduct = async (req, res) => {
    try {
        let { title, description, price, stock } = req.body;
        console.log(title, description, price, stock);

        if (!title || !description || !price || !stock) {
            return res.status(400).json({ message: "missing detailes" });
        };
        let newProduct = new Product({
            title, description, price, stock
        });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {

    }
};

