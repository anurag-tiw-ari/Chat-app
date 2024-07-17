import { asyncHandler } from "../util/asyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { Message } from "../models/message.model.js";

const sendMessage = asyncHandler(async function(req,res){
    const senderId=req.user._id
    const recieverId=req.params.id
})