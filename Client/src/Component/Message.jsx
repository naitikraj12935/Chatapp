
import Login from "./LoginDailoge"
import { Toolbar,AppBar,styled,Box } from "@mui/material"
import ChatDialog from "./ChatDialog"
import { useContext } from "react"
import { AccountContext } from "../Context/AccountProvider"
const Header=styled(AppBar)`
height:25%;
background-color:#00bfa5;
` 

const Component=styled(Box)`
height:100vh;
background:#DCDCDC`
export default function Message() {
  const {account}=useContext(AccountContext)
  return (
    <>
    {
         account? (
          <>
          <Header>
      <Toolbar>

      </Toolbar>
      
     </Header>
     <Component>

      </Component>
     <ChatDialog/>
          </>
         )
         :(
          <>
          <Header>
      <Toolbar>

      </Toolbar>
      
     </Header>
     <Component>

      </Component>
      <Login/>
          </>
         )
        
    }
     
    </>
  )
}
