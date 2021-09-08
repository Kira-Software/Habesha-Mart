import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import authContext from "../context/authContext";
import axios from "axios";
import { register, getLoggedIn } from "../Redux/Action/authentication";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [showPass, setShoWPass] = useState(false);
  //const { getLoggedIn } = useContext(authContext);
  const [formdata, setformdata] = useState({
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, userName, password } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
    // console.log("the value of them respectively is " + email + username + password);
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("the value of the formdata is", formdata);
    // axios
    //   .post("http://localhost:9000/api/auth/signup", formdata, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     getLoggedIn();
    //   });
    dispatch(register(email, userName, password));
  };

  const handleShowPass = () => {
    setShoWPass(!showPass);
  };

  useEffect(() => {
    dispatch(getLoggedIn());
  }, []);
  return (
    <div className="flex">
      <div className="bg-green-50 w-1/4 h-screen">
        <Link href="/">
          <img className="h-14 cursor-pointer" src="logo.png" alt="logo" />
        </Link>

        <div className="flex items-center h-5/6 py-10">
          <img src="log.png" alt="sideImage" className="ml-48 h-96" />
        </div>
      </div>

      <div className=" h-screen w-3/4">
        <div className="flex justify-end px-2 text-green-600 font-semibold text-sm">
          already have an account{" "}
          <span className="ml-1 text-green-600">
            <Link to="/login">Sign In</Link>
          </span>
        </div>
        <div className="flex justify-center items-center h-5/6 py-10">
          <div>
            <div className="text-2xl font-bold text-primary mb-10">
              Sign Up to Habesha Mart
            </div>
            <div className="space-y-4">
              <div className="text-primary text-sm font-bold  mb-2">Email</div>
              <div className="border-0 flex items-center px-3 w-full py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:ring   ease-linear transition-all duration-150">
                <MailIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="border-0 px-2 py-1 focus:outline-none w-96"
                  onChange={(e) => changer(e)}
                  value={email}
                  name="email"
                />
              </div>

              <div className="text-primary text-sm font-bold  mb-2">
                Username
              </div>
              <div className="border-0 flex items-center px-3 w-full py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:ring   ease-linear transition-all duration-150">
                <UserIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="John doe"
                  className="border-0 px-2 py-1 focus:outline-none w-96"
                  onChange={(e) => changer(e)}
                  value={userName}
                  name="userName"
                />
              </div>

              <div className="text-primary text-sm font-bold  mb-2 ">
                Password
              </div>
              <div className="border-0 flex items-center px-3 w-full py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:ring   ease-linear transition-all duration-150">
                <LockClosedIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="********"
                  className="border-0 px-2 py-1 focus:outline-none w-96"
                  onChange={(e) => changer(e)}
                  value={password}
                  name="password"
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
              <button
                className="text-center rounded-md text-white px-2 py-1 
                  mt-6 font-semibold bg-primary w-full hover:bg-green-700"
                onClick={handlesubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
