import React from 'react'
import Banner from './views/Banner'
import Categories from '@/components/Categories'
import { BestSeller } from './views/BestSeller'
import { News } from './views/News'

export const HomePage = () => {
  return (
    <div className='w-full  mx-auto'>
      <Banner/>
      <Categories/>
      <BestSeller/>
      <News/>

    </div>
  )
}

