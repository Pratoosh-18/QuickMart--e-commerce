import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Card = ({ id, img, name, new_price, old_price }) => {
  const { addToCart, showCart } = useContext(ProductContext);
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="w-[165px] sm:w-[260px] m-0.5 sm:m-2 sm:p-2 rounded-lg mb-3   ">
      <Link
        onClick={() => scrollToTop()}
        to={`/product/${id}`}
        className="rounded-md overflow-hidden mb-2"
      >
        <img className="rounded" src={img} alt="" />
      </Link>
      <div className="mt-2 text-sm sm:text-base sm:mb-2">{name}</div>
      <div className="text-lg sm:text-xl flex gap-2 font-medium items-center">
        ${new_price}
        <p className="text-xs sm:text-base ml-2 sm:ml-3 text-red-500">
          {" "}
          {parseFloat(100 - (old_price / new_price) * 100).toFixed(2)}%
        </p>
        <p className="hidden sm:block text-base text-gray-700 line-through">
          {old_price}
        </p>
      </div>
    </div>
  );
};

export default Card;
