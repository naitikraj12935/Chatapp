
import  { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { Box, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  borderBottom: "1px solid #ccc",
  width: "100%", // Adjusted to fit the container width
  background: "#ededed",
  
  
}));




const UserInfoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
  width:"100%",
  gap:"40px"
});

const UserImage = styled("img")({
  borderRadius: "50%",
  marginRight: "10px",
  width: "40px",
  height: "40px",
});

const Side=styled(Box)`
display:flex;
flex-direction:row;
gap:20px;`
export default function ChatHeader() {
  const { chatwith,activeUser} = useContext(AccountContext);
   console.log('active-user',activeUser);
   console.log('chatwith',chatwith)

  return (
    <HeaderBox>
      <UserInfoBox>
        <UserImage src={chatwith.picture} alt="" />
        <Box>
          <Typography variant="h6">{chatwith.name}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
           {activeUser?.find(user=> user.sub === chatwith.sub) ? 'online' : 'offline'}
          </Typography>
        </Box>
      </UserInfoBox>
      <Side>
        <SearchIcon style={{ marginRight: "10px" }} />
        <MoreVertIcon />
      </Side>
    </HeaderBox>
  );
}
