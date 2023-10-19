import { useLoaderData } from "react-router-dom";


const Details = () => {
  const product = useLoaderData()
  const handleAddtocart = () => {
    const productName = product.productName;
    const productPrice = product.productPrice;
    const productType = product.productType;
    const productBrand = product.brandName;
    const productTitle = product.productTitle;
    const url = product.imageLink;
    const cart = {productName,productPrice,productType,productBrand,productTitle,url}
    console.log(cart);
    fetch('http://localhost:5000/cart',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(cart)
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })

  }
          return (
          <div>
          <div className="min-w-screen min-h-screen bg-[#FEF6FD] flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <div className="relative">
          <img src={product.imageLink} className="w-full relative z-10" alt="" />
          <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
          </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
          <div className="flex justify-between">
          <div>
          <h1 className="font-bold uppercase text-2xl mb-5">{product.productName} <br />{product.productTitle}</h1>
          </div>
          <div>
          <button className="btn btn-sm bg-green-400">{product.brandName}</button>
          </div>
          </div>
          <p className="text-sm mb-10">{product.productDescription}</p>
          <div>
          <div className="inline-block align-bottom mr-5">
          <span className="text-2xl leading-none align-baseline">$</span>
          <span className="font-bold text-5xl leading-none align-baseline">{product.productPrice}</span>

          </div>
          <div className="inline-block align-bottom">
          <button onClick={handleAddtocart} className="bg-yellow-400 btn  text-black
          rounded-full px-10 py-2 font-semibold"> Add To Cart</button>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>                              
          </div>
          );
};

export default Details;