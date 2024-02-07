
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';
import { Api_Url } from '../../Constants';
import axios from 'axios';

export default function UsersList({ user }) {
  const {setchatwith,account}=useContext(AccountContext);
  const getData = async () => {
    try {
      const response = await axios.post(`${Api_Url}/createConnection`, {
        senderid: account.sub,
        reciverid: user.sub
      });
  
      if (response.status === 200) {
        console.log(response);
        setchatwith(user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const changeChat = async () => {
    await getData();
  }
  
  return (
    <div style={{ width: '100%',cursor:'pointer' }} onClick={changeChat}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt={user.name} src={user.picture} />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="h6">{user.name}</Typography>}
          secondary={<Typography variant="body2">{user.email}</Typography>}
        />
      </ListItem>
    </div>
  );
}


  