import mongoose from "mongoose";


export const connectDB=async()=>{
    try{
        mongoose.set('debug', true);
      await  mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb ");
    }
    catch(error){
        console.log("Error connecting to MongoDB:",error);
    }
};