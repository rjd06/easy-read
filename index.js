import { configDotenv } from 'dotenv';
import express from 'express';
import cors from "cors";
import { connectDB } from './src/config/db.js';


configDotenv();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.json({message: "API Ok"});
});


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is serving at http://localhost:${port}`);
})