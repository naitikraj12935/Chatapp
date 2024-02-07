
import Message from "./Component/Message"
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./Context/AccountProvider";
export default function App() {
  const clientId='208509438236-99r5o0kdg01tbi0lvte2pmrgmc8eoljg.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
     <Message/>
     </AccountProvider>
    </GoogleOAuthProvider>
  )
}
