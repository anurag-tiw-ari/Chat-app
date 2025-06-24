import mongoose from "mongoose";
import DBNAME from "../constants.js"

async function connectDB()
{
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}`)
    }
    catch(e){
        console.log("MONDODB CONNECTION ERROR",e)
    }
}

export default connectDB