"use client"
import axios from 'axios';
import { Card } from '@/components/Card'
import API_BASE_URL from '@/constants/config'
import React, { useEffect, useState } from 'react'
import useCartStore from "../../../store/BasketStore";


export const BestSeller = () => {

    const [data,setData]=useState([])
const [visibleBestSell, setVisibleBestSell] = useState([]);
const [showAll, setShowAll] = useState(false);
const [quantity, setQuantity] = useState(1);





const addToCart = useCartStore(state => state.addToCart);
  
const handle_basketProduct=(product)=>{
    const { name, price, image } = product;
    const productWithQuantity = { name: product.urunadi, price: product.psf, image: product.urunresim[0], quantity, id:product.urunid }
    addToCart(productWithQuantity);
    console.log(productWithQuantity);


  


}




    const getDataBestSell=async()=>{
        try{
            const res=await axios.post(`${API_BASE_URL}/most-sell-products`,{});
            setData(res.data)
            setVisibleBestSell(res.data.data.slice(0,5))
            console.log(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getDataBestSell() 
    },[])

    const handleShowAll = () => {

        if (showAll) {
            setVisibleBestSell(data.data.slice(0, 5));
        } else {
            setVisibleBestSell(data.data);
        }
      
        setShowAll(!showAll);
      
      };


  return (
    <>
    <div className='max-w-[1200px] w-full mx-auto '>
    <div className='flex items-center mb-[60px] '>
      <div className='font-light font-Playwrite text-[32px] mr-6'>En Son Satanlar</div>
      <div className='border-b-textsecandy-color border w-[750px] '></div>
      <button onClick={handleShowAll} className='font-light font-Playwrite text-[16px] ml-6'>Tümünü Gör</button>


      </div>
      <div className='flex flex-wrap'>

        {
            visibleBestSell.map((item ,key)=>(
                <Card key={item.urunid} image={item.urunresim[0]} alt={item.urunadi} title={item.urunadi} price={item.psf}   handleClick={() => handle_basketProduct(item)}/>

            ))
        }
                </div>

    </div>

    </>
  )
}
