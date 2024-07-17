import mongoose,{Schema} from "mongoose"
import jwt from "jsonwebtoken"

const userSchema=new Schema(
    {
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        required:true
    },
    refreshToken:{
        type:String
    }


},{timestamps:true})

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this.id,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
return jwt.sign(
    {
        _id:this.id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}


export const User = mongoose.model("User",userSchema)