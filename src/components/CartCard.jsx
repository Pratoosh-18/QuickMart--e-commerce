import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CartCard = ({ id, img, name, quantity, price }) => {
  const { addToCart, deleteFromCart, removeFromCart } =
    useContext(ProductContext);

  return (
    <div>
      <div className="md:w-full lg:w-[700px] border-b-gray-200 border-b-2 flex justify-between py-2 sm:py-4 p-2 sm:px-4 rounded-md bg-white">
        <div className="flex">
          <div className="mr-3">
            <img className="w-40" src={img} alt="" />
          </div>

          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col justify-between h-full">
              <div className=" flex flex-col gap-2 lg:gap-0 w-full lg:w-fit">
                <div>
                  <p className=" lg:mb-3">{name}</p>
                </div>
                <div className="flex">
                  <input className="mr-1" type="checkbox" name="gift" id="" />
                  <div className="text-sm">This will be a gift</div>
                </div>
                <div className="flex text-sm lg:gap-3">
                  <div>Quantity : {quantity}</div> |
                  <div
                    className="hover:cursor-pointer text-sm"
                    onClick={() => deleteFromCart(id)}
                  >
                    Delete
                  </div>{" "}
                  |<div className="hover:cursor-pointer text-sm">Save</div> |
                  <div className="hover:cursor-pointer text-sm">Share</div>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-4 mt-2">
                <button
                  onClick={() => addToCart(id)}
                  className="w-24 px-2 py-2 text-sm sm:w-40 sm:px-5 sm:py-2 border-2 rounded-lg"
                >
                  Add more
                </button>
                <button
                  onClick={() => removeFromCart(id)}
                  className="w-24 px-2 py-2 text-sm sm:w-40 sm:px-5 sm:py-2 border-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex  justify-center sm:flex-col font-semibold items-center text-xl ml-6 h-fit mt-3 sm:mt-0 ">
              <p className="block sm:hidden">Price:</p>
              <p>${price * quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
