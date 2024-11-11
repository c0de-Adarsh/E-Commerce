import React from 'react'
import img1 from '../../assets/GallarlyImg/img1.jpg'
import img2 from '../../assets/GallarlyImg/im5.webp'
import img3 from '../../assets/GallarlyImg/img3.jpg'
import img4 from '../../assets/GallarlyImg/img4.webp'
import img5 from '../../assets/GallarlyImg/img2.jpg'
import img6 from '../../assets/GallarlyImg/img6.jpg'

const Gallary = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto flex flex-wrap">
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transtion duration-500">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block " src={img3}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={img1}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={img5}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transtion duration-500">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={img6}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={img4}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={img2}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallary