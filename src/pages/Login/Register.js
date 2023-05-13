import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { register } from '../../firebase/firebase'

import '../../assets/LoginRegister.css'

export default function Register(){

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()

   const handleSumbit = async e => {
      e.preventDefault()
      const user = await register(email, password)
      console.log(user);
      navigate('/login', {
         replace: true
      }) 

   }

  return (
   <>
   <div className="Auth-form-container">
         <form className="Auth-form" onSubmit={handleSumbit}>
         <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <p className="subtitle">have an account? <Link to="/login">Login</Link></p>
            <div className="form-group mt-3">
               <label>Email address</label>
               <input
               type="email"
               className="form-control mt-1"
               placeholder="Enter email"
               onChange={e => setEmail(e.target.value)} value={email}
               />
            </div>
            <div className="form-group mt-3">
               <label>Password</label>
               <input
               type="password"
               className="form-control mt-1"
               placeholder="Enter password"
               onChange={e => setPassword(e.target.value)} value={password}
               />
            </div>
            <div className="d-grid gap-2 mt-3">
               <button type="submit" className="btn btn-primary">
               Submit
               </button>
            </div>
            {/* <p className="forgot-password text-right mt-2">
               Forgot <Link to='/forgotpassword'>password?</Link>
            </p> */}
         </div>
         </form>
      </div>
   </>
  )
}
