import { asyncHandler } from "../util/asyncHandler.js";
import { User } from "../models/User.model.js";


import bcrypt from "bcryptjs"

const generateAccessAndRefreshTokens=async(userId)=>
    {
             try{
                  const user= await User.findById(userId)
                const accessToken =  user.generateAccessToken()
                const refreshToken =  user.generateRefreshToken()

                user.refreshToken=refreshToken
                await user.save({ validateBeforeSave: false})

                return {accessToken,refreshToken}
             }
             catch(error){
                return res.status(500).json({message:"Something Went Wrong ,Try Again"})
             } 
    }

const registerUser=asyncHandler(async function(req,res)
{
    //console.log("Request.body=",req.body)
   const {fullName,username,password,confirmPassword,gender} =  req.body           
   

   if ([fullName,username,password,confirmPassword,gender].some((ce) => ce?.trim() === "")) 
    {
    return res.status(400).json({ message: "All fields are required." });
}

if(password!==confirmPassword) 
    {
        return res.status(400).json({ message: "Password Does Not Match" });
}
    
const existedUser=await User.findOne({username})

   if(existedUser)
        {
            return res.status(409).json({ message: "User already existed." });
        }
      /* console.log("Request.files=",req.file)*/

        const hashPassword=await bcrypt.hash(password,10)
    
     let profilePhotoLocalPath 
   
   
 /*  if (req.files?.profilePhoto)
    {
        profilePhotoLocalPath=req.files?.profilePhoto[0].path
    }

   const profilePhotoCloudinary= await uploadOnCloudinary(profilePhotoLocalPath)
   

   
   console.log(profilePhotoCloudinary?.url)*/

   if(gender==="others")
    {
          profilePhotoLocalPath=`https://avatar.iran.liara.run/public?username=${username}`
    }
   else if(gender==="male")
        {
          profilePhotoLocalPath=`https://avatar.iran.liara.run/public/boy?username=${username}`
        }
    else
        {
          profilePhotoLocalPath=`https://avatar.iran.liara.run/public/girl?username=${username}`
        }
        console.log(profilePhotoLocalPath)

  const user = await User.create({
       fullName,
       profilePhoto:profilePhotoLocalPath || "",
       gender,
       password:hashPassword,
       username:username.toLowerCase()
   })

   const createdUser=await User.findById(user._id).select(
     "-password -refreshToken"
   )

   if(!createdUser) 
    {
    return res.status(500).json({ message: "Something went wrong while registering the user." });
   }

   return res.status(201).json({data:createdUser,message:"User Registered Successfully"})   //sentback to client
   

})

const loginUser=asyncHandler(async function(req,res)
{

    const {username,password}=req.body
    console.log(username)
    if(!username)
    {
        return res.status(400).json({message:"Username Required"})
    }
    if(!password)
    {
        return res.status(400).json({message:"Password Required"})
    }

    const user = await User.findOne({ username });
    if (!user) 
        {
        return res.status(404).json({ message: "User not found" });
    }

    const checkPassword=await bcrypt.compare(password,user.password)
    if (!checkPassword) 
    {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    
  const {accessToken,refreshToken} = generateAccessAndRefreshTokens(user._id)

  const loggedInUser=await User.findById(user._id).select(
    "-password -refreshToken"
 )

 
        const options={
            httpOnly:true,                              
            secure:true,
        }

        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .json(
            {
             data:  {
                    loggedInUser,
                    accessToken,
                    refreshToken
                },
             message:  "User Logged in Successfully"
            }
            )
        


})

export {
    registerUser,
    loginUser
}