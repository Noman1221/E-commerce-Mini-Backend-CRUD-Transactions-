import express from "express";
import DataBase from "./configDB/database.js";
import productRouter from "./routes/product.route.js";
const app = express();
DataBase()
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ name: "rehan" })
})
const port = 3000;
app.use("/api", productRouter);
app.listen(port, () => {
    console.log(`app listen on port ${port}`);
});
