import dotenv from 'dotenv'
dotenv.config({path:'./env'})
import connectDB from "./db/index.js";
import { app } from './app.js';

connectDB()
.then(()=>{
    const PORT = process.env.PORT || 8000
    app.listen(PORT,()=>{
        console.log(`Server Ranning, URL:http://127.0.0.1:${PORT}`);
    })
})
.catch((err)=>{
    console.error("DB error connecting", err);
})