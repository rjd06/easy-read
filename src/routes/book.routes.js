import { Router } from "express";
import { sellerProtect } from "../middleware/authMiddleware.js";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book.controller.js";

const router = Router();
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", sellerProtect, createBook);
router.put("/:id", sellerProtect, updateBook);
router.delete("/:id", sellerProtect, deleteBook);

export default router;