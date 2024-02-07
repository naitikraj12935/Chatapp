
import { useContext, useState } from "react"
import { AccountContext } from "../../Context/AccountProvider"
import { styled,Box } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import HeaderMenu from "./HeaderMenu";
import LeftDrawer from "../Drawer/LeftDrawer";
const Container=styled(Box)`

height:60px;
background:#ededed;
padding:8px 16px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-item:center;
`
const Image=styled('img')({
    height:'40px',
    width:'40px',
    borderRadius:'50%',
    
})
const Icons=styled(Box)`
padding-top:0.5rem;
cursor:pointer;
& > * {
    margin-left:2px;
    font-size:28px;
    color:#000;

}
& :first-child{
   
    margin-right:20px;
}

`
export default function Header() {
    const [OpenDrawer,setOpenDrawer]=useState(false);
    const {account}=useContext(AccountContext);
    const handleDrawer=()=>{
        setOpenDrawer(true);
    }
  return (
    <>
    <Container>
    <Image src={account.picture} alt="" onClick={handleDrawer} />
    <Icons>
        <MessageIcon/>
        <HeaderMenu/>
    </Icons>  
     
    </Container>
    <LeftDrawer open={OpenDrawer} setopen={setOpenDrawer}/>
    </>
  )
}
