import React, { useState,useEffect } from 'react'
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProduct from './Components/AllProduct/AllProduct';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseAuth/firebaseAuth';

export default function App() {

  const [cart, setCart] = useState([])
  const [promocode , setPromoCode] = useState('');

   const [invalid , setInvalid] = useState("Invalid PromoCode")

  const [discount , setDiscount] = useState(0)

  const [userName , setUserName] = useState("")

  const AddToCart = (product) => {


    //increase item quantity
    const isProductExist = cart.find((findItem) => findItem.id === product.id)

    if (isProductExist) {

      const cartUpdate = cart.map((item) => (
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))

      setCart(cartUpdate)
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }


    console.log(cart)
  }

  const handleIncrease = (id) =>{
    
    const quantityIncrease = cart.map((item)=>(
      item.id === id? {...item, quantity:item.quantity+1}:item
     ))
      setCart(quantityIncrease)
  } 
    
   const handleDecrease = (id) =>{
    const quantityDecrease = cart.map((item)=>(
      item.id === id && item.quantity > 1 ?  {...item, quantity:item.quantity-1}:item
     ))
      setCart(quantityDecrease)
   }

   const removeHandler = (id) => {

      const removeProduct =  cart.filter((filterItem) => filterItem.id !== id);

      setCart(removeProduct);
   }


    const totalProductPrice = () =>{
     const totalPrice =  cart.reduce((total , reduceItem) =>{

         return total + reduceItem.price * reduceItem.quantity
      },0)
        
      return totalPrice - discount;
    }

   
   
  
     const applyPromoCode = () =>{
      
       if(promocode === 'DISCOUNT10'){
          setDiscount(totalProductPrice()*0.1)
          setPromoCode('')
          setInvalid('')
       } else{
        setInvalid(invalid)
       }
     }

     //username display
     useEffect(() => {
      auth.onAuthStateChanged((user)=>{
        if(user){
          setUserName(user.displayName)
        }else{
          setUserName("")
        }
      })
     }, [])
     
  return (
    <>
      <div>
        <Router>
          <NavBar cart={cart} userName={userName}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart cart={cart} handleIncrease={handleIncrease} handleDecrease={handleDecrease} removeHandler={removeHandler}  totalProductPrice={totalProductPrice}   applyPromoCode={applyPromoCode}  promocode={promocode} setPromoCode={setPromoCode} invalid={invalid}/>}  />
            <Route path='/allproducts' element={<AllProduct AddToCart={AddToCart}   />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

          </Routes>
          <Toaster />
          <Footer />
        </Router>
      </div>
    </>
  )
}
