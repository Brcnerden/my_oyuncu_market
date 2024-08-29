"use client"

import React, { useState } from 'react'

export const DetailPage = () => {
const [activeButton ,setActiveButton]=useState(null)


const  handle_click=(id)=>{
    setActiveButton(id)
}


  return (
    <div className='h-[800px] max-w-[1200px] w-full mx-auto  text-center'>
        <h1 className='text-[32px] mt-[60px] mb-10 font-bold'>Metin 2</h1>
        <div className='flex justify-around'>
            <div>
            <button  onClick={()=>handle_click('urunler1')} className='text-[20px] hover:text-red-800 mb-3'>Metin 2 Ürünleri  </button>
            <div className={`${activeButton === 'urunler1'? " ":"hidden"}`}>ürünler 1</div>
            </div>
         <div >
         <button  onClick={()=>handle_click('urunler2')} className='text-[20px] hover:text-red-800'>Metin 2 Ürünleri  </button>
         <div className={`${activeButton==='urunler2' ?"":"hidden"}`}>ürünler 2</div>
         </div>

         <div>
         <button onClick={()=>handle_click('urunler3')} className='text-[20px] hover:text-red-800'>Metin 2 Ürünleri  </button>
         <div className={`${activeButton ==='urunler3'?"":"hidden"}`}>ürünler 3</div>

         </div>
            <div>
            <button onClick={()=>handle_click('urunler4')} className='text-[20px] hover:text-red-800'>Metin 2 Ürünleri  </button>
            <div className={`${activeButton==='urunler4'? "":"hidden"}`}>ürünler 4</div>

            </div>

        </div>
    </div>
  )
}
