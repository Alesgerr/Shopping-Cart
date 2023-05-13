import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../assets/LoginRegister.css'
import { emailVerification } from '../../firebase/firebase'
import { useSelector } from 'react-redux'
const ForgotPassword = () => {
   const { user } = useSelector(state => state.auth)

   const handleVerification = async () => {
      await emailVerification()
   }
  return (
   <div className="container">
      <div className="card">
         {!user.emailVerified && 
               <button onClick={handleVerification} className="btn btn-danger">Verification</button>}
      </div>   
   </div>
  )
}

export default ForgotPassword