import React from "react";
import { Link } from "react-router-dom";

const OrderCompletedpage = () => {
  
  return (
    <div className="w-full h-[85vh] gap-3 px-10 flex justify-center items-center border-t-2 flex-col">
      
      <p className="text-3xl font-semibold pb-10">Thank you for your order.</p>
      <p>Your order was completed successfully<i class="fa-solid text-xl fa-cart-shopping"></i></p>
      
        <p className="flex items-center"><i class="fa-solid fa-message text-[30px] mr-3"></i>An email receipt including the details about the order has been sent to you.</p>
      <Link to={'/'} className="underline text-orange-600">
      Back to homepage &rarr;
      </Link>
    </div>
  );
};

export default OrderCompletedpage;
