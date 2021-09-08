import Navbar from "../components/Navbar";

export default function ReplyForRequest() {
  return (
    <div>
      <Navbar />
      <div className="flex pt-14 ">
        <div
          className="w-1/4 fixed bg-secondary flex items-center"
          style={{ height: "600px" }}
        >
          <img src="request.png" alt="sideImage" />
        </div>
        <div className="w-3/4 ml-72 overflow-auto flex justify-center py-10">
          <div style={{ width: "600px" }}>
            {" "}
            <div className="space-y-8">
              <div className="font-bold text-primary text-3xl text-center">
                Reply For Request
              </div>
              <div className="text-center text-sm font-tiny text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia et ad corrupti impedit quis omnis odio autem earum,
                totam aliquam odit fugiat consequuntur saepe. Exercitationem
                corrupti autem sapiente ea vitae.
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
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 z"
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
                    Description
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="description..."
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
                  />
                </div>
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
                    defaultValue="Addis Ababa, Ethiopia"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block   text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
                {/* _____________________button___________-- */}
                <div className="space-x-4 flex justify-center">
                  <button className=" shadow-md bg-primary text-white font-bold px-10 py-1 rounded-xl">
                    Reply
                  </button>
                  <button className="shadow-md font-bold text-gray-800 px-10 py-1 hover:bg-gray-100 rounded-xl">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
