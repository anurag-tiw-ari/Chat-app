
import express from "express"
import dotenv from "dotenv"
import connectDB from "./DB/database.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import { app,server } from "./socket/socket.js";


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

server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});