import Book from "../models/book.model.js";

export const getAllBooks = async(req , res )=>{
    try {
        const books = await Book.find().populate("seller", "name storeName");
        res.json(books);
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
};

export const getBookById = async(req, res)=>{
    try {
        const book = await Book.findById(req.params.id).populate("seller", "name storeName");

        if(!book) return res.status(404).json({message: "Book Not Found"});
        res.json(book);
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
}