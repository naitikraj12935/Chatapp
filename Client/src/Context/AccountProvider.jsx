import { createContext, useState,useEffect,useRef } from "react";
import {io} from 'socket.io-client'
export const AccountContext=createContext(null);
      
const AccountProvider=({children})=>{

    const [account,setaccount]=useState();
    const [chatwith,setchatwith]=useState();
    const [text,settext]=useState('');
    const [conversations,setconversations]=useState(null)
    const [activeUser,setactiveUser]=useState(null)
    const socket=useRef();
    const [newmsg,setnewmsg]=useState(null);
    

    useEffect(()=>{
           socket.current=io('ws://localhost:9000')
    },[])
    return (
        <AccountContext.Provider value={{account,setaccount,chatwith,setchatwith,text,settext,conversations,setconversations,socket,activeUser,setactiveUser,newmsg,setnewmsg}}>
              {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;