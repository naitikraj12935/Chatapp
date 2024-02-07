import Conversation from "../Model/Conversation.js";

export const newConversation=async (req,res)=>{
    try {
        const senderid=req.body.senderid;
        const reciverid=req.body.reciverid;
         
        const exist=await Conversation.findOne({members:{$all :[senderid,reciverid]}});

        if(exist)
        {
            res.status(200).json({
                msg:'conversation al ready exist'
            })
            return ;
        }
        const newConnection= new Conversation({
            members:[senderid,reciverid]
        })
        await newConnection.save();
        res.status(200).json({
            msg:'connection created'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'internal server error'
        })
    }
}

export const getConversation= async (req,res)=>{
    try {
        const senderid=req.body.senderid;
        const reciverid=req.body.reciverid;
         
        const conversation=await Conversation.findOne({members:{$all :[senderid,reciverid]}});

        
        res.status(200).json({
            message:conversation
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'internal server error'
        })
    }
}