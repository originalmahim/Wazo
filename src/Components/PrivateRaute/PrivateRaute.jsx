import {  useContext } from "react";
import { AuthContex } from "../../Contex/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRaute = ({children}) => {

          const {user,loader} = useContext(AuthContex)
          const location = useLocation()

          if (loader) {
          return <h1 className="text-center text-4xl text-pink-400 items-center lg:mt-96">Loading...</h1>
          }
           
          if (user) {
            return children        
          }

          return <Navigate state={location.pathname} to = "/login" ></Navigate>
};

PrivateRaute.propTypes = {
          children: PropTypes.node
}

export default PrivateRaute;