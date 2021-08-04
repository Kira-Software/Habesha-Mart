import {
  ChatIcon,
  LocationMarkerIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import Items from "../components/ItemS";
import Navbar from "../components/Navbar";

export default function ItemListSeller() {
  return (
    <div>
      <Navbar />
      <div className="mt-14 flex px-10">
        <div
          className="w-1/4 flex items-center fixed border-r  py-5"
          style={{ height: "90%" }}
        >
          <div className="flex  justify-">
            <div>
              <div className=" rounded-full w-36 flex  px-1 py-1 bg-white   items-center">
                <img
                  src="pro3.jpg"
                  alt="propic"
                  className="h-36 w-36 rounded-full"
                />
              </div>
              <div className="text-xl font-bold text-gray-800">
                Nahom Balcha
              </div>
              <div className="text-sm font-semibold text-gray-600">
                web designer and front end developer at my dorm
              </div>
              <div className=" mt-4 space-y-2">
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
                  <div className="text-sm text-gray-500 font-semibold">
                    @nah_n1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-wrap    " style={{ marginLeft: "28%" }}>
          <Items image="jacket.jpg" alt="item" />
          <Items image="jacket2.jpg" alt="item" />
          <Items image="jacket3.jpg" alt="item" />
          <Items image="jacket3.jpg" alt="item" />
          <Items image="jacket.jpg" alt="item" />
          <Items image="jacket2.jpg" alt="item" />
          <Items image="jacket3.jpg" alt="item" />
          <Items image="jacket3.jpg" alt="item" />
          <Items image="jacket.jpg" alt="item" />
          <Items image="jacket2.jpg" alt="item" />
          <Items image="jacket3.jpg" alt="item" />
          <Items image="jacket3.jpg" alt="item" />
        </div>
      </div>
    </div>
  );
}
