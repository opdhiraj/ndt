import mongoose from "mongoose";
 const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongobd connect");
        
    } catch (error) {
        console.log("error occured",error);
        
    }
 }
 export default connectDB;