import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { all_product, cartItems } = useContext(ProductContext);
  let p = 0;

  for (let index = 1; index < all_product.length + 1; index++) {
    if (cartItems[index] > 0) {
      p = p + all_product[index - 1].new_price * cartItems[index];
    }
  }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="py-10 flex w-full flex-col-reverse lg:flex-row justify-center gap-4 lg:px-15 px-5 bg-[#EAEDED]">
      <div className="flex flex-col">
        <div className="hidden sm:block bg-white px-4 pt-6 text-2xl border-b-gray-200 border-b-2 rounded-lg">
          <div className="pb-2">
            Shopping Cart
            </div>
          <div className="flex justify-end text-sm font-semibold">
            <div>Price</div>
          </div>
        </div>
        {all_product.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <CartCard
                id={item.id}
                img={item.image}
                name={item.name}
                quantity={cartItems[item.id]}
                price={item.new_price}
              />
            );
          }
        })}
      </div>
      <div className=" lg:w-[250px] w-full lg:sticky top-10 flex flex-col border-2 h-fit py-3 px-6 text-xl gap-2 lg:gap-4 bg-white rounded-lg">
        <p className="block lg:hidden font-medium">Shopping Cart</p>
        <p>Price details:</p>
        <p className="font-semibold">Total price : ${p}</p>
        <div className="flex">
          <input className="mr-1" type="checkbox" name="gift" id="" />
          <div className="text-sm mb-">This will be a gift</div>
        </div>
        <Link to={'/order'}  onClick={() => scrollToTop()}  className="text-base justify-center flex rounded-lg px-2 py-2 bg-yellow-400">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
