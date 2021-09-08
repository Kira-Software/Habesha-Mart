import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function UpgradeAccount() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 h-full bg-gray-50 flex justify-center items-center">
        <div className="my-8 w-3/5 shadow-md rounded-lg bg-white  py-6 px-8 ">
          {" "}
          <div className="text-2xl mb-10 font-bold text-primary text-center">
            Upgrade your Account
          </div>
          <div className="my-4 space-y-4">
            <div className="flex space-x-4">
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Job
                </label>
                <select className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                 <option value=""></option>
                 <option value="Seller">Seller</option>
                 <option value="Broker">Broker</option>

               </select>
              </div>
              {/* --------------------- */}
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
                  placeholder="availablity location"
                />
              </div>
            </div>
            {/* ---------------------flex form two----------------- */}
            <div className="flex space-x-4">
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Prefered Category
                </label>
                <select className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value=""></option>

                  <option>Electronics</option>
                  <option>Cloth</option>
                  <option>Car</option>
                  <option>Home</option>
                  <option>Accessory</option>
                  <option>Shoes</option>
                  <option>Other</option>
                </select>
              </div>
              {/* --------------------- */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Identification Card
                </label>
                <input
                  type="file"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  //defaultValue="jesse@example.com"
                />
              </div>
            </div>
            {/* ---------------------flex form three----------------- */}
            {/*<div className="flex space-x-4">
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
               --------------------- 
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
            </div>*/}
            {/* ---------------------buttons--------------- */}
            <div className="space-x-6 flex justify-center">
              <button className=" shadow-md bg-primary text-white font-bold px-10 py-1 rounded-xl">
                Upgrade
              </button>
              <button className="shadow-md font-bold text-gray-800 px-10 py-1 hover:bg-gray-100 rounded-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
