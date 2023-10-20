
import { FaHeart, FaSmile, FaStar, FaGift } from 'react-icons/fa';

const Special = () => {
          return (
          <div className='bg-[#f5ccd3] mt-16'>
          <div className='max-w-7xl mx-auto'>

  <div className="px-4  py-8 lg:py-16 lg:px-8">
    <div className="max-w-xl mx-auto text-center text-black">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Discover Our Unique Beauty Products</h2>
  <p className="mt-4">
    Elevate your beauty routine with our carefully curated collection of cosmetics. Our mission is to make you feel confident and beautiful every day.
  </p>
          </div>
    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-2">
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <FaHeart className="h-5 w-5  text-pink-500" />
        </span>
        <div>
          <h2 className="text-lg font-bold">Cruelty-Free Products</h2>
          <p className="mt-1 text-sm ">
            We care about animals and the environment. Our products are cruelty-free and eco-friendly, making you beautiful guilt-free.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <FaSmile className="h-5 w-5 text-yellow-500" />
        </span>
        <div>
          <h2 className="text-lg font-bold">Customer Satisfaction</h2>
          <p className="mt-1 text-sm ">
            Your satisfaction is our priority. We strive to bring a smile to your face with every purchase. Your beauty, your happiness.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <FaStar className="h-5 w-5 text-yellow-300" />
        </span>
        <div>
          <h2 className="text-lg font-bold">Top-Quality Ingredients</h2>
          <p className="mt-1 text-sm ">
            We source the finest ingredients to ensure top-notch quality. Your skin deserves nothing less than the best.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <FaGift className="h-5 w-5 text-green-500" />
        </span>
        <div>
          <h2 className="text-lg font-bold">Surprise Gifts</h2>
          <p className="mt-1 text-sm ">
            Because you deserve a little extra. Enjoy surprise gifts with your orders and feel extra special.
          </p>
        </div>
      </div>
    </div>
  </div>
          </div>
          </div>
          );
};

export default Special;