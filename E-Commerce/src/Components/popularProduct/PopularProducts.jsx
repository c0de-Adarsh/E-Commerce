import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const PopularProducts = ({ AddToCart }) => {

    const [popularProducts, setPopPularProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {

        const popPularProductItem = async () => {

            try {
                const res = await axios(`https://dummyjson.com/carts/20`);

                setPopPularProducts(res.data.products)
                console.log(popularProducts)
            } catch (error) {
                toast.error(error.message)
            }

        }

        popPularProductItem();
    }, [])






    useEffect(() => {

        const popPularProductItems = async () => {

            try {
                const res = await axios(`https://dummyjson.com/carts/39`);

                setNewProducts(res.data.products)
                console.log(newProducts)
            } catch (error) {
                toast.error(error.message)
            }

        }

        popPularProductItems();
    }, [])

    return (
        <>
            <div>
                <div className='mt-10 text-center font-semibold'>
                    <h2 className=' text-4xl md:text-5xl underline'>Popular Products</h2>
                </div>

                <section className="text-gray-600 body-font  ">
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="flex flex-wrap -m-4 ">
                            {

                                popularProducts.map((popPularItem) => (

                                    <div className="lg:w-1/4 md:w-1/3 p-4 w-full  mb-6" key={popPularItem.id}>
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={popPularItem.thumbnail} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{popPularItem.title}</h2>
                                            <p className="mt-1 text-[20px] font-semibold">Price:{Math.floor(popPularItem.price)} ₹.</p>
                                        </div>
                                        <button className=" text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4" onClick={() => AddToCart(popPularItem)}>Add To Cart</button>
                                    </div>


                                ))

                            }





                            {

                                newProducts.map((popPularItems) => (

                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={popPularItems.id}>
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={popPularItems.thumbnail} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{popPularItems.title}</h2>
                                            <p className="mt-1 text-2xl font-semibold">Price:{Math.floor(popPularItems.price)} ₹.</p>
                                        </div>
                                        <button className=" text-white bg-indigo-500 border-0 py-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4" onClick={() => AddToCart(popPularItems)}>Add To Cart</button>
                                    </div>


                                ))

                            }




                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PopularProducts