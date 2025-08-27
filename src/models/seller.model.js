import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    storeName: {
        type: String,
        required: true,
    },
    GSTNumber:{
        type: String,
    },
    contactNumber:{
        type: String,
    },
}, {timestamps:true});


sellerSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
    next();
})


export default Seller = mongoose.model("Seller", sellerSchema);