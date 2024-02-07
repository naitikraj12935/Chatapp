import express from "express";
import { CreateUser,AllUser } from "../Controller/User.Controller.js";
import { newConversation ,getConversation} from "../Controller/Conversation.conroller.js";
import { SendMessage,AllMessage } from "../Controller/Message.controller.js";
const UserRouter = express.Router();

UserRouter
.route('/createUser')
.post(CreateUser);

UserRouter
.route('/allUser')
.get(AllUser);

UserRouter
.route('/createConnection')
.post(newConversation);

UserRouter
.route('/getConversation')
.post(getConversation);

UserRouter
.route('/SendMessage')
.post( SendMessage);

UserRouter
.route('/AllMessage')
.post( AllMessage);


export default UserRouter;
