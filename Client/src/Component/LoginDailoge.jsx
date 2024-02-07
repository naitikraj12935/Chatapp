import styled from "@emotion/styled"
import { Dialog ,Box, Typography} from "@mui/material"
import { qrCodeImage } from "../Constants"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../Context/AccountProvider";
import { useContext } from "react";
import axios from 'axios'
import { Api_Url } from "../Constants";
const dialogstyle={  
  height:"88%",
  minWidth:"70%",
  marginTop:"8%",
  boxShadow:'none'
}
const Span=styled(Typography)`
color:#00bfa5;
font-size:2rem;
@media (max-width: 768px) {
    font-size: 1rem;
  }
`
const Conatiner=styled(Box)`
display:flex;
flex-direction:row;
margin:2rem;
justify-content:space-between;
flex-wrap:wrap`

const LeftBox=styled(Box)`
max-width:50%;


@media(max-width:768px){
  max-width:100%;
}`

const RightBox=styled(Box)`

position:realtive;

@media(max-width:768px){
  display:flex;
  justify-content:center;
  margin-left:1rem;
}`
const StyledImage = styled.img`
@media (max-width: 786px) {
  height: 200px;
  width: 200px;

}
`;
const Auth=styled(Box)`
position:absolute;
top:25%;
right:8%;

@media(max-width:768px){
  top:35%;
  right:19%;
}`

export default function Login() {
  const {setaccount}=useContext(AccountContext);

  const LoginUser=async (decoded)=>{
     try{
           const response=await axios.post(`${Api_Url}/createUser`,decoded)
           if(response.status===200)
           {
            setaccount(decoded)
            console.log(decoded)
            console.log(response);
           }
     }
     catch(error){
           console.log(error)
     }
  }
  const onLoginSuccess=(res)=>{
    const decoded=jwtDecode(res.credential);
    LoginUser(decoded)
    
  }
  const onLoginError=(res)=>{
    console.log("error",res)

  }
  return (
    <div>
          <Dialog open={true} PaperProps={{sx:dialogstyle}}
          hideBackdrop={true}>
            <Conatiner>
              <LeftBox>
              <Typography>To Use Web Chat On Your Computer</Typography>
              <Span>Featuring great chat with great authentication</Span>
              </LeftBox>
              <RightBox>
              <StyledImage src={qrCodeImage} alt=""  />
              <Auth>
              <GoogleLogin
  onSuccess={onLoginSuccess}
  onError={onLoginError}
/>;
              </Auth>
  
              </RightBox>
            </Conatiner>
          </Dialog>
    </div>
  )
}
