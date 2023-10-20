import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const MyCart = () => {
  const bag = useLoaderData();
  const [cart, setCart] = useState(bag);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = (cart) => {
      const total = cart.reduce((acc, item) => acc + parseFloat(item.productPrice), 0);
      setTotalAmount(total.toFixed(0));
    };

    calculateTotalAmount(cart);
  }, [cart]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
    if (result.isConfirmed) {
    fetch(`https://wazo-backend-code.vercel.app/cart/${_id}`, {
    method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => {
    Swal.fire('Deleted!', 'Your Product has been deleted.', 'success');
    const remaining = cart.filter((item) => item._id !== _id);
    setCart(remaining);
    });
    }
    });
    };

  const handleConfirm = () => {
    Swal.fire('Order Confirmed', 'Your Product has been Confirmed.', 'success');
  };

  return (
      <div className="max-w-7xl mx-auto flex justify-center">
      {cart.length > 0 ? (
      <div className="w-full px-8">
      <h2 className="text-xl font-semibold text-center">Add To Cart Products</h2>
      <ul className="flex flex-col divide-y">
      {cart.map((cart) => (
      <li key={cart._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <img
      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
      src={cart.url}
      />
      <div className="flex flex-col justify-between w-full pb-4">
      <div className="flex justify-between w-full pb-2 space-x-2">
      <div className="space-y-1 ml-3">
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
      </li>
      ))}
      </ul>
      <div className="space-y-1 text-right mb-2">
      <p>
      Total amount: <span className="font-semibold">$ {totalAmount}</span>
      </p>
      </div>
      <div className="flex justify-end space-x-4">
      <Link to="/">
      <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">
      Back
      <span className="sr-only sm:not-sr-only">to shop</span>
      </button>
      </Link>
      <button onClick={handleConfirm} type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
      <span className="sr-only sm:not-sr-only">Confirm </span> order
      </button>
      </div>
      </div>
      ) : (
      <div className="max-w-xl mt-20 mb-16 mx-auto text-center text-black p-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Sorry You Did Not Add Anything to Cart</h2>
      <p className="mt-4">
      </p>
      </div>
      )}
    </div>
  );
};

export default MyCart;
