import Messages from "../Model/Message.js";


export const SendMessage=async (req,res)=>{
    try{
         const newmsg=new Messages(req.body);
         await newmsg.save();
         res.status(200).json({
            status:'ok',
            msg:newmsg

         })
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            msg:'internal server error'
        })
    }

}

export const AllMessage = async (req, res) => {
    try {
        const data = await Messages.find({ Conversationid: req.body.Conversationid }).sort({ updatedAt: 1 });

        res.status(200).json({
            status: 'ok',
            data: data
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            msg: 'internal server error'
        });
    }
};
