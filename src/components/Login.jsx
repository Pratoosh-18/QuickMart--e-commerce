import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center border-t-2">
      <div className="border-2 border-gray-400 flex flex-col p-5 sm:p-10 rounded-lg gap-4 w-[300px] sm:w-[350px] justify-center items-center">
        <p className="text-3xl font-semibold text-orange-600">SIGN IN</p>
        <input className="w-full border-2 py-2 rounded-md px-3" placeholder="Name" type="text" required/>
        <input className="w-full border-2 py-2 rounded-md px-3" placeholder="Email" type="email" />
        <input className="w-full border-2 py-2 rounded-md px-3" placeholder="Password" type="password" />
        <div className="flex w-full justify-between">
            <p className="hover:cursor-pointer text-red-500">Forgot password?</p>
            <p className="hover:cursor-pointer">Sign up</p>
        </div>
        <Link to={'/'} className="w-full flex justify-center py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white text-lg">
        Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
