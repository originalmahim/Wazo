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
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
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
