import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
const BrandShop = () => {
  const products = useLoaderData();

  return (
      <div className="max-w-7xl mx-auto mt-20 p-4  md:p-8 overflow-x-hidden">
      <div className="max-w-xl mb-16 mx-auto text-center text-black">
      <h2 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold">Discover Our Unique Beauty Products</h2>
      <p className="mt-4">
      Elevate your beauty routine with our carefully curated collection of cosmetics. Our mission is to make you feel confident and beautiful every day.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
      products.map((product) => (
      <div key={product._id} className="">
      <div className="max-w-sm ">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
      <img className="rounded-t-lg w-full h-72" src={product.imageLink
      } />
      <div className="py-6 px-8 rounded-lg bg-white">
      <div className="flex justify-between">
      <h1 className="text-gray-700  text-xl mb-3 hover:text-gray-900 hover:cursor-pointer"> 
      {product.productName}
      </h1>
      <button className="btn bg-white btn-sm">
      $ {product.productPrice}</button>
      </div>
      <div>
      <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{product.productTitle}</h1>

      </div>
      <p className="text-gray-700 tracking-wide">
      {product.productDescription}</p>
      <div className="flex justify-between items-center">
      <Link to = {`/products/${product.brandName}/${product._id}`} >
      <button className="mt-6 py-2 px-4 bg-blue-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Details</button>
      </Link>
      <button className="btn bg-yellow-400 btn-sm">
      <AiOutlineStar></AiOutlineStar>{product.productRating}</button>
      </div>
      </div>
      <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
      <span className="text-md">{product.productType
      }</span>
      </div>
      </div>
      </div>
      </div>
      ))
      ) : (
      <div className=" text-center max-w-7xl mx-auto ">
      <h1 className="lg:text-7xl text-3xl text-pink-400 font-semibold lg:ml-[520px]">Sorry</h1>
      <p className="text-xl lg:ml-[500px] mt-3 text-black">No Products Available</p>
      </div>
      )}
      </div>
      </div>
  );
};

export default BrandShop;
