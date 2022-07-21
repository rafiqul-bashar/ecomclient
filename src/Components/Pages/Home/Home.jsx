
import React from 'react'
import HomeCategories from '../../Home/HomeCategories'

import HomeSlides from '../../Home/HomeSlides'
import ShopFeatures from '../../Home/ShopFeatures'
import TopProducts from '../../Home/TopProducts'

export default function Home() {

  return (
    <div>
      <HomeSlides />
      <ShopFeatures />
      <HomeCategories/>
      <TopProducts/>
    </div>
  )
}
