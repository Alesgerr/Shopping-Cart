import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ star, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1
          ? <FaStar className="icon" /> 
          : star >= number
          ? <FaStarHalfAlt className="icon" />
          : <AiOutlineStar className="icon" />}
      </span>
    );
  });
  return (
      <div className="icon-style">
         {ratingStar}
      </div>
   )
};

export default Star;
