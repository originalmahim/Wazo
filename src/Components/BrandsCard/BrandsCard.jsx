import { Link } from "react-router-dom";


const BrandsCard = ({brands}) => {

          return (
          <div className="max-w-7xl mx-auto">
           <div className="text-center text-xl text-black my-4">
          <h1 className="text-4xl font-semibold">Featured Brands</h1>
          <p>Our ALL popular Brands Products Are on Specific Cards</p>
          </div> 
          <div>
          <div className=" lg:px-0 px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {
            brands.map(brand => <div key={brand.id} className="relative bg-pink-500 mx-auto w-full shadow-lg rounded-lg ">
            <div  className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full" style={{ backgroundImage: `url("${brand.brandImageURL}")`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
            <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-pink-500 text-sm font-medium text-white select-none">
            Featured
            </span>
            </div>
            <div className="text-center my-2">
            <h1>{brand.brandDescription}</h1>
            </div>
            <div className="mt-4 flex  items-center justify-between">
            <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
            {brand.brandName}
            </h2>
            <button className="btn" ><Link to = {`/products/${brand.brandName}`} >Show All Products</Link></button>
            </div>
            </div>
            </div>
            </div>)
          }
          </div>

          
          </div>                  
          </div>
          );
};

export default BrandsCard;