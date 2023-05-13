import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import '../assets/Cart.css'
import { decrementQuantity, incrementQuantity, removeItem } from '../store/CartSlice'
import { TbCurrencyManat } from 'react-icons/tb';
import { BsCart4 } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri'


const Cart = () => {
  const {cart} = useSelector((state) => state.cartReducer)
  const { user } = useSelector(state => state.auth)

  console.log(cart);  
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  const {id} = useParams()
 
 
  useEffect(() => { 
     
     const getProduct = async () => {
     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
     setProduct(response.data);
     setProduct(cart)
        
     }
     getProduct()
    //  setData(card)      
  },[cart])
  const EmptyCart = () => {
    return(
      <div className='emptyCart'>
        <div className="icon-box">
          <BsCart4 />
        </div>
        <div className="emptyCart-title">
          <h3>Səbətiniz Boşdur </h3>
        </div>
        <Link className='text-decoration-none' to='/product'>Alışverişə Dəvam Elə</Link>
      </div>
    )
 }
  const getTotalQuantity = () => {
      let total = 0
      cart.forEach(item =>{
        total += item.quantity
      })
      return total
  }

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalQuantity, totalPrice}
  }

  return (
    <div className='container'>
    {(product.length === 0) ? <EmptyCart /> :
      <div className="row">
        <div className="head">
          <h1>Sebet</h1>
        </div>
        <div className="col-lg-8">
          {product?.map((item) => {
          return(
            <div key={item.id}>
              <div className="cart">
               <Link to={`/product/${item.id}`}>
                  <div className="cart-img">
                    <img src={item.image} alt="" />
                  </div>
               </Link>
                <div className="cart-title">
                  <Link>
                    <p>{item.title}</p>
                  </Link>
                </div>
                <div className="cart-quantity">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <div className="cart-price">
                  <p>
                    <span>{item.price}</span>
                    <TbCurrencyManat />
                  </p>
                </div>
                <div className="cart-delete">
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            </div>
          )
        }) }
        </div>
        {product.length !== 0 && (
          <div className="col-lg-4">
          <div className="wrapper">
            <h5>Sebetdeki Mehsullar</h5>
            <div className="about">
              <div className="price">
                <p>Umumi :</p>
                <span>{getTotal().totalQuantity} Mehsul</span>
                {/* <p>{getTotalQuantity() || 0}</p> */}
              </div>
            </div>
            <div className="total">
              <p>{getTotal().totalPrice.toFixed(2)}</p>
              <TbCurrencyManat />
            </div>
            <div className="checkout">
              {user && (
                <button>Sifarisi Resmilesdir</button>
              )}
            </div>
          </div>
        </div>
        )}
      </div>
    }
    </div>
  )
}

export default Cart