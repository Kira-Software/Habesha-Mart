import {
  LocationMarkerIcon,
  ChatIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";
import Items from "../components/ItemS";

export default function Profile() {
  return (
    <div className="h-screen">
      <img src="phones.jpg" alt="bg" className="w-full max-h-60" />

      <div className=" rounded-full w-36 flex container px-1 py-1 bg-white absolute top-40 left-28 items-center">
        <img src="pro3.jpg" alt="propic" className="h-36 w-36 rounded-full" />
      </div>
      <div className="flex">
        <div className="w-1/5"> </div>
        <div className="mt-4 w-4/5 ">
          <div className="text-xl font-bold text-gray-800">Nahom Balcha</div>
          <div className="text-sm font-semibold text-gray-600">
            web designer and front end developer at my dorm
          </div>
          <div className="flex mt-2 space-x-5">
            <div className="flex items-center space-x-2">
              <LocationMarkerIcon className="h-4 text-gray-500" />
              <div className="text-sm text-gray-500 font-semibold">
                Addis Ababa
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ChatIcon className="h-4 text-gray-500" />
              <div className="text-sm text-gray-500 font-semibold">
                nahom101-fb
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <PaperAirplaneIcon className="h-4 text-gray-500" />
              <div className="text-sm text-gray-500 font-semibold">@nah_n1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-10 flex mt-4 px-10">
        <div className="w-1/5  space-y-2">
          <div className="flex items-center  ">
            <PhoneIcon className="h-4 text-gray-500 mr-2" />
            <span className="text-sm font-semibold text-gray-500">
              +251942104459
            </span>
          </div>
          <div className="flex items-center ">
            <MailIcon className="h-4 text-gray-500 mr-2" />
            <span className="text-sm font-semibold text-gray-500">
              nahom@gmail.com
            </span>
          </div>
          <div className="flex items-center ">
            <PaperAirplaneIcon className="h-4 text-gray-500 mr-2" />
            <span className="text-sm font-semibold text-gray-500">@nah_n1</span>
          </div>
          <div className="flex items-center space-x-2 mt-20">
            <div className="text-3xl text-gray-700 font-bold">4.5</div>
            <div>
              <img src="star.png" alt="star" />
            </div>
          </div>
        </div>

        <div className="w-2/5 mx-2 bg-white rounded-lg px-4 py-2 shadow-md ">
          <div className="font-semibold text-lg text-gray-700">Items</div>
          <div className="py-2 flex justify-around">
            <div className="border px-5 hover:shadow-md rounded-xl py-2 space-y-1">
              <img src="jacket2.jpg" alt="item-one" className="h-24" />
              <div className="text-gray-700   font-semibold">Jacket De_9</div>
              <div>
                <img src="star.png" alt="rate" />
              </div>
            </div>
            <div className="border px-5 hover:shadow-md rounded-xl py-2 space-y-1">
              <img src="jacket3.jpg" alt="item-one" className="h-24" />
              <div className="text-gray-700   font-semibold">Jacket De_9</div>
              <div>
                <img src="star.png" alt="rate" />
              </div>
            </div>
            <button className="font-semibold border rounded-md self-center px-2 py-1 hover:bg-gray-100">
              See More
            </button>
          </div>
        </div>
        <div className="w-2/5 mx-2 bg-white rounded-lg px-4 py-2 shadow-md h-56">
          <div className="font-semibold text-lg text-gray-700">About Me</div>
          <div className="flex items-center justify-center h-full">
            <div className="font-semibold text-2xl text-gray-500">
              no Content for now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
