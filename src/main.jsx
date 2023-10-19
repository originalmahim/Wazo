import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import AuthProvider from './Contex/AuthProvider';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AddProducts from './Components/AddProducts/AddProducts';
import MyCart from './Components/MyCart/MyCart';
import PrivateRaute from './Components/PrivateRaute/PrivateRaute';
import BrandShop from './Components/BrandShop/BrandShop';
import Details from './Components/Details/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
    {
      path:"/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/brands')
      },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/addproduct",
      element: <PrivateRaute><AddProducts></AddProducts></PrivateRaute> 
    },
    {
      path: "/cart",
      element: <PrivateRaute><MyCart></MyCart></PrivateRaute>,
      loader: () => fetch('http://localhost:5000/cart')
    },
    {
      path: "/products/:brandName",
      element: <PrivateRaute><BrandShop></BrandShop></PrivateRaute>,
     loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
    },
    {
      path: "/products/:brandName/:id",
      element: <PrivateRaute><Details></Details></PrivateRaute> ,
      loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}/${params.id}`)
    }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
