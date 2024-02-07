import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    aud:{
        type:String
    },
    azp:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    email_verified:{
        type:Boolean
    },
    exp:{
        type:Number
    },
    family_name:{
        type:String
    },
    given_name:{
        type:String
    },
    iss:{
       type:String
    },
    iat:{
        type:Number
    },
    jti:{
        type:String
    },
    locale:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    nbf:{
        type:Number
    },
    picture:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    }


},{timestamps: true})

const User=mongoose.model('User',UserSchema);

export default User;