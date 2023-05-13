import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import Star from "../components/Rating/Star";
import { TbCurrencyManat } from 'react-icons/tb';
import '../assets/Product.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/CartSlice';
const Product = () => {
   const {cart} = useSelector((state) => state.cartReducer)
   console.log(cart);

   const dispatch = useDispatch()
   const [data, setData] = useState([])
   const [filter, setFilter] = useState(data)
   const [loading, setLoading] = useState(false)
   useEffect(() => {
      const api = 'https://fakestoreapi.com/products'
      const getProduct = async () => {
         setLoading(true)
         const res = await axios.get(api)
         setData(res.data)
         setFilter(res.data)
         setLoading(false)
      }
      getProduct()
   }, []);

   const filterHandle = (cat) => {
      const updatelist = data.filter((x) => x.category === cat)
      setFilter(updatelist)
   }


   const addCart = (item) => {
      dispatch(addToCart(item))
      console.log(item);
   }

  return (
   <div id="main">{loading ? < Loader /> :
      <div className="container">
         <div className="row main-row">
            <div className="col-lg-3">
               <button onClick={() => setFilter(data)} className="w-100 mb-4">All</button>
               <button onClick={() => filterHandle("men's clothing")} className="w-100 mb-4">Men</button>
               <button onClick={() => filterHandle("women's clothing")} className="w-100 mb-4">Women</button>
               <button onClick={() => filterHandle("electronics")} className="w-100 mb-4">Electronic</button>
               <button onClick={() => filterHandle("jewelery")} className="w-100 mb-4">Jewelry</button>
            </div>
            <div className="col-lg-9 home">
               <div className="row">
                     {filter.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 g-3" key={index}>
                           <div className="card">
                           <Link to={`/product/${item.id}`}>
                           <div className="card-img">
                                 <img src={item.image} alt="" />
                              </div>
                              <div className="card-body">
                                 <div className="card-title">
                                    <h6>{item.title.length > 10 ? item.title.slice(0,18) + '...' : item.title}</h6>
                                 </div>
                                 <div className="card-rating">
                                    <Star star={item.rating.rate}/>
                                    <span>{item.rating.count ?
                                       <p className='stock-a'>Stokda Var</p> : 
                                       <p className='stock-b'>Stokda Yoxdur</p>}
                                    </span>
                                 </div>
                                 <div className="card-info">
                                    <div className="card-price">
                                       <span>{item.price} <TbCurrencyManat /></span>
                                    </div>
                                 </div>
                              </div>
                           </Link>
                              <div className="card-btn">
                                 <button 
                                 onClick={() => 
                                    addCart(item)
                                 }
                                 >Səbətə At</button>
                              </div>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   }
   </div>
  )
}

export default Product