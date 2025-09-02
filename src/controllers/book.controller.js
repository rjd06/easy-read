import Book from "../models/book.model.js";

// get all books
export const getAllBooks = async(req , res )=>{
    try {
        const books = await Book.find().populate("seller", "name storeName");
        res.json(books);
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
};

// get book by id
export const getBookById = async(req, res)=>{
    try {
        const book = await Book.findById(req.params.id).populate("seller", "name storeName");

        if(!book) return res.status(404).json({message: "Book Not Found"});
        res.json(book);
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
};

// create book
export const createBook = async(req, res)=>{
    try {
        const {title, author, price, stock , description} = req.body;
        const book = new Book({title, author, price, stock, seller: req.seller._id });

        const createdBook = await book.save();
        res.status(201).json(createdBook);
    } catch (error) {
      res.status(500).res({message: "Failed to create book"})  ;
    }
}