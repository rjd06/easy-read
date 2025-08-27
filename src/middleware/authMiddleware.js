import jwt from "jsonwebtoken";
import Seller from "../models/seller.model.js";
import { getToken } from "../utils/token.js";

export const sellerProtect = async (req, res, next) => {
    try {
        const token = getToken(req);
        if (!token) return res.status(401).json({ message: "Unauthorized" });
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const seller = await Seller.findById(payload.id);

        if (!seller) return res.status(401).json({ message: "Unauthorized" });

        req.seller = seller;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
