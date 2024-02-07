import React from 'react';
import { Box, styled } from '@mui/material';

const ChatContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '1rem',
  margin: '2rem'
});

const MessageContainer = styled(Box)`
  background-color: rgb(107,161,187); /* Example primary color */
  color: #fff; /* Example contrast text color */
  padding: 2px  20px;
  border-radius: 14px;
`;


const TimeContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
}));

export default function LeftChat({ msgdata }) {
  const formattedTime = new Date(msgdata.updatedAt).toLocaleTimeString();

  return (
    <ChatContainer>
      <MessageContainer>
        <p>{msgdata.text}</p>
      </MessageContainer>
      <TimeContainer>
        {formattedTime}
      </TimeContainer>
    </ChatContainer>
  );
}
