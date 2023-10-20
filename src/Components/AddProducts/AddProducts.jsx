import  { useState } from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
  const [brandName, setBrandName] = useState('');

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Brand Name:', brandName);
    const form = e.target;
    const productName = form.ProductName.value;
    const productRating = form.rating.value;
    const productPrice = form.price.value;
    const productTitle = form.title.value;
    const productDescription = form.description.value;
    const productType = form.type.value;
    const imageLink = form.url.value;

    const productData = {
      productName,
      brandName,
      productRating,
      productPrice,
      productTitle,
      productDescription,
      productType,
      imageLink,
    };

    fetch('https://wazo-backend-code.vercel.app/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          'Product Added',
          'You have Added A New Product successfully',
          'success'
        );
        form.reset();
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 sm:mt-32">
      <div className="border-2 p-5 bg-base-300">
        <div className="text-center text-black text-xl">
          <h1 className="font-bold">Add New Product</h1>
          <p>
            Explore our carefully curated selection and find the perfect products to pamper yourself and enhance your beauty. Join us on a journey of self-expression and self-care with our high-quality cosmetics.
          </p>
        </div>
        <div className="my-5 text-black">
          <form onSubmit={handleSubmit} className="px-2 sm:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Name: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="ProductName" required />
              </div>
              <div>
                <h1 className="ml-1">Brand Name: </h1>
                <select
                  className="w-full h-10 rounded-lg text-black"
                  name="brandName"
                  value={brandName}
                  onChange={handleBrandNameChange}
                  required
                >
                  <option value="">Select Brand Name</option>
                  <option value="L'Oréal">L'Oréal</option>
                  <option value="Estée Lauder">Estée Lauder</option>
                  <option value="Chanel">Chanel</option>
                  <option value="Dior">Dior</option>
                  <option value="Dove">Dove</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Rating: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="rating" required />
              </div>
              <div>
                <h1 className="ml-1">Product Price: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="price" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Title: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="title" required />
              </div>
              <div>
                <h1 className="ml-1">Product Description: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="description" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Type: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="type" required />
              </div>
              <div>
                <h1 className="ml-1">Image Link: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="url" required />
              </div>
            </div>
            <div>
              <input className="mt-4 btn border-none w-full text-center h-10 rounded-lg bg-black text-white hover:text-black" type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
