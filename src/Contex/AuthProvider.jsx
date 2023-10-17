import { createContext } from "react";
import PropTypes from 'prop-types';

const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
          const information = {}
          return (
          <AuthContex.Provider value={information} >
             {children}                 
          </AuthContex.Provider>
          );
};

AuthProvider.propTypes = {
          children: PropTypes.node
}

export default AuthProvider;