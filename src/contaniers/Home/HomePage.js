import React from 'react'
import Banner from './views/Banner'
import Categories from '@/components/Categories'

export const HomePage = () => {
  return (
    <div className='w-full  mx-auto'>
      <Banner/>
      <Categories/>
    </div>
  )
}

