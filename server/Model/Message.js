import mongoose from "mongoose";

const MessageSchema=mongoose.Schema({
    Conversationid:{
        type:String
    },
    senderid:{
        type:String
    },
    reciverid:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
    
},
{
    timestamps:true
})

const Messages=mongoose.model('Messages',MessageSchema);
export default Messages;