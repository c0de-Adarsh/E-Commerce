import React from 'react'
// import LayOut from '../../Components/Layout/LayOut'
import Hero from '../../Components/HeroSection/Hero'
import Service from '../../Components/Service/Service'
import Gallary from '../../Components/Gallary/Gallary'
import PopularProducts from '../../Components/popularProduct/PopularProducts'
import Testimonial from '../../Components/Testimonial/Testimonial'

function Home({AddToCart}) {
  return (
    <>
      <Hero/>
      <Service/> 
      <PopularProducts  AddToCart={AddToCart}/>
      <Gallary/>
      <Testimonial/>
    </>
  )
}

export default Home