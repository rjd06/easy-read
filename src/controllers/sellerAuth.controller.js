import Seller from "../models/seller.model.js";
import { signToken } from "../utils/token.js";

export const registerSeller = async (req, res, next) => {
    try {
        const { name, email, password, storeName } = req.body;
        if(await Seller.findOne({email})){
            return res.status(400).json({message: "Email already exists"});
        }

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
};

export const loginSeller = async(req , res , next)=>{
    try {
        const {email, password} = req.body;
        const seller = await Seller.findOne({email});

        if(!seller || !(await seller.comparePassword(password))){
            return res.status(404).json({message: "Invalid credentials"});
        }
            

        const token = signToken(seller._id);
        res.json({seller: {
            id: seller._id,
            name: seller.name,
            email:seller.email,
            storeName:seller.storeName
        }, token});
    } catch (error) {
        next(error);
    }
};