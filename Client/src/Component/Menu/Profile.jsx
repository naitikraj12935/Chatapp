import { useContext } from "react"
import { AccountContext } from "../../Context/AccountProvider"
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
const Container=styled(Box)`
display:flex;
flex-direction:column;

height:100%;
`

const ImageContainer=styled(Box)`
height:150px;
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
& : first-child{
    height:100px;
    width:100px;
    border-radius:50%;
}`
const Title=styled(Typography)`
color:#00bfa5;`

const FirstConatiner=styled(Box)`
display:flex;
flex-direction:column;
gap:0.5rem;
padding:1rem 2rem;
background:#FFFFFF;
`

const Name=styled(Box)`
display:flex;
flex-direction:row;
justify-content:space-between`

const Info=styled(Typography)`
padding:2rem;
color:#8696a0;`

export default function Profile() {
    const {account}=useContext(AccountContext);
  return (
    <Container>
      <ImageContainer>
        <img src={account.picture} alt="" />
      </ImageContainer>
      <FirstConatiner>
        <Title>Your Name</Title>
        <Name>
           <Typography>
            {account.name}
           </Typography>
           <EditIcon/>
        </Name>
      </FirstConatiner>
      <Box>
        <Info>
            This is not Your Username or pin.This name will be visible to Your whatsapp contacts.
        </Info>
      </Box>
      <FirstConatiner>
        <Title>About</Title>
        <Name>
           <Typography>
            Eat Sleep Conqure Repeat
           </Typography>
           <EditIcon/>
        </Name>
      </FirstConatiner>
      
    </Container>
  )
}
