import React from 'react'
import Hero from '../Components/Hero'
import Hardware from '../Components/Hardware'
import FeaturedServices from '../Components/FeaturedServices'
import Help from '../Components/Help'
import Reviews from '../Components/Reviews'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import CardCarousel from '../Components/CardCarousel'

const Home = () => {
  return (
    <div className='text-white'>
      <Hero/>
      <Hardware/>
      <FeaturedServices/>
      <Help/>
      <Newsletter/>
      <CardCarousel/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
