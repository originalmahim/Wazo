import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from 'react';
import { AuthContex } from "../../Contex/AuthProvider";
import Swal from 'sweetalert2';

import { BiLogOutCircle, BiCartAlt } from 'react-icons/bi';

const Header = () => {

          const {user,LogOut} = useContext(AuthContex)


          const links = <>
          <li><NavLink  to="/">Home</NavLink></li>
          <li><NavLink to="/addproduct">Add Product</NavLink></li>
          <li><NavLink  to="/cart"><BiCartAlt className="text-xl"></BiCartAlt> Cart</NavLink></li>
          </>

        const handleLogOut = () => {
          LogOut()
          .then(() => {
            Swal.fire(
              'Loged Out',
              'You have loged Out successfully',
              'success'
            )
          })
        }

          

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
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
          </div>
          <div className="navbar-end">
          {
            user &&  <div className="dropdown dropdown-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <div className=" px-2 border-b pb-2">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src={user.photoURL}
          />
          <p className="pt-2 text-lg font-semibold">{user.displayName}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        <div className="mt-1">
        <button onClick={handleLogOut}  className="btn btn-sm bg-[#e7d1e4] ">LogOut <BiLogOutCircle className="text-xl"></BiLogOutCircle></button>
        </div>
      
      </ul>
          </div>
          }
          {  user ? '' :
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