import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
//import userRouter from "./routes/user.route.js";
dotenv.config();

const app=express();
//database connection
connectDB();


//middlewares
app.use(express.json());
app.use(cors({origin:"http://localhost:5173",credentials: true}));
app.use (cookieParser());

//API ENDPOINTS
app.get("/",(req,res)=>{
    res.send("hello world from server");
});


//app.use("/api/user",userRouter);

const PORT=process.env.PORT || 5000;
 
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
});
