import React from "react";
import { assets } from "../assets/all_product";

const Footer = () => {
  return (
    <div className="pt-5 pb-20">
      <div className="flex items-center justify-center pt-10 border-t-2">
        <img className="w-10 mr-2 sm:w-20" src={assets.wesite_logo} alt="" />
        <p className="text-xl sm:text-3xl">QuickMart</p>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-4 lg:gap-28 mt-10 text-sm sm:text-base">
        <div className="flex gap-4 lg:gap-28 justify-center">
          <div>
            <p className="text-lg font-semibold py-2">Get to know us</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Our science</p>
            <p>Help</p>
          </div>
          <div>
            <p className="text-lg font-semibold py-2">Contact with us</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="flex  gap-4 lg:gap-28 justify-center">
          <div>
            <p className="text-lg font-semibold py-2">Make money</p>
            <p>Sell with us</p>
            <p>Global selling</p>
            <p>Merchants</p>
            <p>Become an affiliate</p>
            <p>Build your brand</p>
          </div>
          <div className="pb-10">
            <p className="text-lg font-semibold py-2">Help</p>
            <p>Your account</p>
            <p>Download app</p>
            <p>Return centre</p>
            <p>100% protection</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      <div className="text-sm sm:text-base flex justify-center pt-10 border-t-2">
        © 2024 All rights reserved, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
