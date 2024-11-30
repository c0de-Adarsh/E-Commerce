import React from 'react'
import login from '../../assets/login.jpg'
import about from '../../assets/GallarlyImg/about.jpg'
import about1 from '../../assets/GallarlyImg/about.png'
const About = () => {
    return (
        <div>
            <div className='relative'>

                <img src={login} alt="" className='object-cover w-full object-center h-[200px]' />
                <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.5]'></div>
                <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl mt-5 md:text-5xl'>About Us</h2>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={about1} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Who we are?
                        </h1>
                        <p className="mb-8 leading-relaxed">The ViTo Shop Group is one of India’s leading digital commerce entities and includes group companies ViTo Shop , Myntra, ViTo Shop  Wholesale, ViTo Shop  Health+, and Cleartrip.

                            Started in 2007, ViTo Shop  has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 500 million, ViTo Shop 's marketplace offers over 150 million products across 80+ categories. Today, there are over 14 lakh sellers on the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering value through technology and innovation, ViTo Shop  has created lakhs of jobs in the ecosystem while empowering generations of entrepreneurs and MSMEs .</p>
                       
                    </div>

                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Technology at Vito Shop
                        </h1>
                        <p className="mb-8 leading-relaxed">

                            Vito Shop technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.
                        </p>
                        
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={about} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About