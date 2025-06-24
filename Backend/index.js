
import express from "express"
import dotenv from "dotenv"
import connectDB from "./DB/database.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import { app,server } from "./socket/socket.js";

import path from "path"


const __dirname = path.resolve()

dotenv.config({})


const PORT=process.env.PORT || 6000

/*app.listen(PORT,()=>{
    console.log("successfully running on", PORT)
})*/

connectDB()
.then(()=>{
    console.log("DB CONNECTED")
})
.catch(()=>{
    console.log("DB NOT CONNECTED")
})

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}
))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//Routes

import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.route.js"

app.use("/api/v1/user",userRouter)
app.use("/api/v1/message",messageRouter)

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*",(req,res)=>{
     res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"))
})

server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});