import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { sendrequest } from "../Redux/Action/request";
export default function RequestItems() {
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    requestname: "",
    requestcategory: "",
    requestdescription: "",
    requestlocation: "",
    requestquantity: "",
  });

  const {
    requestname,
    requestcategory,
    requestdescription,
    requestlocation,
    requestquantity,
  } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesendrequest = () => {
    dispatch(sendrequest(formdata));
  };
  return (
    <div>
      <Navbar />
      <div className="flex pt-14">
        <div className="w-1/2 flex justify-center py-10 px-10">
          <div className="space-y-8">
            <div className="font-bold text-primary text-3xl text-center">
              Request For an Item
            </div>
            <div className="text-center text-sm font-tiny text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              et ad corrupti impedit quis omnis odio autem earum, totam aliquam
              odit fugiat consequuntur saepe. Exercitationem corrupti autem
              sapiente ea vitae.
            </div>
            <div className="space-y-4">
              {/* -------------one-------------- */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white 
                  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  // placeholder="BMW car"
                  name="requestname"
                  onChange={(e) => changer(e)}
                  value={requestname}
                />
              </div>

              {/* _______________two____________-- */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                  //name="requestcategory"
                >
                  Item Category
                </label>
                <select
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow
                 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="requestcategory"
                  onChange={(e) => changer(e)}
                  value={requestcategory}
                >
                  <option value=""></option>

                  <option value="Electronics">Electronics</option>
                  <option value="Cloth">Cloth</option>
                  <option value="Car">Car</option>
                  <option value="Home">Home</option>
                  <option value="Accessory">Accessory</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="request description"
                  name="requestdescription"
                  onChange={(e) => changer(e)}
                  value={requestdescription}
                />
              </div>
              {/* ______________________3______________ */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="searching area"
                  name="requestlocation"
                  onChange={(e) => changer(e)}
                  value={requestlocation}
                />
              </div>
              {/* _______________________________4______________ */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                  name="requestquantity"
                  onChange={(e) => changer(e)}
                  value={requestquantity}
                />
              </div>
              {/* _____________________button___________-- */}
              <div className="space-x-4 flex justify-center">
                <button
                  className=" shadow-md bg-primary text-white font-bold px-10 py-1 rounded-xl"
                  onClick={handlesendrequest}
                >
                  Send Request
                </button>
                <button className="shadow-md font-bold text-gray-800 px-10 py-1 hover:bg-gray-100 rounded-xl">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2    ">
          <div className=" flex justify-end  ">
            <img src="uni_one.png" alt="bg-side" style={{ hight: "800px" }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
