"use client"
import API_BASE_URL from '@/constants/config';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules';
import Icons from '@/Icons';

const Banner = () => {
  const [data, setData] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const getDataBanner = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/slider`, {});
      setData(res.data.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataBanner()
  }, [])

  return (
    <div className='max-w-[1400px] w-full  mx-auto mt-5'>

<Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={2} 
  loop={true}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false, 
  }}
  pagination={{ el: '.swiper-pagination', clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container w-[1200px]"
  onSlideChange={(swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  }}
>
  {
    data?.map((item, key) => (
      <SwiperSlide key={key} className='slide'>
        <Image 
          src={item.image[0]} 
          width={1200} 
          height={300} 
          alt={item.title} 
          className={classNames(
            "  mt-10 object-cover",
            key === currentSlideIndex ? 'opacity-25  ': 'opacity-100 w-[1200px] border-2 border-textsecandy-color'
          )}
      
        />
      </SwiperSlide>
    ))
  }
  <div className='slider-controler'>
    <div className='swiper-button-prev slider-arrow'>
      <Icons.Arrow className="w-4 h-4" name="arrow-back-outline" />
    </div>
    <div className='swiper-button-next slider-arrow'>
      <Icons.Arrow name="arrow-forward-outline" />
    </div>
    <div className='swiper-pagination'></div>
  </div>
</Swiper>
</div>

  
  )
}

export default Banner;
