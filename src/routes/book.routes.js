import { Router } from "express";
import { sellerProtect } from "../middleware/authMiddleware.js";

const router = Router();
router.get("/", );
router.get("/:id",);
router.post("/", sellerProtect,);
router.put("/:id", sellerProtect,);
router.delete("/:id", sellerProtect,);

export default router;