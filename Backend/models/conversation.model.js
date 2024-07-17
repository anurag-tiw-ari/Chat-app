import mongoose,{Schema} from "mongoose"

const conversationSchema=new Schema(
    {
    participants:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    meesages:[{
        type:Schema.Types.ObjectId,
        ref:"Message"
    }]


},{timestamps:true})


export const Conversation = mongoose.model("Conversation",conversationSchema)

