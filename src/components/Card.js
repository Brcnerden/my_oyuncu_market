import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



export const Card = ({image,alt,title,price,handleClick}) => {
  return (
    <>
        <div  className='w-[232px] h-auto bg-white300 rounded-sm p-4 mr-2 mb-10'>
            <Image src={image} alt={alt}   width={230}
              height={230} className="mb-6" />
<div className='text-[16px] text-end mb-3 pr-4'>{title}</div>
<div className='mb-3 text-end text-[20px] pr-5 '>{price}</div>
<div className='flex justify-center items-center'>
  <Link href="/Sepetim">
<div onClick={handleClick} className=' border w-[180px] flex justify-center items-center py-2 text-white rounded-xl bg-text-color'>Sepete Ekle</div>
</Link>
</div>

        </div>
    </>
  )
}
