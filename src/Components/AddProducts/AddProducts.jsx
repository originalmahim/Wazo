import  { useState } from 'react';

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

          const productData = { productName, brandName, productRating, productPrice, productTitle, productDescription, productType, imageLink };
          console.log('Product Data:', productData);

    
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mt-32">
        <div className="border-2 p-10 bg-yellow-600">
          <div className="text-center text-white text-xl">
            <h1 className="font-bold">Add New Product</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ea ipsum officiis perferendis sed eius doloremque, quam repellat tempore autem voluptatibus minima, dicta fugit! Voluptatem totam vero est perferendis nostrum.</p>
          </div>
          <div className="my-5 text-white">
            <form onSubmit={handleSubmit} className="px-20">
              <div className="grid grid-cols-4 gap-10">
                
                <div className="col-span-2">
                  <h1 className="ml-1">Product Name: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="ProductName" />
                </div>
                <div className="col-span-2">
                  <h1 className="ml-1">Brand Name: </h1>
                  <select
                    className="w-full h-10 rounded-lg text-black"
                    name="brandName"
                    value={brandName}
                    onChange={handleBrandNameChange}
                    >
                    <option value="">Select Brand Name</option>
                    <option value="L'Oréal">L'Oréal</option>
                    <option value="Estée Lauder">Estée Lauder</option>
                    <option value="Chanel">Chanel</option>
                    <option value="Dior">Dior</option>
                    <option value="Urban Decay">Urban Decay</option>
                    <option value="Dove">Dove</option>
                    </select>

                </div>
              </div>
              <div className="grid grid-cols-4 gap-10">
                <div className="col-span-2">
                  <h1 className="ml-1">Product Rating: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="rating" />
                </div>
                <div className="col-span-2">
                  <h1 className="ml-1">Product Price: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="price" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-10">
                <div className="col-span-2">
                  <h1 className="ml-1">Product Title: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="title" />
                </div>
                <div className="col-span-2">
                  <h1 className="ml-1">Product Description: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="description" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-10">
                <div className="col-span-2">
                  <h1 className="ml-1">Product Type: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="type" />
                </div>
                <div className="col-span-2">
                  <h1 className="ml-1">Image Link: </h1>
                  <input className="w-full pl-2 h-10 rounded-lg text-black" type="text" name="url" />
                </div>
              </div>
              <div>
                <input className="mt-4 btn border-none w-full text-center h-10 rounded-lg bg-black text-white hover:text-black" type="submit" value="Add Product" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
