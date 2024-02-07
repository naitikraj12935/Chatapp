
import { Drawer, Typography,Box } from "@mui/material"
import { styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "../Menu/Profile";
const drawerStyle={
    left:17,
    top:22,
    height:'95%',
    width:'28%',
    background:'#DCDCDC'
  
}
const Header=styled(Box)`
height:107px;
width:100%;
background:#008069;
color:#FFFFFF;
display:flex;
flex-direction:row;

align-item:center;
& > *{
    margin-top:3rem;
    margin-right:2rem;
    margin-left:1rem;
}`
export default function LeftDrawer({open,setopen}) {
    const handleClose=()=>{
        setopen(false);
    }
  return (
    <>
       <Drawer
    
      open={open}
      onClose={handleClose}
      PaperProps={{sx:drawerStyle}}
      style={{zIndex:1500}}
    >
    <Header>
        <ArrowBackIcon onClick={()=>setopen(false)}/>
        <Typography>Profile</Typography>
    </Header>
    <Box>
    <Profile/>
    </Box>
    </Drawer>
    </>
  )
}
