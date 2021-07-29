import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function Register() {
  const [showPass, setShoWPass] = useState(false);
  const handleShowPass = () => {
    setShoWPass(!showPass);
  };
  return (
    <div className="flex">
      <div className="bg-green-50 w-1/4 h-screen">
        <Link href="/">
          <img className="h-14 cursor-pointer" src="logo.png" alt="logo" />
        </Link>

        <div className="flex items-center h-5/6 py-10">
          <img src="reg.png" alt="sideImage" className="ml-48" />
        </div>
      </div>
      <div className=" h-screen w-3/4">
        <div className="flex justify-end px-2 text-green-800 font-semibold text-sm">
        don't have an account{" "}
          <span className="ml-1 text-green-600">
            <Link to="/register">Sign Up</Link>
          </span>
        </div>
        <div className="flex justify-center items-center h-5/6 py-10">
          <div>
            <div className="text-2xl font-bold text-green-600 mb-10">
              Sign In to Habesha Mart
            </div>
            <div>
              <div className="text-sm font-bold text-green-600 mb-2">Email</div>
              <div className="flex items-center bg-gray-100 rounded-sm px-2 py-1 mb-2">
                <MailIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="outline-none bg-gray-100"
                />
              </div>

            
              <div className="text-sm font-bold text-green-600 mb-2 ">
                Password
              </div>
              <div className="flex items-center bg-gray-100 rounded-sm px-2 py-1">
                <LockClosedIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="********"
                  className="outline-none bg-gray-100"
                />
                {showPass ? (
                  <EyeIcon
                    className="h-6 text-gray-600  ml-6 "
                    onClick={handleShowPass}
                  />
                ) : (
                  <EyeOffIcon
                    className="h-6 text-gray-600  ml-6 "
                    onClick={handleShowPass}
                  />
                )}
              </div>
              <button className="text-center w-72 rounded-md text-white px-2 py-1 mt-6 font-semibold bg-green-600 hover:bg-green-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
