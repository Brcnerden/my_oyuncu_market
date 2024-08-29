"use client"
import API_BASE_URL from '@/constants/config';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Icons from '@/Icons';

const Banner = () => {
  const [data, setData] = useState([]);


  

  const getDataBanner = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/slider`, {});
      setData(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataBanner();
  }, []);

  return (
    <div className='max-w-[1200px] w-full mx-auto border mt-5 flex border-textsecandy-color '>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex w-[500px] items-center justify-center'>
          <div className='w-[100px] text-[24px] border border-text-color'></div>
          <div className='text-[28px] ml-[8px]  font-thin text-text-color'>Game On</div>
        </div>
        <div className='text-[32px] font-Playwrite mt-[16px] text-red-800'>Oyuncu Market</div>
      </div>
      <div className='w-[700px]'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.map((item, key) => (
            <SwiperSlide key={key}>
              <Image
                src={item.image[0]}
                width={700}
                height={300}
                alt="resim"
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
