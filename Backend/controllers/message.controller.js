import { asyncHandler } from "../util/asyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";

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

    return res.status(200).json({message:"message send"})

})

const getMessage = asyncHandler(async function(req,res)
{
    const senderId=req.user._id
    const recieverId=req.params.id

    let getConversation = await Conversation.findOne({
        participants:{$all: [senderId,recieverId]}
    }).populate("messages")
    
 //   console.log(getConversation)

    return res.status(200).json({message:"Got message"})

})

export {
    sendMessage,
    getMessage
}