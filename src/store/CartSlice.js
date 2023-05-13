import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   cart: [],
   // stockItem: false
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const itemInCart = state.cart.find((item) => item.id === action.payload.id);
         if (itemInCart) {
            if(itemInCart.quantity < 10){
               itemInCart.quantity++;
            }
         } else {
         state.cart.push({ ...action.payload, quantity: 1 });
         }
      },
      incrementQuantity: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload)
         if(item.quantity < item.rating.count){
            console.log('salam');
            item.quantity++   
         }
         console.log(item.rating.count);

      },
      decrementQuantity: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload)
         if(item.quantity === 1){
            const removeItem = state.cart.filter((item) => item.id !== action.payload)
            state.cart = removeItem
         } else {
            item.quantity--
         }
      },
      removeItem: (state, action) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload)
         state.cart = removeItem
      },
      
   }
})

export const cartReducer = cartSlice.reducer
export const {addToCart, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions