import Book from "../models/book.model.js";

export const getAllBooks = async(req , res )=>{
    try {
        const books = await Book.find().populate("seller", "name storeName");
        res.json(books);
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
};