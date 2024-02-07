import Header from "./Header";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";
import { Api_Url } from "../../Constants";
import UsersList from "./UsersList";
import { Box, styled } from "@mui/material";
import { Divider } from '@mui/material';
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

const UserMenu = styled(Box)`
  position: absolute;
  top: 100px;
  margin-top:20px;
  height:560px;
  overflow-y:scroll;
  width:100%;
`;

const Container = styled(Box)`
  position: relative;
`;

export default function MenuList() {
  const [users, setUsers] = useState([]);
  const [filteruser, setFilterUser] = useState([]);
  const { account, text, settext } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_Url}/allUser`);
        if (response.status === 200) {
          setUsers(response.data.Users);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase()) || user.email.toLowerCase().includes(text.toLowerCase())
    );
    setFilterUser(filteredData);
  }, [text, users]);

  return (
    <Container>
      <Header />
      <Search />
      <UserMenu>
        {filteruser.length > 0 && (
          filteruser.map(user => (
            <>
              {account.sub !== user.sub && <UsersList user={user} key={user.sub} />}
              <Divider />
            </>
          ))
        )}
      </UserMenu>
    </Container>
  );
}
