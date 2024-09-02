"use client"
import React, { useEffect, useState,useRef } from 'react'
import Image from "next/image";
import axios from 'axios';

import API_BASE_URL from '@/constants/config';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export const News = () => {

  const [data,setData]=useState([])

  const getNewsData=async()=>{
    try{
      const res =await axios.post(`${API_BASE_URL}/populer-news`,{})
      setData(res.data.data)
      console.log(res.data)

    }catch(error){
      console.log(error)
    }
  }

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString(); // gun/ay/yıl formatına donduruyor 
  };

  useEffect(()=>{
    getNewsData()
  },[])

  return (
    <div className='max-w-[1200px] w-full mx-auto'>
      <Image src="/Images/news.png" width={150} height={150} className="mt-[]"/>
      <div className='max-w-[1200px] w-full mx-auto my-[60px]'>
      <div className='flex'>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
            {
        data?.map((item,key)=>(
        <SwiperSlide key={item.haberid} className="mr-5">

          <div  className=' flex shadow-lg  h-[180px] p-3 bg-white '>
            <div className='flex'>
            <Image src={item.resim[0]} width={150} height={130} alt="resim" className="mr-4 h-[150px] items-center"/>
            <div className='w-[220px] h-[170px]'>
            <div className='text-[12px] text-end'>{formatDate(item.tarih)}</div>

              <h2 className='text-[16px] mt-2 mb-3'>{item.metabaslik}</h2>
              <p className='text-[14px] pb-3 font-light overflow-hidden h-[60px] text-ellipsisn '>
                        <span className='overflow-hidden' dangerouslySetInnerHTML={{ __html: item?.ozet }}></span>
                      </p>
            </div>

            </div>
             

      </div>
      </SwiperSlide>

          
        ))
      }
       
      </Swiper>
    
      

      </div>
    </div>
    </div>
    
  )
}





