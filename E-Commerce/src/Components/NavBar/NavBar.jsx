import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function NavBar({cart,userName}) {

  const [isOpen , setOpen] = useState(false);

     const toggleHandler = () =>{
      isOpen === false?setOpen(true): setOpen(false);
       
     };

    
  return (
    <>
    <div>
        <header className='bg-white border-b border-gray-200 relative'>
            <div className='container mx-auto flex justify-between p-5 items-center'>
                <div>
                  <Link to='/'>
                    <h3 className='font-bold text-2xl'>
                        ViTo <span className='text-[red]'>Shop</span>
                    </h3>
                    </Link>
                </div>
                
                <div className='hidden md:block'>
                <ul className='flex items-center text-lg justify-center font-semibold'>
                  <Link><li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
               <Link to='/allproducts'>
               <li className='mr-5 hover:text-gray-900 cursor-pointer'>All Products</li>
               </Link>
               <Link to='/about'>
               <li className='mr-5 hover:text-gray-900 cursor-pointer'>About</li>
               </Link>
               <Link to='/contact'>
               <li className='mr-5 hover:text-gray-900 cursor-pointer'>Contact</li>
               </Link>
            
                </ul>
              </div> 


            {
              isOpen ? 
              <div className=''>
                <ul className='flex flex-col gap-10 absolute bg-red-500 top-[73px] left-0 h-screen w-full items-center text-lg justify-center font-semibold z-10'>
                  <Link><li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
               
               <li className='mt-5 hover:text-gray-900 cursor-pointer'>All Products</li>
               <li className='mt-5 hover:text-gray-900 cursor-pointer'>Mens</li>
               <li className='mt-5 hover:text-gray-900 cursor-pointer'>Kids</li>
                </ul>
                <button className=' absolute top-[75px] z-10 right-0 text-white py-2 px-2 cursor-pointer' onClick={toggleHandler}><RxCross2 size={30} /></button>
              </div> : ''

            }



                <div className='flex justify-center items-center gap-3'>
                  <Link to='/login'>
                  <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  font-semibold'>Login</button>
                  </Link>
                  <span>{userName}</span>
                  <Link to='/cart'><button>
                  <span className='text-red-700 font-semibold'>
                    {cart.length}
                    </span><FaShoppingCart size={25}/>
                  </button></Link>

                  {
                    isOpen?"":<button className=' md:hidden' onClick={toggleHandler}><GiHamburgerMenu size={25} /></button>
                  }
                
                </div>
            </div>

        </header>
    </div>
    </>
  )
}

export default NavBar