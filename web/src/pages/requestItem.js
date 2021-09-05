import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RequestItems() {
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
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="BMW car"
                />
              </div>

              {/* _______________two____________-- */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Item Category
                </label>
                <select className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option>car</option>
                  <option>car</option>
                  <option>car</option>
                  <option>car</option>
                  <option>other</option>
                </select>
              </div>
              {/* ______________________3______________ */}
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
              {/* _______________________________4______________ */}
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
              {/* _____________________button___________-- */}
              <div className="space-x-4 flex justify-center">
                <button className=" shadow-md bg-primary text-white font-bold px-10 py-1 rounded-xl">
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
