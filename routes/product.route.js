import express from "express";
import { CreateProduct } from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/product", CreateProduct);
export default productRouter;