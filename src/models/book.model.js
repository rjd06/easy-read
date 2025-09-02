import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        text: true,
    },
    author: {
        type: String,
        required:true,
    },
    description:String,
    price:{
        type:Number,
        required:true,
        min:0,
    },
    stock:{
        type:Number,
        default: 0
    },
    category: String,
    coverImage: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true,
    }
}, {timestamps: true});