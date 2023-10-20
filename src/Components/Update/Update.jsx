import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const defaultProduct = useLoaderData();
  console.log(defaultProduct);
  const [brandName, setBrandName] = useState(defaultProduct.brandName); 

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleUpdate = (e) => {
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

    fetch(`https://wazo-backend-code.vercel.app/products/${defaultProduct.brandName}/${defaultProduct._id}`, {
      method: 'PUT', 
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          'Product Updated',
          'You have Updated Product successfully',
          'success'
        );
        form.reset();
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 sm:mt-32">
      <div className="border-2 p-5 bg-base-300">
        <div className="text-center text-black text-xl">
          <h1 className="font-bold">Update Product Details for {defaultProduct.productName}</h1>
          <p>
            Explore our carefully curated selection and find the perfect products to pamper yourself and enhance your beauty. Join us on a journey of self-expression and self-care with our high-quality cosmetics.
          </p>
        </div>
        <div className="my-5 text-black">
          <form onSubmit={handleUpdate} className="px-2 sm:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Name: </h1>
                <input
                  className="w-full pl-2 h-10 rounded-lg text-black"
                  defaultValue={defaultProduct.productName}
                  type="text"
                  name="ProductName"
                  required
                />
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
                  <option value="Urban Decay">Urban Decay</option>
                  <option value="Dior">Dior</option>
                  <option value="Dove">Dove</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Rating: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" defaultValue={defaultProduct.productRating} type="text" name="rating" required />
              </div>
              <div>
                <h1 className="ml-1">Product Price: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" defaultValue={defaultProduct.productPrice} type="text" name="price" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Title: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" defaultValue={defaultProduct.productTitle} type="text" name="title" required />
              </div>
              <div>
                <h1 className="ml-1">Product Description: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" defaultValue={defaultProduct.productDescription} type="text" name="description" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h1 className="ml-1">Product Type: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" defaultValue={defaultProduct.productType} type="text" name="type" required />
              </div>
              <div>
                <h1 className="ml-1">Image Link: </h1>
                <input className="w-full pl-2 h-10 rounded-lg text-black" defaultValue={defaultProduct.imageLink} type="text" name="url" required />
              </div>
            </div>
            <div>
              <input className="mt-4 btn border-none w-full text-center h-10 rounded-lg bg-black text-white hover:text-black" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
