import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Card from "./Card";

const ProductPage = () => {
  const { all_product, addToCart } = useContext(ProductContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  const randomVal = () => {
    let t=(Math.floor(Math.random() * 10));
    return t
  }

  return (
    <div className="w-full h-auto">
      <div className="flex w-full flex-col md:flex-row justify-center my-10 mx-5">
        <div className="flex md:flex-row flex-col-reverse ">

        <div className="flex md:flex-col w-14 md:w-16 sm:gap-3 gap-2 mr-3 mt-2 md:mt-0">
          <img className="w-80" src={all_product[productId - 1].image} alt="" />
          <img className="w-80" src={all_product[productId - 1].image} alt="" />
          <img className="w-80" src={all_product[productId - 1].image} alt="" />
          <img className="w-80" src={all_product[productId - 1].image} alt="" />
          <img className="w-80" src={all_product[productId - 1].image} alt="" />
        </div>
        <div>
          <img className="w-90" src={all_product[productId - 1].image} alt="" />
        </div>
        </div>
        <div className="w-96 sm:px-6 py-6">
          <div className="text-2xl mb-4">{all_product[productId - 1].name}</div>
          <div className="flex items-center">
            <p className="mr-1">3.9</p>
            <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}>
              {" "}
            </i>
            <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}>
              {" "}
            </i>
            <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}>
              {" "}
            </i>
            <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}>
              {" "}
            </i>
            <i class="fa-solid fa-star" style={{ color: "#969696" }}>
              {" "}
            </i>
            <p className="mr-1">13,000 ratings</p>
          </div>
          <p className="text-sm">200+ bought this month</p>
          <p className="mt-5 flex">
            <p className=" text-3xl font-medium mr-3">
              $ {all_product[productId - 1].new_price}
            </p>
            <p className="text-xl text-red-500">
              {" "}
              {parseFloat(
                100 -
                  (all_product[productId - 1].old_price /
                    all_product[productId - 1].new_price) *
                    100
              ).toFixed(2)}
              %
            </p>
          </p>
          <p className="text-sm flex text-gray-600">
            M.R.P. :{" "}
            <p className="ml-2 line-through">
              {all_product[productId - 1].old_price}
            </p>
          </p>
        </div>
        <div className="flex w-full md:w-64 justify-center">

        <div className="w-64 border-2 rounded-lg border-gray-300 px-3 py-4 sm:py-10 h-fit flex flex-col">
          <p className=" text-3xl font-medium mr-3">
            $ {all_product[productId - 1].new_price}
          </p>
          <p className="text-gray-600 flex gap-1">
            <p>Delivery till</p>
            <p className="font-medium text-black">Thursday</p>
          </p>
          <p className="text-green-600 text-lg mt-4 ">
            <p>In Stock</p>
          </p>
          <p>
            <p>Ships from Company</p>
          </p>

          <div className="buttons flex flex-col gap-3 mt-4">
            <button
              className="bg-yellow-300 h-9 rounded-full"
              onClick={() => addToCart(productId)}
              >
              Add to cart
            </button>
            <button
              className="bg-orange-400 h-9 rounded-full"
              onClick={() => addToCart(productId)}
              >
              Buy Now
            </button>
          </div>
              </div>
        </div>
      </div>

      <div className="my-14">
        <p className="mx-10 md:mx-28 my-10 text-2xl">Browse more products</p> 
        <div className="mx-2 sm:mx-10 my-5 flex flex-wrap justify-center">
          {all_product.map((item) => {
            if (item.id % (randomVal()) === 0) {
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
      </div>
    </div>
  );
};

export default ProductPage;
