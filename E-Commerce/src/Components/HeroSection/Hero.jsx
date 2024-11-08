import React from 'react';
import Banner from '../../assets/Banner.jpg';

function Hero() {
  return (
    <>
        <div className='relative'>
            <img src={Banner} alt="" className='w-full object-cover object-center'/>
        </div>
        <div className='absolute top-[30%] left-[50%]'>
            <h1 className='text-5xl font-bold text-red-500'>Discover Your Next Adventure</h1>
            <p className='text-center text-2xl mt-5 font-semibold'>
                Shop Our Latest Arrival & Unleash Your Style
            </p>
        </div>
    </>
  )
}

export default Hero