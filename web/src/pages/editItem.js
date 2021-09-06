import Navbar from "./../components/Navbar";

export default function EditItem() {
  return (
    <div>
      <Navbar />
      <div className=" pt-14 flex">
        <div className="w-1/4   bg-gray-50">one</div>
        <div
          className="w-3/4 py-10 h-screen  flex justify-center"
          style={{
            backgroundImage: "url(bg-shape-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "210px 210px",
            backgroundPosition: "top right ",
          }}
        >
          <div className=" flex flex-col items-center">
            {/* <div>
              <div className=" rounded-full   px-1 py-1 bg-white  ">
                <img
                  src="pro3.jpg" 
                  alt="propic"
                  className="h-28 w-28 rounded-full"
                />
              </div>
              <div className="relative left-20 bottom-9 ">
                <button className="bg-primary rounded-full ring-2 ring-white px-1 py-1">
                  <PencilIcon className="h-5 text-white" />
                </button>
              </div>
            </div> */}
            <div className="text-3xl font-bold text-gray-800">Edit Items</div>
            <div className="text-sm font-semibold text-gray-700 w-2/3 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              officia necessitatibus ex? Id architecto nihil expedita,
            </div>
            <div className=" space-y-6">
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="item-xs ls 930"
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Category
                  </label>
                  <select className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md">
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                </div>
              </div>
              {/* other */}
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    item status
                  </label>
                  <select className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md">
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Item Type
                  </label>
                  <select className="flex  bg-gray-100 w-60 outline-none px-2 py-1 rounded-md">
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                </div>
              </div>
              {/* other */}
              <div className="  space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    description
                  </label>
                  <textarea
                    rows={4}
                    className="flex w-full bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              <div className="flex  space-x-8">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Price
                  </label>
                  <input
                    type="number"
                    placeholder="400"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="1600"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              <div className="flex  space-x-8">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="addis ababa"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    sub-city
                  </label>
                  <input
                    type="text"
                    placeholder="new york"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              <div className="  space-x-8">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Image
                  </label>
                  <input
                    type="file"
                    placeholder="400"
                    className=" w-full bg-gray-100  outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <button className="bg-primary text-white font-bold rounded-2xl px-4 py-1">
                Save change
              </button>
              <button className="font-semibold text-gray-800 border rounded-2xl px-4 py-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
