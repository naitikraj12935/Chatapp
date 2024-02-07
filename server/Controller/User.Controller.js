import User from "../Model/User.js";

export const CreateUser = async (req, res) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            return res.status(200).json({
                status: 'ok',
                msg: "User already exists",
                user: exist
            });
        }
        const user = new User(req.body);
        await user.save();

        return res.status(200).json({
            status: 'ok',
            user: user
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            status: 'fail',
            msg: 'Internal server error'
        });
    }
};

export const AllUser=async (req,res)=>{
    try {

        const Users=await User.find({});

        res.status(200).json({
            status:'ok',
            Users:Users
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:'fail',
            msg:'internal server error'
        })
    }

}