import jwt from "jsonwebtoken";

export const signToken = (id)=>{
    return jwt.token({id}, process.env.JWT_SECRET, {expiresIn: "7d"});
}