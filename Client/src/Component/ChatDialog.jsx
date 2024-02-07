import { Dialog, Box, styled } from "@mui/material";
import MenuList from "./Menu/MenuList";
import ChatSection from "./ChatSection.jsx/ChatSection";
import Chat from "./ChatSection.jsx/Chat";
import { AccountContext } from "../Context/AccountProvider";
import { useContext,useEffect } from "react";

const dialogstyle = {
  minHeight: "98%",
  minWidth: "98%",
  marginTop: "4%",
  boxShadow: 'none',
  overflow:'hidden'
};

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const LeftBox = styled(Box)`
  min-width: 30%;
`;

const RightBox = styled(Box)`
  width:70%;
  height: 100%;
  
  
`;

export default function ChatDialog() {

  const {chatwith,socket,account,activeUser,setactiveUser}=useContext(AccountContext);

  useEffect(() => {
    socket.current.emit('addUsers', account);
    socket.current.on("getUsers", users => {
      setactiveUser(users);
    });
  
    
  }, [account, socket, setactiveUser]);
  
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Container>
        <LeftBox>
          <MenuList />
        </LeftBox>
        <RightBox>
        {
          chatwith ? (
            <Chat/>
          ):(
            <ChatSection />
          )
        }
          
        </RightBox>
      </Container>
    </Dialog>
  );
}
