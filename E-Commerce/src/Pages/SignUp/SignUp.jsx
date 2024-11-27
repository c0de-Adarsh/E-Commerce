
import React, { useState } from 'react'
//import LayOut from '../../Components/Layout/LayOut'
import login from '../../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseAuth/firebaseAuth';

const SignUp = () => {

   const navigateLogin = useNavigate();

  const [userSignUp, setUserSigUp] = useState({
    username: '',
    email: '',
    password: '',
  });



  const handleChange = (e) => {
    setUserSigUp({ ...userSignUp, [e.target.name]: e.target.value });

  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
      return toast.error('All fields are required')
    } else {
      createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password).then(async (response) => {
        const user = response.user

        await updateProfile(user, {
          displayName: userSignUp.username
        })

        navigateLogin('/login')
      })
        .catch((error) => toast.error(error.message))
    }
  }
  return (
    <>
      <div className='relative'>

        <img src={login} alt="" className='object-cover w-full object-center h-[200px]' />
        <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.5]'></div>
        <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl mt-5 md:text-5xl'>Signup</h2>
      </div>
      <div className="container px-5 py-14 mx-auto flex ">
        <div className=" bg-[#00A8A8] mx-auto rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white w-[500px]">
          <h2 className="text-white  text-4xl mb-5 font-medium title-font">Sign Up</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm ">Name</label>
            <input type="text" name="username" autoComplete='off' value={userSignUp.username} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm ">Email</label>
            <input type="email" name="email" autoComplete='off'
              value={userSignUp.email}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm ">Password</label>
            <input type="password" autoComplete='off' name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userSignUp.password} onChange={handleChange} />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSumbit}>Sign Up</button>
          <p className="text-xs text-white mt-5">Do you have an account?{" "}
            <Link to='/login'>
              <button className=' cursor-pointer hover:text-blue-700'>Login</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp