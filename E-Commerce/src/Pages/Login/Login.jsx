
import React from 'react'
import LayOut from '../../Components/Layout/LayOut';
import login from '../../assets/login.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
     <LayOut>
       <div>
        <div className='relative'>
            
                <img src={login} alt="" className='object-cover w-full object-center h-[200px]'/>
                <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.5]'></div>
                <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl mt-5 md:text-5xl'>Login</h2>
            </div>
            <div className="container px-5 py-14 mx-auto flex ">
    <div className=" bg-[#00A8A8] mx-auto rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white w-[500px]">
      <h2 className="text-white  text-4xl mb-5 font-medium title-font">Login</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm ">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm ">Password</label>
        <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
      <p className="text-xs text-white mt-5">Don't have an account?{" "}
         <Link to="/signup"> 
      <button className=' cursor-pointer hover:text-blue-700'>Sign up</button>
      </Link> 
      </p>
    </div>
  </div>
        </div>
        
     </LayOut>
  )
}

export default Login