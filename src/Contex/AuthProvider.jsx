import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

 export const AuthContex = createContext(null)


const AuthProvider = ({children}) => {

   const CreateUser = (email,password) => {
      return createUserWithEmailAndPassword(auth,email,password)
   }

   const LogIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
   }


          const information = {
            CreateUser,
            LogIn
         }
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