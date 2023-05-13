import React from 'react';
import '../assets/HomeLayout.css'
import UpdateProfile from '../components/Profile/UpdateProfile';
import { useSelector } from "react-redux";
import Login from './Login/Login';


const Profile = () => {
   const { user } = useSelector(state => state.auth)

   if(user){
      return(
         <div className='container'>
            <UpdateProfile />
         </div>
      )
   }
   else{
      return(
         <div>
            <Login />
         </div>
      )
   }
}

export default Profile