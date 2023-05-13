import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import '../assets/ProductDetail.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'


const ProductDetail = () => {
   const {id} = useParams()
   const [product, setProduct] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      const getProduct = async ()  => {
         setLoading(true)
         const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
         setProduct(res.data)
         setLoading(false)         
      }
      getProduct()
   }, [id])
   const Loading = () => {
   return(
      <>
      <div className='alltop'>
          <div className='row'>
             <div className='col-md-6'>
                <Skeleton height={400}/>
             </div>
             <div className='col-md-6'>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
             </div>
          </div>
      </div>
    </>
   )
   }
   const ShowProduct = () => {
      return(
         <div id="alltop">
            <div className="row">
               <div className="col-12">
                  <ul>
                     <li>
                        <NavLink to='/'>Esas Sehife</NavLink>
                     </li>
                     <li>
                        <NavLink>Sebet</NavLink>
                     </li>
                  </ul>
               </div>
            <div className="col-md-6">
               <div className="img-div">
                  <img src={product.image} alt={product.title} 
                     height="300px" width="300px"
                     className='img-fluid'
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="div">
                  <h4 className='text-text-uppercase text-black-50'>
                     {product.category}
                  </h4>
                  <h3 className='display-5 fs-2'>{product.title}</h3>
                  <p className="lead fw-bolder">
                  Rating {product.rating && product.rating.rate}
                  </p>
                  <div className="price d-flex align-items-center">
                     <h3 className='display-1 fw-bold my-4 fs-4'>${product.price}</h3>
                     <button className='btn'>Səbətə At</button>
                  </div>
                  <p className="lead fs-5">{product.description}</p>
                  
                  <NavLink to='/cart' className="text-decoration-none">
                  Go to Cart
                  </NavLink>
               </div>
            </div>
         </div>
      </div>
      )
   }

  return (
   <div className="container">
      {loading ? <Loading  /> : <ShowProduct />}
   </div>
  )
}

export default ProductDetail