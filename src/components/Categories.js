"use client"

import API_BASE_URL from '@/constants/config';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Categories = () => {

const [data,setData]=useState([]);
const [visibleCategories, setVisibleCategories] = useState([]);
const [showAll, setShowAll] = useState(false);



const getDataCategory= async()=>{
  try{
const res =await axios.post(`${API_BASE_URL}/populer-categories`, {},  {
  headers: {
    "Content-Type": "application/json",
  },
})
console.log(res.data)
setData(res.data),
setVisibleCategories(res.data.data.slice(0,15));

  }catch (error){
     
      console.log(error);
    
  }
}

useEffect(()=>{
  getDataCategory()
},[])


const handleShowAll = () => {

  if (showAll) {
    setVisibleCategories(data.data.slice(0, 15));
  } else {
    setVisibleCategories(data.data);
  }

  setShowAll(!showAll);

};



  return (
    <div className='max-w-[1200px] w-full mx-auto my-[60px]'>
      <div className='flex items-center mb-[60px]'>
      <div className='font-light font-Playwrite text-[32px] mr-6'>Kategori</div>
      <div className='border-b-textsecandy-color border w-[900px] '></div>
      <button onClick={handleShowAll} className='font-light font-Playwrite text-[16px] ml-6'>Tümünü Gör</button>


      </div>
      <div className='flex flex-wrap  '>
        {
          visibleCategories?.map((item,key)=>(
            <div key={item.kategori.kategoriadi}>
               <Image
              src={item.resim[0].toString()}
              className="w-[232px]  h-[232px] ml-2  mb-2"
              width={230}
              height={230}
              alt={item.kategori.kategoriadi}
            />
            </div>

          ))
        }
      </div>
     
      </div>
  )
}

export default Categories