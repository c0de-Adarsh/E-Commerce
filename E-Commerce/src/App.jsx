import React from 'react'
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import {BrowserRouter,Route, Routes} from 'react-router-dom'

export default function App() {
  return (
   <>
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
  )
}
