import { InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { AccountContext } from '../../Context/AccountProvider';
import { useContext } from 'react';
import { useState } from 'react';
const Container=styled(Box)`
margin-top:0.5rem;
`
const SearchBar=styled(Box)`
position:relative;`

const SearchIcons=styled(SearchIcon)`
position:absolute;
left:35px;
top:0.5rem;
z-index:2;`

const SearchText=styled(InputBase)`
position:absolute;
padding:2px 50px;
left:20px;
width:90%;
border-radius:14px;
background:#ededed;`
export default function Search() {
const {text,settext}=useContext(AccountContext);
  return (
    <Container>
    <SearchBar>
    <SearchIcons/>
    <SearchText placeholder='search or start chat' value={text} onChange={(e)=>settext(e.target.value)}/>
    </SearchBar>
      
    </Container>
  )
}
