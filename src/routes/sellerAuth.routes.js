import { Router } from "express";
import { loginSeller, registerSeller } from "../controllers/sellerAuth.controller.js";

const router = Router();
router.post("/login", loginSeller);
router.post("/register", registerSeller);

export default router;
