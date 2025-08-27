import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    storeName: {
        type: String,
        required: true,
    },
    GSTNumber:{
        type: String,
    },
    contactNumber:{
        type: String,
    },
}, {timestamps:true});



export default Seller = mongoose.model("Seller", sellerSchema);