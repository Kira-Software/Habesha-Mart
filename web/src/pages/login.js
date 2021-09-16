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
import { login, getLoggedIn } from "../Redux/Action/authentication";
import { useDispatch } from "react-redux";
import Alert from "../components/layout/alert"

export default function Register() {
  const dispatch = useDispatch();
  const [showPass, setShoWPass] = useState(false);
  // const { getLoggedIn } = useContext(authContext);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
    // console.log("the value of them respectively is " + email + username + password);
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("button is clicked");
    // axios
    //   .post("http://localhost:9000/api/auth/login", formdata, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log("someti", res);
    //     getLoggedIn();
    //   });
    dispatch(login(email, password));
  };

  const handleShowPass = () => {
    setShoWPass(!showPass);
  };

  useEffect(() => {
    console.log("inside of use effect");
    dispatch(getLoggedIn());
  }, []);
  return (
    <div className="flex">
      <div className="bg-secondary w-1/4 h-screen">
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
            <div className="text-2xl font-bold text-primary mb-10">
              Sign In to Habesha Mart
            </div>

            {/* <Alert /> */}

            <div className="space-y-4">
              <div className="text-sm font-bold text-primary mb-2">Email</div>
              <div className="border-0 flex items-center px-3 w-full py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:ring   ease-linear transition-all duration-150">
                <MailIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="border-0 px-2 py-1 focus:outline-none w-96"
                  onChange={(e) => changer(e)}
                  name="email"
                  value={email}
                  required
                />
              </div>

              <div className="text-sm font-bold text-primary mb-2">
                Password
              </div>
              <div className="border-0 flex items-center px-3 w-full py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:ring   ease-linear transition-all duration-150">
                <LockClosedIcon className="h-6 text-gray-600 mr-2" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="********"
                  className="border-0 px-2 py-1 focus:outline-none w-96"
                  onChange={(e) => changer(e)}
                  name="password"
                  value={password}
                  required
                />
                {showPass ? (
                  <EyeIcon
                    className="h-6 text-gray-600  ml-3 "
                    onClick={handleShowPass}
                  />
                ) : (
                  <EyeOffIcon
                    className="h-6 text-gray-600  ml-3 "
                    onClick={handleShowPass}
                  />
                )}
              </div>
              <button
                className="text-center w-full  rounded-md text-white px-2 py-1 mt-6 font-semibold
                   bg-primary hover:bg-green-700"
                onClick={handlesubmit}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
