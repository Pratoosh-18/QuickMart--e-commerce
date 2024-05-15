import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/all_product";
import Card from "./Card";

const LandingPage = () => {
  const { all_product } = useContext(ProductContext);

  return (
    <>
      <div className="flex w-full justify-center">
        <img src={assets.banner_kids} alt="" />
      </div>
      <div className="mx-10 my-3 md:mx-20 md:my-5 lg:mx-32 lg:my-10 text-2xl ">
        Deals of the day!
      </div>
      <div className="mx-2 sm:mx-10 flex flex-wrap justify-center">
        {all_product.map((item) => {
          if (item.id % 5 === 0 || item.id === 11) {
            return (
              <Card
                id={item.id}
                img={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <div className="flex w-full justify-center">
        <img src={assets.banner_mens} alt="" />
      </div>
      <div className="mx-10 my-3 md:mx-20 md:my-5 lg:mx-32 lg:my-10 text-2xl ">
        Check these out!
      </div>
      <div className="mx-2 sm:mx-10 flex flex-wrap justify-center">
        {all_product.map((item) => {
          if (item.id % 3 === 0) {
            return (
              <Card
                id={item.id}
                img={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <div className="flex w-full justify-center">
        <img src={assets.banner_womens} alt="" />
      </div>
      <div className="mx-10 my-3 md:mx-20 md:my-5 lg:mx-32 lg:my-10 text-2xl ">
        Latest Trends!
      </div>
      <div className="mx-2 sm:mx-10 flex flex-wrap justify-center">
        {all_product.map((item) => {
          if (
            item.id % 4 === 0 ||
            item.id === 25 ||
            item.id === 21 ||
            item.id === 7
          ) {
            return (
              <Card
                id={item.id}
                img={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default LandingPage;
