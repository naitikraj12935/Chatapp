
import { useContext } from "react"
import { AccountContext } from "../../Context/AccountProvider"
import { Box,Typography,styled } from "@mui/material";
import ChatMessage from "./ChatMessage";
import Footer from "./Footer";
import ChatHeader from "./ChatHeader";
import axios from "axios";
import { Api_Url } from "../../Constants";
const Container = styled(Box)`
  width: 100%;
  height: 97vh;
  border-left: 1px solid rgba(0, 0, 0, 0.14);

  @media (max-width: 600px) {
    height: 90vh; /* Adjust the height for smaller screens */
  }
`;
export default function Chat() {
    const {chatwith,account,conversations,socket,newmsg,setnewmsg}=useContext(AccountContext);
    
    const fetchData=async (message)=>{
      try {
           const response= await axios.post(`${Api_Url}/SendMessage`,message);
           
           console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    const sendText=(value)=>{
          console.log(value)
          let message={
            Conversationid:conversations._id,
             senderid:account.sub,
             reciverid:chatwith.sub,
             text:value,
             Type:'text'
             
          }
          setnewmsg(message);
          socket.current.emit('SendMessages',message)

          fetchData(message)
    }
  return (
    <Container>
      <ChatHeader/> 
      <ChatMessage/>
      <Footer sendText={sendText}/>
      
    </Container>
  )
}
