import { Box, styled, Typography } from "@mui/material";
import { emptyChatImage } from "../../Constants";

const Container = styled(Box)`
  margin-top: 2%;
  position: relative;
  left:15%;
  width: 70%;
  height: 100%;
  padding: 6%;
  
`;

const ImageBox = styled(Box)`
  position: relative;
  height: 90%;
  width: 90%;
  img {
    height: 80%;
    width: 80%;
  }
`;

const TextCon = styled(Box)`
  position: absolute;
  top: 90%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #00bfa5;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;
 
`;

export default function ChatSection() {
  return (
    <Container>
      <ImageBox>
        <img src={emptyChatImage} alt="" />
      </ImageBox>

      <TextCon>
        <Typography >ChatApp web</Typography>
        <Typography >Now send and receive messages without keeping your phone online</Typography>
      </TextCon>
    </Container>
  );
}
