import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const Service = () => {
  return (
    <>
    <div className='container mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap'>
        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'>
       
        <FaShippingFast />
            FREE SHIPPING
        </div>

        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'>
        <MdProductionQuantityLimits />
            AUTHENTIC PRODUCT
        </div>

        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'>
        <MdLocalShipping />
            EASY TO RETURN
        </div>

        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'>
        <MdOutlinePayment />
            SECURE PAYMENT
        </div>
    </div>
    </>
  )
}

export default Service