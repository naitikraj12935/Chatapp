import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
export default function HeaderMenu() {
  const [open,setopen]=useState(null);
  const handleClose=()=>{
    setopen(null);
  }
  
  const handleOpen=(e)=>{
    setopen(e.currentTarget)
  }
  return (
    <>
      <MoreVertIcon onClick={handleOpen}/>
      <Menu
        keepMounted
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        // anchorOrigin={{
        //     vertical:'bottom',
        //     horizontal:'center'
        // }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
   </>
  )
}
