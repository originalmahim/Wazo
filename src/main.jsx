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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
    {
      path:"/",
      element: <Home></Home>
      },
    {
      path: "/about",
      element: <About></About>
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
