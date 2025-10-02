import mongoose from "mongoose";

const dbUrl = "mongodb://127.0.0.1:27017/ECommerce";

const DataBase = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("database is connected");
    } catch (error) {
        console.log(error);
    }
}

export default DataBase;