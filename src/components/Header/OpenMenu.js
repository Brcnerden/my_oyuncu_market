"use client"

import React, { useEffect, useState } from 'react'
import API_BASE_URL from '@/constants/config'
import axios from 'axios';


export const OpenMenu = () => {
    const [data,setData]=useState([])

const getNavbarData=async()=>{
    try{
        const res=await axios.post(`${API_BASE_URL}/navbar`,{type:0})
        setData(res.data.data)
        console.log(res.data)

    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    getNavbarData()

},[])

  return (
    <div className='fixed bg-white  z-40 w-full h-[500px]'>
    {data?.data?.map((item) => (
      <div className='flex' key={item.menuid}>
        <h2>{item.baslik}</h2>
        {item.children && (
          <ul>
            {item.children.map((child) => (
              <li key={child.menuid}>
                <a href={child.link}>{child.baslik}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);
};




 
