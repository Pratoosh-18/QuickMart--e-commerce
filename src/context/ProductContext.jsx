import { createContext, useState } from "react";
import all_product from "../assets/all_product";
import { toast } from 'react-toastify';

export const ProductContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    toast.success("Added to Cart",{
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true, 
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
    toast.warn("Removed from Cart",{
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true, 
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const deleteFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
    toast.error("Deleted from Cart",{
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true, 
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const ContextVal = {
    all_product,
    addToCart,
    removeFromCart,
    cartItems,
    deleteFromCart,
  };

  return (
    <ProductContext.Provider value={ContextVal}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
