import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updatePassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'
import  toast  from "react-hot-toast";
import store from "../store";
import { login as loginHandle, logout as logoutHandle } from "../store/auth";
import { openModal } from "../store/modal";
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID
   apiKey: "AIzaSyCFY_vm-wA-uSN3JHIZ17Cal6NgDz3qnLM",
   authDomain: "shopping-cart-f4151.firebaseapp.com",
   projectId: "shopping-cart-f4151",
   storageBucket: "shopping-cart-f4151.appspot.com",
   messagingSenderId: "684543833174",
   appId: "1:684543833174:web:0cfe3bf40a39375a3837f7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();


export const register = async (email, password) => {
  try {
   const { user } = await  createUserWithEmailAndPassword(auth, email, password)
   return user
   } 
   catch (error) {
      toast.error(error.message);
   }
}
export const login = async (email, password) => {
   try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      return user
   }
   catch (error) {
      toast.error(error.message);
   }
}
export const reAuth = async password => {
   try {
      const credential = await EmailAuthProvider.credential(
         auth.currentUser.email,
         password
      )
      const { user } = await reauthenticateWithCredential(auth.currentUser, credential)
      return user
   }
   catch (error) {
      toast.error(error.message);
   }
}
export const logout = async () =>{
   try {
      await signOut(auth)
      return true
   }
   catch (error) {
      toast.error(error.message);
   }
}
export const update = async data => {
  try {
   await updateProfile(auth.currentUser, data) 
   toast.success('Profile Updated')
   return true
  } catch (error) {
   toast.error(error.message)
  }
}
export const resetPassword = async password => {
   try {
    await updatePassword(auth.currentUser, password) 
    toast.success('Password Updated!')
    return true
   } catch (error) {
      if(error.code === 'auth/requires-recent-login'){
         store.dispatch(openModal({
            name: 're-auth-modal'
         }))
      }
    toast.error(error.message)
   }
 }

export const emailVerification = async () => {
   try {
      await sendEmailVerification(auth.currentUser)
      toast.success(`${auth.currentUser.email} adresine dogrulama maili gonderildi`)
   } catch (error) {
      toast.error(error.message)
   }
}
onAuthStateChanged(auth, (user) => {
   if(user){
      store.dispatch(loginHandle({
         displayName: user.displayName,
         email: user.email,
         emailVerified: user.emailVerified,
         photoURL: user.photoURL,
         uui: user.uid
      }))
   }
   else{
      store.dispatch(logoutHandle())
   }
})
export default app