import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async ()=>{
    try {
       const conncetionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
       console.log(`===> MongoDB connection established || DB Host: ${conncetionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongo Connect error: " + error);
        process.exit(1);
    }
}

export default connectDB;