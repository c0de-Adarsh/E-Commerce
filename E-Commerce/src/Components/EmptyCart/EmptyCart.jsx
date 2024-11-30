import React from 'react'
import free from '../../assets/GallarlyImg/free.jpg'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
     <>
     <div className='w-full  h-[80vh] mt-[80px] container  flex justify-center my-4 bg-[white] mx-auto px-4 py-4 shadow-lg rounded-md items-center'>
       <div className='flex items-center flex-col'>
        <img src={free} alt=""  className='w-[300px]'/>
        <h3 className='text-center text-2xl font-semibold mt-3'>Your Cart is empty</h3>
        <Link to='/'>
        <button className='text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4'>Go to Home</button>
        </Link>
       </div>
     </div>
     </>
  )
}

export default EmptyCart