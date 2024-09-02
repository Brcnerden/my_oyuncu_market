"use client";

import React, { useEffect, useState,useRef } from 'react';
import API_BASE_URL from '@/constants/config';
import axios from 'axios';

export const OpenMenu = ({selectionItems,setMenuClose}) => {
    const [data, setData] = useState([]);

  const menuRef = useRef(null);


    const getNavbarData = async () => {
        try {
            const res = await axios.post(`${API_BASE_URL}/navbar`, { type: 0 });
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNavbarData();
    }, []);



    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuClose(false)
          }
        };
    
      
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    const filteredItems  = data?.data?.filter(item => item.baslik === selectionItems);

    return (
        <div  ref={menuRef} className='fixed bg-white w-full z-40  h-auto   '>
            {filteredItems ?.length > 0 && (
                <div  className='flex w-full flex-col mb-4   max-w-[1200px]  mx-auto '>

                    <ul className='flex flex-wrap gap-4'>

                        {filteredItems .map((item) => (
                            
                            <li key={item.menuid} className='flex flex-col'>
                                {item.children && (
                                    <ul className='  flex flex-wrap p-10'>
                                        {item.children.map((child) => (
                                            <li key={child.menuid} className='flex flex-col w-[280px] mt-5  '>
                                                <a href={child.link} className='font-bold text-[20px]'>{child.baslik}</a>
                                                {child.children && (
                                                    <ul className=' mt-2'>
                                                        {child.children.map((grandchild) => (
                                                            <li key={grandchild.menuid}>
                                                                <a href={grandchild.link} className='font-light text-[16px]'>{grandchild.baslik}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            )}

      
        </div>
    );
};
