import {
  ChatIcon,
  LocationMarkerIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@heroicons/react/solid";
import ReportDropdown from "../components/Dropdowns/reportDropDown";

import Navbar from "../components/Navbar";
import RatingComponenet from "../components/ratingComponent";

export default function AboutSeller() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="mt-14 py-14 px-12 flex">
          <div className="w-1/4  flex justify-center ">
            <div>
              <img src="pro2.jpg" alt="pro" className="h-48 w-48 rounded-md" />
              <div className="text-gray-600 text-sm mt-2 font-semibold">
                NO BRAIN, NO PAIN
              </div>
            </div>
          </div>{" "}
          <div className="w-3/4 ">
            <div className="flex items-baseline space-x-3">
              <div className="text-xl font-semibold text-gray-500">
                Nahom Balcha
              </div>{" "}
              <div className="flex items-baseline space-x-1">
                <LocationMarkerIcon className="h-4 text-gray-300" />{" "}
                <span className="text-gray-300 text-sm font-semibold">
                  Addis Ababa
                </span>
              </div>
            </div>

            <div className="text-sm text-yellow-400 font-semibold">
              product manager
            </div>
            <div className="mt-8">
              <div className="text-gray-500 font-semibold text-sm">Rating</div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="text-3xl text-gray-700 font-bold">4.5</div>
                <div>
                  <RatingComponenet />
                </div>
              </div>
            </div>
            <div className="mt-4 space-x-5 flex">
              <button className="flex px-8 hover:bg-yellow-100 py-1 border rounded-md space-x-2 items-center">
                <StarIcon className="h-4 text-yellow-500" />{" "}
                <span className="text-gray-500 font-semibold text-sm">
                  Rate Nahom{" "}
                </span>
              </button>
              <button className="flex bg-yellow-50 px-8 py-1 border rounded-md space-x-2 items-center">
                <ChatIcon className="h-4" />{" "}
                <span className="text-gray-500 font-semibold text-sm">
                  Rate Nahom{" "}
                </span>
              </button>
              {/* <button className="flex px-8 py-1  space-x-2 items-center">
                <ShieldCheckIcon className="h-4 text-gray-400" />{" "}
                <span className="text-gray-400 font-semibold text-sm">
                  Report{" "}
                </span>
              </button> */}
              <ul>
                <ReportDropdown />
              </ul>
            </div>
            <div className="mt-4  flex ">
              <div className="w-1/2 space-y-3">
                <div className="font-semibold text-gray-600">About</div>
                <div className="text-sm text-gray-400">Contact Information</div>
                <div className="flex space-x-12">
                  <div className="">
                    <div className="space-y-5">
                      <div className="text-sm text-gray-600">Phone</div>
                      <div className="text-sm text-gray-600">Addres</div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="text-sm text-gray-600">Phone</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="space-y-5">
                      <div className="text-sm text-yellow-400 font-semibold">
                        +251942104450
                      </div>{" "}
                      <div className="text-sm text-gray-500 font-semibold">
                        E 4th street, Addis Ababa
                      </div>
                      <div className="text-sm text-gray-500 font-semibold">
                        nahom.ssent@gmail.com
                      </div>
                      <div className="text-sm text-gray-500 font-semibold">
                        +251942104450
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">
                    Personal Information
                  </div>
                  <div className="flex mt-2 space-x-12">
                    <div className="">
                      <div className="space-y-5">
                        <div className="text-sm text-gray-600">Birthday</div>
                        <div className="text-sm text-gray-600">Gender</div>
                      </div>
                    </div>
                    <div className="">
                      <div className="space-y-5">
                        <div className="text-sm text-yellow-400 font-semibold">
                          04-11-1998
                        </div>{" "}
                        <div className="text-sm text-gray-500 font-semibold">
                          Male
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="font-semibold text-gray-600">My Document</div>
                <div className="w-full  h-64 flex justify-center items-center">
                  <img src="nodata.jpg" alt="no-data" className="h-52" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
