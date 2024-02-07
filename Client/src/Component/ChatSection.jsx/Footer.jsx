
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Box, InputBase, IconButton } from '@mui/material';
import { useState } from 'react';

export default function Footer({sendText}) {
  const [input,setinput]=useState('');
  const handleSend=()=>{
     sendText(input);
     setinput('');
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      padding={2}
      borderTop="1px solid #ccc"
    >
      {/* Left side icons */}
      <IconButton>
        <EmojiEmotionsOutlinedIcon />
      </IconButton>

    
      {/* Middle text input */}
      <InputBase
        placeholder="Type a message"
        fullWidth
        style={{ marginLeft: '10px', marginRight: '10px' }}
        value={input}
        onChange={(e)=>setinput(e.target.value)}
      />

      {/* Right side icons */}
      <IconButton>
        <MicOutlinedIcon />
      </IconButton>
      <IconButton>
        <SendOutlinedIcon  onClick={handleSend}/>
      </IconButton>
    </Box>
  );
}
