import {
  LightBulbIcon,
  PencilAltIcon,
  PencilIcon,
} from "@heroicons/react/solid";

export default function EditProfile() {
  return (
    <div>
      <div className="flex ">
        <div className="px-6 flex flex-col justify-center  w-1/4 h-screen bg-primary opacity-90">
          <div className="text-2xl font-bold text-white ">
            A few Clicks away from Updating your Profile
          </div>
          <div>
            <img src="edit_profile.png" alt="edit-pro" />
          </div>
        </div>
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
            <div>
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
            </div>

            <div className=" space-y-6">
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Nahom"
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Balcha"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              {/* other */}
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nahom@gmail.com"
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+251942104459"
                    className="flex  bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              {/* other */}
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Birthday
                  </label>
                  <input
                    type="date"
                    placeholder="04-11-1998"
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Addres
                  </label>
                  <input
                    type="text"
                    placeholder="Addis Ababa"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              <div className="flex  space-x-8">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Addres
                  </label>
                  <input
                    type="text"
                    placeholder="Addis Ababa"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Addres
                  </label>
                  <input
                    type="file"
                    placeholder="Addis Ababa"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
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
