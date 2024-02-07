import { Box, styled } from "@mui/material";
import { Background } from "../../Constants";
import axios from "axios";
import { Api_Url } from "../../Constants";
import { useContext, useEffect, useState, useRef } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import LeftChat from "./LeftChat";
import RightChat from "./RighChat";

const Container = styled(Box)`
  height: 80%;
  width: 100%;
  background-image: url(${Background});
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  overflow-y: scroll;
`;

export default function ChatMessage() {
  const { chatwith, account, setconversations,socket,conversations,newmsg,setnewmsg } = useContext(AccountContext);
  const containerRef = useRef(null);
  const [incoming,setincoming]=useState(null);

  const [chatData, setChatData] = useState([]);

  const getChat = async (id) => { 
    try {
      const response = await axios.post(`${Api_Url}/AllMessage`, {
        Conversationid: id,
      });
      setChatData(response.data.data || []);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };
  useEffect(() => {
    socket.current.on('getmessage', data => {
      console.log('recieve msg', data);
      setChatData(prev => [...prev,({ ...data, updatedAt: Date.now() })]);
    });
  }, [socket]);
  
  useEffect(() => {
   
      setChatData(prev => [...prev,({ ...newmsg, updatedAt: Date.now() })]);

  }, [newmsg]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${Api_Url}/getConversation`, {
          senderid: account.sub,
          reciverid: chatwith.sub,
        });
        setconversations(response.data.message);
        await getChat(response.data.message._id);
      } catch (error) {
        console.error("Error fetching conversation:", error);
      }
    };
    fetchData();
  }, [chatwith, account, setconversations]); 

  // useEffect (()=>{
  //   incoming && conversations?.members?.includes(incoming.senderid) && setChatData(prev=>[...prev,incoming])
  // },[incoming,chatData])

  useEffect(() => {
    scrollToBottom();
  }, [chatData]); // Scroll when chatData changes

  const scrollToBottom = () => {
    console.log("Scrolling to bottom...");
    if (containerRef.current) {
      console.log("Scrolling...");
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return (
    <Container ref={containerRef}>
      {chatData.map((data, index) => (
        data.senderid === account.sub ? (
          <RightChat key={index} msgdata={data} />
        ) : (
          <LeftChat key={index} msgdata={data} />
        )
      ))}
    </Container>
  );
}
