import Seller from "../models/seller.model.js";
import { signToken } from "../utils/token";

export const registerSeller = async (req, res, next) => {
    try {
        const { name, email, password, storeName } = req.body;
        if (await Seller.findOne({ email }))
            throw new Error("Email exists");

        const seller = await Seller.create({
            name,
            email,
            password,
            storeName,
        });

        const token = signToken(seller._id);
        res.json({
            seller: {
                id: seller._id,
                name: seller.name,
                email: seller.email,
                storeName: seller.storeName,
            },
            token
        });
    } catch (error) {
        next(error);
    }
}