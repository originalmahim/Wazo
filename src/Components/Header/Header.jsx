import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Header = () => {
          return (
          <div>
          <div className="max-w-7xl mx-auto">
           <h1 className="text-center text-blue-500" >This Is Header</h1>
          </div>
           <Outlet></Outlet>
           <Footer></Footer>                   
          </div>
          );
};

export default Header;