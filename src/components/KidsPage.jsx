import React, { useContext } from 'react'
import { assets } from '../assets/all_product'
import { ProductContext } from '../context/ProductContext'
import Card from './Card'

const KidsPage = () => {

  const {all_product} = useContext(ProductContext)


  return (
    <>
        <div className="flex w-full justify-center">
      
      <img src={assets.banner_kids} alt="" />
    </div>
        <div className="mx-2 sm:mx-10 my-5 flex flex-wrap justify-center">
        {all_product.map((item) => {
          if(item.category==="kid"){
            return <Card id={item.id} img={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          }
        })}
      </div>
    </>
  )
}

export default KidsPage