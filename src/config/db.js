import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
        console.log("MongoDB Connected!");
    } catch (error) {
        console.log("MongoDB Connection Failed : ", error);
        process.exit(1);
    }
}