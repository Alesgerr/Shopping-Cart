import { login, reAuth } from "../../../firebase/firebase";
import LoginForm from "../../../pages/Login/LoginForm";

export default function ReAuthModal({close}){
   
   const handleSumbit = async (e, email, password)=> {
      e.preventDefault()
      const result = await reAuth(password)
      console.log(result);
      close()
   }
   return (
   <LoginForm handleSumbit={handleSumbit} noEmail={true} />
   )
}