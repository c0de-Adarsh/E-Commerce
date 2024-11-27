

import React, { useState, useEffect } from "react";
//import LayOut from "../Layout/LayOut";
import login from "../../assets/login.jpg";
import axios from "axios";

const AllProduct = ({ AddToCart }) => {

  const [AllProduct, setAllProducts] = useState([])
  const [allCategory, setAllCategory] = useState([]); // Categories ka state
  // const [products, setProducts] = useState([]); // Products ka state

  const [originalProducts, setOriginalProducts] = useState([])
  const [selectProducts, setSelectProducts] = useState("");

  const [searchItem , setSearchItem] = useState("")

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

   const handleSearchItem = (event) =>{
      const query = event.target.value;
      setSearchItem(query);
     
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
        <div className="text-center mt-4">
          <select onChange={(e) => filterProducts(e.target.value)} className="border">
            <option>filter by category</option>

            {allCategory.filter(filterItem => !['motorcycle', 'automotive', 'furniture', 'vehicle'].includes(filterItem))

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


        <div className="text-center mt-3 text-2xl">
          <input placeholder="search item" className="border-4 items-center px-2 py-2" onChange={handleSearchItem} />
        </div>

        {/* all product */}
        <div className="flex gap-4 flex-wrap justify-center mt-3 mb-3">
          {
            AllProduct.map((allItems, index) => (
              <div key={index} className="bg-[#ffffff] shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <div>
                <img src={allItems.thumbnail} alt="" className=" rounded-t-lg p-8  w-full h-full object-cover object-center block" />
                </div>
                <div className="px-5 pb-5">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                    Title:{allItems.title} {/* Render the title string */}
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
