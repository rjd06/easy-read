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
};

// update book

export const updateBook = async(req, res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({message: "Book not found"});

        if(book.seller.toString() !== req.seller._id.toString()){
            return res.status(401).json({message: "Not authorized"});
        };

        const {title, author, price, stock, description} = req.body;

        book.title = title || book.title;
        book.author = author || book.author;
        book.price = price || book.price ;
        book.stock = stock || book.stock;
        book.description = description || book.description;

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({message:"Failed to update book"});
    }
};

// delete book
export const deleteBook = async(req , res)=>{
    try {
        const book = await Book.findById(res.params.id);
        if(!book) return res.status(404).json({message:"Book not found"});

        if(book.seller.toString() !== req.seller._id.toString()){
            return res.status(401).json({message:"Not authorized"});
        };

        await book.deleteOne();
        res.json({message: "Book deleted"});
    } catch (error) {
        res.status(500).json({message: "Failed to delete book"});
    }
};