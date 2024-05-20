import React, { useState } from "react";
import { assets } from "../assets/all_product";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [navCategory, setNavCategory] = useState("Shop");
  const { loginWithRedirect,logout, user, isAuthenticated  } = useAuth0();

  return (
    <div>
      
    <div className="w-full h-16 md:h-20 flex justify-around items-center border-b-2">
      <Link to={"/"} onClick={() => setNavCategory("Shop")} className="flex items-center gap-2">
        <div>
          <img
            className="w-8 sm:w-14 rounded-md"
            src={assets.wesite_logo}
            alt=""  
          />
        </div>
        <div className="hidden sm:block md:text-xl">QuickMart</div>
      </Link>

      <div className="text-sm sm:text-base flex items-center gap-2 sm:gap-4 md:gap-10 lg:gap-16 lg:text-lg">
        <Link
          to="/"
          className=" hover:cursor-pointer"
          onClick={() => setNavCategory("Shop")}
        >
          Shop{" "}
          {navCategory === "Shop" ? <hr className="bg-black h-1" /> : <></>}{" "}
        </Link>
        <Link
          to="/women"
          className="hover:cursor-pointer"
          onClick={() => setNavCategory("Women")}
        >
          Women{" "}
          {navCategory === "Women" ? <hr className="bg-black h-1" /> : <></>}{" "}
        </Link>
        <Link
          to="men"
          className="hover:cursor-pointer"
          onClick={() => setNavCategory("Men")}
        >
          Men {navCategory === "Men" ? <hr className="bg-black h-1" /> : <></>}{" "}
        </Link>
        <Link
          to="/kids"
          className="hover:cursor-pointer"
          onClick={() => setNavCategory("Kids")}
        >
          Kids{" "}
          {navCategory === "Kids" ? <hr className="bg-black h-1" /> : <></>}{" "}
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-4 lg:gap-8 lg:text-lg">
        <div>
          {
            isAuthenticated?
          <div className="px-2 py-1 text-sm sm:text-base border-2 border-black sm:px-4 sm:py-1 md:px-8 md:py-2 rounded-full hover:cursor-pointer"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Logout
          </div>
          :
            <div className="px-2 py-1 text-sm sm:text-base border-2 border-black sm:px-4 sm:py-1 md:px-8 md:py-2 rounded-full hover:cursor-pointer"
            onClick={() => loginWithRedirect()}
          >Login
          </div>
          }
          
        </div>
        <Link
          to="/cart"
          className="hover:cursor-pointer"
          onClick={() => setNavCategory("Cart")}
        >
          Cart <i class="fa-solid fa-cart-shopping"></i>
          {navCategory === "Cart" ? (
            <hr className="bg-black h-1" />
          ) : (
            <></>
          )}{" "}
        </Link>
      </div>
    </div>
    {
      isAuthenticated && navCategory === "Shop" && <div className="flex w-100 h-auto px-4  md:px-10  lg:px-24 text-sm sm:text-base py-2 sm:py-5 lg:text-xl">
      Hey {user.name}!  We got some great deals for you today !
    </div>
    }
    
    </div>
  );
};

export default Navbar;
