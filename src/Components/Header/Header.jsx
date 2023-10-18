import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from 'react';
import { AuthContex } from "../../Contex/AuthProvider";


const Header = () => {

          const {user,LogOut} = useContext(AuthContex)


          const links = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/applied">Add Product</NavLink></li>
          <li><NavLink to="/blogs">My Cart</NavLink></li>
          </>

          return (
          <div  >
          <div className="bg-white">
          <div className="navbar bg-[#ffffff] max-w-7xl mx-auto">
          <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
          </ul>
          </div>
          <img className="w-24" src="https://i.ibb.co/DMcxGH5/l8uywj4i.png" />
          </div>
          <div className="navbar-end">
          <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
          </div>
          {  user ? <button onClick={() => LogOut()}  className="btn bg-[#e7d1e4] ">LogOut</button> :
          <Link to= "/login" className="btn bg-[#e7d1e4] ">Login</Link>
                    }
          </div>
          </div>
          </div>
          <div className="lg:min-h-[60vh]">
          <Outlet></Outlet>
          </div>
          <Footer></Footer>
          </div>
          );
};

export default Header;