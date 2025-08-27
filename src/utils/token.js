import jwt from "jsonwebtoken";
 
export const signToken = (id)=>{
    return jwt.token({id}, process.env.JWT_SECRET, {expiresIn: "7d"});
};

export const getToken = (req)=>{
    const h = req.headers.authorization || "";
    return h.startsWith("Bearer ")?h.slice(7) : null;
};