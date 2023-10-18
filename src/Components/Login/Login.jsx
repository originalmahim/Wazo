
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContex } from './../../Contex/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/firebase.config';

const Login = () => {

  const {LogIn} = useContext(AuthContex)
  const location = useLocation()
  const navigate = useNavigate()

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [loginError,setLoginError] = useState('')
   
  const handleGoogleSignup = () => {
    signInWithPopup(auth,provider)
    .then(result => {
      Swal.fire(
        'Loged In',
        'You have Loged In successfully',
          'success'
      )
       navigate(location?.state ? location.state : '/')
     })
 }

  const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      setLoginError('')
      LogIn(email,password)
      .then(result => {
        Swal.fire(
          'Loged In',
          'You have Loged In successfully',
            'success'
          )
          navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        setLoginError(error.message)
      })
  }





  return (
          <div className='bg-[#FEF6FD] px-4 md:px-0 lg:px-0 mt-10' >
          <div className="  max-w-6xl mx-auto flex items-center justify-center h-[80vh] pb-0 ">
          <div className="text-xl w-full max-w-md p-8  border border-black rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 ">
          <label className="block text-black font-semibold ">Email</label>
          <input
          type="text"
          name="email"
          placeholder="abcd@yourmail.com"
          className="w-full px-4 py-3 border border-black rounded-md focus:border-black focus:border-opacity-100"
          />
          </div>
          <div className="space-y-1 ">
          <label className="block text-black font-semibold">Password</label>
          <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-black rounded-md focus:border-black focus:border-opacity-100"
          />
          <div className="flex justify-end  text-blue-400 ">
          <a >
          Forgot Password?
          </a>
          </div>
          </div>
          <button  className=" btn bg-[#8289eb] block w-full p-3 text-center rounded-lg text-white hover:text-black">Sign in</button>
          </form>
          {
            loginError && <p className='text-cente text-red-500' >{loginError}</p>
          }
          <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16"></div>
          <p className="px-3 text-xl">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16"></div>
          </div>
          <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleSignup}  className=" btn-circle p-3 rounded-sm">
          <FcGoogle size={40} />
          </button>
          </div>
          <p className=" text-center sm:px-6 text-black font-semibold">
          Don't have an account?
          <Link to = "/signup" className=" ml-2 underline text-red-400">
          Sign up
          </Link>
          </p>
          </div>
          </div>
          </div>
  );
};

export default Login;
