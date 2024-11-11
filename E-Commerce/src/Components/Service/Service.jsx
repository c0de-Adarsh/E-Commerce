import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const Service = () => {
  return (
    <>
    <div className='container mx-auto px-5 flex pt-20 gap-10 items-center justify-center flex-wrap'>
        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transiton duration-500'>
       
        <FaShippingFast />
            FREE SHIPPING
        </div>

        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transiton duration-500'>
        <MdProductionQuantityLimits />
            AUTHENTIC PRODUCT
        </div>

        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transiton duration-500'>
        <MdLocalShipping />
            EASY TO RETURN
        </div>

        <div className='bg-[#00A8A8] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transiton duration-500'>
        <MdOutlinePayment />
            SECURE PAYMENT
        </div>
    </div>
    </>
  )
}

export default Service