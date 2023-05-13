import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({handleSumbit, noEmail = false}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handle = e => {
      handleSumbit(e, email, password)
   } 

   return (
      <>
       <div className="Auth-form-container">
         <form className="Auth-form" onSubmit={handle}>
         <div className="Auth-form-content">
            {!noEmail && (
               <h3 className="Auth-form-title">Login</h3>
            )}
            {!noEmail && (
               <p className="subtitle">Don't have an account? <Link to="/register">Register</Link></p>
            )}
            {!noEmail && (
            <div className="form-group mt-3">
               <label>Email address</label>
               <input
               type="email"
               className="form-control mt-1"
               placeholder="Enter email"
               onChange={e => setEmail(e.target.value)} value={email}
               />
            </div>
            )}
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
            <p className="forgot-password text-right mt-2">
               <Link to='/forgotpassword'>Forgot password?</Link>
            </p>
         </div>
         </form>
      </div>
      </>
     )
}

export default LoginForm