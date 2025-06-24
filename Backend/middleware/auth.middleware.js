import { asyncHandler } from "../util/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";


// User Logged In hai ki nhi dekhne ke liye
export const verifyJWT=asyncHandler(async function(req,res,next)
{
   
   console.log("cookies:", req.cookies)

   const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
   
   console.log("token:", token)

   if(!token)
    {
        return res.status(401).json({message:"Unauthorized Request"})
    }
     
    const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const user=await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
    )

    if(!user){
        return res.status(401).json({message:"Invalid access Token"})
    }

    req.user=user


    next()

})
