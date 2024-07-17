
import express from "express"
import dotenv from "dotenv"
import connectDB from "./DB/database.js"
import cors from "cors"
import cookieParser from "cookie-parser"


dotenv.config({})
const app=express()

const PORT=process.env.PORT || 6000

app.listen(PORT,()=>{
    console.log("successfully running on", PORT)
})

connectDB()
.then(()=>{
    console.log("DB CONNECTED")
})
.catch(()=>{
    console.log("DB NOT CONNECTED")
})

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}
))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//Routes

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/user",userRouter)