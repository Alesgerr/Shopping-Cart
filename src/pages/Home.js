import React from "react";
import Slider from "react-slick";
import SliderData from "../components/HomeSliderD/SliderData";
import Footer from '../components/Footer/Footer'
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import '../assets/HomeLayout.css'
import FlashCard from "./FlashCard";
const Home = () => {
 
   // const [data, setData] = useState([])
   // const [filter, setFilter] = useState(data)
   // const [loading, setLoading] = useState(false)


   // useEffect(() => {
   //    const api = 'https://fakestoreapi.com/products'
   //    const getProduct = async () => {
   //       setLoading(true)
   //       const res = await axios.get(api)
   //       console.log(res.data);
   //       setData(res.data)
   //       setFilter(res.data)
   //       setLoading(false)
   //    }
   //    getProduct()
   // }, []);
   const PrevArrow = (props) => {
      const { onClick } = props
      return(
         <div onClick={onClick} className="control-btn">
            <button className="prev">
               <AiOutlineArrowLeft />
            </button>
         </div>
      )
   }
   const NextArrow = (props) => {
      const { onClick } = props
      return(
         <div onClick={onClick} className="control-btn">
            <button className="next">
               <AiOutlineArrowRight />
            </button>
         </div>
      )
   }
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
              dots: true
            }
          },
         {
           breakpoint: 600,
           settings: {
            dots: true
           }
         },
         {
           breakpoint: 480,
           settings: {
            dots:false
           }
         }
       ]
    };
   
  return (
      <div id="Home">
         <div className="container">
            <div className="row">
               <div className="col-lg-3">
                  <h1>Category</h1>
               </div>
               <div className="col-lg-9">
                  <Slider {...settings}> 
                     {SliderData.map((value, index) => {
                        return (
                           <div className="slider-box" key={index}>
                              <img src={value.image} alt="" />
                           </div>
                        )
                     })}
                  </Slider>
               </div>
            </div>
         </div>
         <div className="productSlide">
            <div className="container">
               <div className="head">
                  <h3>Sizin üçün Seçdiklərimiz</h3>
               </div>
              <FlashCard />
            </div>
         </div>
         <Footer />
      </div>
  );
};

export default Home;
