import React from 'react'

const AllproductShimmer = () => {
  return (
  <>
   <div className="container px-5 py-24 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            AllProduct.map((allItems) => (
              <div key={allItems.id} className="w-[90%] px-4 shadow-lg rounded-md">
                <Link to={`/singleProduct/${allItems.id}`}>
                <img src={allItems.thumbnail} alt="" className=" rounded-t-lg p-8  w-full h-full object-cover object-center block" />
                </Link>
                <div className="mt-4">
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
        </div>
  </>
  )
}

export default AllproductShimmer