import jwt from "jsonwebtoken";
import Seller from "../models/seller.model.js";

const getToken = (req)=>{
    const h = req.headers.authorization || "";
    return h.startsWith("Bearer ") ? h.slice(7) : null;
};