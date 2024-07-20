import { asyncHandler } from "../util/asyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";
import { io } from "../socket/socket.js";
import { getReceiverScketID } from "../socket/socket.js";

const sendMessage = asyncHandler(async function(req,res){
    const senderId=req.user._id
   /* console.log(senderId)*/
    const recieverId=req.params.id
   // console.log(recieverId)
    const {message}=req.body
  //  console.log(message)

    let getConversation = await Conversation.findOne({
        participants:{$all: [senderId,recieverId]}
    })

    if(!getConversation)
    {
        getConversation=await Conversation.create({
            participants:[senderId,recieverId]
        })
    }
  //  console.log(getConversation)
    const newMessage=await Message.create({
        senderId,
        recieverId,
        message
    })
 //   console.log("newMessage: ",newMessage)
    if(newMessage){
        getConversation.messages.push(newMessage._id)
    }

    await getConversation.save();

   // console.log("NewGETCONV",getConversation)

    //SOCKET IO

    const recieverSocketId = getReceiverScketID(recieverId);
    if(recieverSocketId)
    {
        io.to(recieverSocketId).emit("newMessage",newMessage)
    }

    return res.status(200).json({newMessage})

})

const getMessage = asyncHandler(async function(req,res)
{
    const senderId=req.user._id
    const recieverId=req.params.id

    let getConversation = await Conversation.findOne({
        participants:{$all: [senderId,recieverId]}
    }).populate("messages")
    
 //   console.log(getConversation)

    return res.status(200).json(getConversation?.messages)

})

export {
    sendMessage,
    getMessage
}