import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { login } from '../../firebase/firebase';
import { login as loginHandle } from '../../store/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../assets/LoginRegister.css'
import LoginForm from './LoginForm';

export default function Login(){
  
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleSumbit = async (e, email, password) => {
      e.preventDefault()
      const user = await login(email, password)
      if(user){
         dispatch(loginHandle(user))
         navigate('/', {
            replace: true
         })
      }
      // console.log(user);
   }
   
   return <LoginForm handleSumbit={handleSumbit} />
}
