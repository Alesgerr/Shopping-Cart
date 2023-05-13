import { configureStore } from "@reduxjs/toolkit";
import auth from './auth'
import modal from './modal'
import { cartReducer } from "./CartSlice";

const store = configureStore({
   reducer: {
      auth,
      modal,
      cartReducer
   }
})
export default store