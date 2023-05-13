import {Routes, Route  } from 'react-router-dom'
import HomeLayout from '../pages/HomeLayout'
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/Profile";
import Register from "../pages/Login/Register";
import AuthLayout from "../pages/auth/AuthLayout";
import Product from "../pages/Product";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";

const Main = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='/contact' element={<Contact /> }/>
          <Route path='/profil' element={<Profile /> }/>
          <Route path='/cart' element={<Cart /> }/>
          <Route path='/product/:id' element={<ProductDetail /> }/>
          <Route path='/register' element={<Register /> }/>
          <Route path='/login' element={<Login /> }/>
          <Route path='/forgotpassword' element={<ForgotPassword /> }/>
          <Route path='/product' element={<Product /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default Main