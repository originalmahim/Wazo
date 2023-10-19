
import { FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const MyCart = () => {
          const cart = useLoaderData()
          console.log(cart);
          const handleDelete = (_id) => {
           fetch(`http://localhost:5000/cart/${_id}`,{
          method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
          console.log(data)
          alert('deleted Successfully')
           })
          }
  return (
          <div className="max-w-7xl mx-auto flex justify-center">
          <div className="w-full px-8">
          <h2 className="text-xl font-semibold text-center">Add To Cart Products</h2>
          <ul className="flex flex-col divide-y ">
          { cart.map(cart => <li key={cart._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full border rounded-md p-5 space-x-2 sm:space-x-4">
          <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={cart.url}
          />
          <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
          <div className="space-y-1">
          <h3 className="text-lg font-semibold leading sm:pr-8">{cart.productName}</h3>
          <h3 className="text-lg font-semibold leading sm:pr-8">{cart.productTitle}</h3>
          <p className="text-sm dark:text-gray-400">{cart.productType}</p>
          <button onClick={() => handleDelete(cart._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
          <FaTrash />
          <span>Remove</span>
          </button>

          </div>
          <div className="text-end">
          <p className="text-lg font-semibold">$ {cart.productPrice}</p>
          </div>
          </div>
          </div>
          </div>
          </li> ) }
          </ul>
          <div className="space-y-1 text-right">
          <p>
          Total amount: <span className="font-semibold">59.99€</span>
          </p>
          <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
          </div>
          <div className="flex justify-end space-x-4">
          <Link to = "/" ><button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
          </button></Link>
          <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
          <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
          </button>
          </div>
          </div>
          </div>
  );
};

export default MyCart;
