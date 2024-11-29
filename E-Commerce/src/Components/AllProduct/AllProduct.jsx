

import React, { useState, useEffect } from "react";
//import LayOut from "../Layout/LayOut";
import login from "../../assets/login.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProduct = ({ AddToCart }) => {

  const [AllProduct, setAllProducts] = useState([])
  const [allCategory, setAllCategory] = useState([]); // Categories ka state
  // const [products, setProducts] = useState([]); // Products ka state

  const [originalProducts, setOriginalProducts] = useState([])
  const [selectProducts, setSelectProducts] = useState("");

  const [searchItem , setSearchItem] = useState("");

  const [minPrice , setMinPrice] = useState("")
  const [maxPrice , setMaxPrice] = useState("")

  // const [showProducts , setShowProducts] = useState(false)

  //allProducts 
  useEffect(() => {

    const AllProducts = async () => {
      const res = await axios('https://dummyjson.com/products');
      setAllProducts(res.data.products)
      setOriginalProducts(res.data.products)
    }

    AllProducts()
  }, [])


  // Fetch all categories on page load
  useEffect(() => {
    const getAllproductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setAllCategory(res.data); // Set categories correctly
      } catch (error) {
        console.log("Category Fetch Error:", error);
      }
    };
    getAllproductsCategory();
  }, []);

  // Fetch products when a category is selected
  // useEffect(() => {
  //   const getAllproducts = async () => {
  //     try {
  //       if (selectProducts) {
  //         const res = await axios(
  //           `https://dummyjson.com/products/category/${selectProducts}`
  //         );
  //         setProducts(res.data.products); // Update products state
  //       }
  //     } catch (error) {
  //       console.log("Products Fetch Error:", error);
  //     }
  //   };
  //   getAllproducts();
  // }, [selectProducts]); // Trigger when selectProducts changes

  // Button click handler for category selection
  const filterProducts = (itemValue) => {
    setSelectProducts(itemValue); // Update selected category

    const data = itemValue
      ? originalProducts.filter((filterItem) => filterItem.category === itemValue)
      : originalProducts
    setAllProducts(data)
  };


  const productSearchButton = () =>{

    
   const searchProduct = originalProducts.filter((searchFilterItem)=>(
    searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
 ))

  setAllProducts(searchProduct)
  }



 const maxMinButton = () =>{

    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice)
   const filterPrice = originalProducts.filter((priceItem)=>(
      (!min || priceItem.price >=min)&&(!max ||priceItem.price <=max)
   ))

   setAllProducts(filterPrice)
 }
  return (
    <>
      <>
        <div className="relative">
          <img
            src={login}
            alt=""
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl  md:text-5xl">
            All Product
          </h2>
        </div>

        {/* Products category */}
        <div className="bg-[#e2e0e0] container mx-auto rounded-md py-3 mt-4">
        <div className="text-center mt-4">
          <select onChange={(e) => filterProducts(e.target.value)} className="border">
            <option>filter by category</option>

            {allCategory.slice(0,4

            )

              .map((category, index) => (
                // <div className="border" key={index}>
                <option value={category} key={index}>

                  {/* //className="border bg-black text-white px-2 py-2 mt-5" */}
                  {/* // onClick={() => filterProducts(category)} // Passing category string */}

                  {category}
                </option>
                //</div>
              ))}
          </select>
        </div>


        <div className="text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3">
          <input placeholder="Search" className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 items-center " onChange={(e) =>setSearchItem(e.target.value)} value={searchItem} />
          <button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={productSearchButton}>Search Product</button>
        </div>

        <div className="text-center mt-4 mb-2 flex justify-center md:flex-row flex-col gap-3">
          <input placeholder="min Price" className=" rounded-md px-2 py-2" onChange={(e) =>setMinPrice(e.target.value)} value={minPrice} />
          <input placeholder="max Price" className=" rounded-md px-2 py-2 ml-3" onChange={(e) =>setMaxPrice(e.target.value)} value={maxPrice} />
          <button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={maxMinButton}>Filter By Price
          </button>
          </div>
          </div>
        {/* all product */}
        <div className="flex gap-4 flex-wrap justify-center mt-3 mb-3">
          {
            AllProduct.map((allItems) => (
              <div key={allItems.id} className="bg-[#ffffff] shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 mt-8">
                <Link to={`/singleProduct/${allItems.id}`}>
                <img src={allItems.thumbnail} alt="" className=" rounded-t-lg p-8  w-full h-full object-cover object-center block" />
                </Link>
                <div className="px-5 pb-5">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                    {allItems.title} {/* Render the title string */}
                    </h3>
                  <span className="bg-blue-100  text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {allItems.rating} {/* Render the rating number */}
                  </span>
                  <div className="flex items-center justify-between">
                  <p className=" text-2xl font-bold text-gray-900 dark:text-white">Price:{allItems.price} Rs. {/* Render the price string */}</p>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=> AddToCart(allItems)}>
                    Add to Cart
                  </button>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      

      </>
    </>
  );
};

export default AllProduct;
