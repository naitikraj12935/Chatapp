import React from 'react';
import { Box, styled } from '@mui/material';

const ChatContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginBottom: '1rem',
  margin: '2rem'
});

const MessageContainer = styled(Box)`
  background-color: rgb(106,157,247); /* Example primary color */
  color: #fff; /* Example contrast text color */
  padding: 2px  20px;
  border-radius: 14px;
`;

const TimeContainer = styled(Box)`
  color: #666;
  font-size: 0.75rem;
`;

export default function RightChat({ msgdata }) {
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
