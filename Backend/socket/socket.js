import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:['http://localhost:5173'],
        methods:['GET', 'POST'],
    },
});


export const getReceiverScketID=(recieverId)=>{
    return userSocketMap[recieverId];
}

const userSocketMap = {}      //{userId->SocketId}

io.on("connection",(socket)=>{
    console.log("user connected",socket?.id)

    const userId= socket.handshake.query.userId
    if(userId)
    {
          userSocketMap[userId] = socket.id       //userSocketMap is object Map like we studied map 
                                                      //in dsa in array
    }
      console.log("userSocketMap",userSocketMap)
      console.log("userSocketMap Keys",Object.keys(userSocketMap))
    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
        console.log("userSocketMap",userSocketMap)
      console.log("userSocketMap Keys",Object.keys(userSocketMap))
    })
})

export {app, io, server};