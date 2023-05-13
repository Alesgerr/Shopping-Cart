import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TbCurrencyManat } from 'react-icons/tb'
import Slider from 'react-slick'
import '../assets/FlashCard.css'
import { Link } from 'react-router-dom'

const FlashCard = () => {
   const [data, setData] = useState([])
   const [category, setCategory] = useState([])


   useEffect(() => {
      const api = `https://fakestoreapi.com/products/${category}`
      const getProduct = async () => {
         const res = await axios.get(api)
         setCategory(res)
         setData(res.data)
      }
      getProduct()
   }, []);

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    };
  return (
    <div>
       <Slider {...settings}>
         {data && data.map((item, index) => (
            <div className='flashCard' key={index}>
               <Link to={`/product/${item.id}`}>
                  <div className="img-div">
                     <img src={item.image} alt="" />
                  </div>
               </Link>
                  <div className="title-box">
                     <h6>{item.title.substring(0,30)}</h6>
                  </div>
                  <div className="price-box">
                     <p className='price-item'>
                     <span>{item.price}</span>
                     <TbCurrencyManat />
                     </p>
                  </div>
               <div className="btn-box">
                  <button className='btn-add-to-cart'>
                     <span>Sebete At</span>
                  </button>
               </div>
            </div>
         ))}
       </Slider>
    </div>
  )
}

export default FlashCard