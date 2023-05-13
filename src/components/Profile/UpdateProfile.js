import { useState } from "react"
import { update , auth, resetPassword, emailVerification, logout} from "../../firebase/firebase"
import { useDispatch, useSelector } from "react-redux"
import { login, logout as logoutHandle } from "../../store/auth"
import '../../assets/UpdateProfile.css'
import '../../assets/LoginRegister.css'
import { Link } from "react-router-dom"

export default function UpdateProfile(){
   const { user } = useSelector(state => state.auth)
   const [displayName, setDisplayName] = useState(user.displayName || '')
   const [avatar, setAvatar] = useState(user.photoURL || '')
   const [password, setPassword] = useState('')
   const dispatch = useDispatch()

   const handleSumbit = async e => {
      e.preventDefault()

      await update({
         displayName,
         photoURL: avatar
      })

      dispatch(login({
         displayName: auth.currentUser.displayName,
         email: auth.currentUser.email,
         emailVerified: auth.currentUser.emailVerified,
         photoURL:  auth.currentUser.photoURL,
         uui:  auth.currentUser.uid
      }))
      console.log(user);

   }
   const handleResetSumbit = async e => {
      e.preventDefault()
      const result = await resetPassword(password)
      if(result){
         setPassword('')
      }
   }
   const handleLogout = async () => {
      await logout()
      dispatch(logoutHandle())
   }

   const handleVerification = async () => {
      await emailVerification()
   }
   return(
      <> 
         {/* <div className="profil-updates">
            <h1 className="fw-bold mb-4">Profile Update</h1>
            <div className="mx-auto">
               {user.photoURL && 
               <img src={user.photoURL} className="w-25 h-25 rounded-full" />
               }
               <h3>Email : {user.email}
               </h3>
               <button onClick={handleLogout} className="btn btn-danger">Cikis Yap</button>
               <h3>Email Verification</h3>
               {!user.emailVerified && 
               <button onClick={handleVerification} className="btn btn-danger">Verification</button>}
            </div>
            <form onSubmit={handleSumbit} >
               <div className="div">
                  <h3>Name Surname</h3>
                  <input className="profil-input" type="text" placeholder="John doe" value={displayName} onChange={e => setDisplayName(e.target.value)}/>
                  <h3>Photo Update</h3>
                  <input className="profil-input" type="text" placeholder="Photo..." value={avatar}  onChange={e => setAvatar(e.target.value)}/>
                  <div className="btn-div">
                     <button className="btn btn-danger">Update</button>
                  </div>
               </div>
            </form>
            <form onSubmit={handleResetSumbit} >
               <div className="div">
                  <h3>Password Reset</h3>
                  <input className="profil-input" type="password" placeholder="******" value={password} onChange={e => setPassword(e.target.value)}/>
                  <div className="btn-div">
                     <button disabled={!password} className="btn btn-danger">Reset Password</button>
                  </div>
               </div>
            </form>
         </div>    */}
         <div className="Auth-form-container p-0">
         <div className="Auth-form-content">
               <div className="profil-avatar text-center">
                  {user.photoURL && 
                  <img src={user.photoURL} className="w-25 h-25 rounded-circle" />
                  }
               </div>
               <h3 className="Auth-form-title">Profil Update</h3>
               <h5>Email : {user.email}</h5>
               <button onClick={handleLogout} className="btn btn-primary w-100">Cikis Yap</button>
               <h5>Email Verification</h5>
               {!user.emailVerified && 
               <button onClick={handleVerification} className="btn btn-primary w-100">Verification</button>}
            <form onSubmit={handleSumbit} >
               <div className="div">
                  <h5>Name Surname</h5>
                  <input className="form-control mt-1" type="text" placeholder="John doe" value={displayName} onChange={e => setDisplayName(e.target.value)}/>
                  <h5>Photo Update</h5>
                  <input className="form-control mt-1" type="text" placeholder="Photo..." value={avatar}  onChange={e => setAvatar(e.target.value)}/>
                  <div className="btn-div">
                     <button className="btn btn-primary d-grid gap-2 mt-3 w-100">Update</button>
                  </div>
               </div>
            </form>
            <form onSubmit={handleResetSumbit}>
            <div className="form-group mt-3">
                  <h5>Password Reset</h5>
                  <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password} onChange={e => setPassword(e.target.value)}
                  />
                  <div className="d-grid gap-2 mt-3">
                     <button disabled={!password} className="btn btn-primary">Reset Password</button>
                  </div>
            </div>
            </form>
             </div>
      </div>
            
      </>
   )
}