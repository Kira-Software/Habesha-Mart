import {
  LocationMarkerIcon,
  StarIcon,
  ColorSwatchIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import Comment from "../components/comment";
import Navbar from "../components/Navbar";
import SideItemShow from "../components/sideItemShow";

export default function Item() {
  return (
    <div>
      <Navbar />
      <div className="mt-14 flex px-8 py-16">
        <div className="w-1/2 flex  justify-around  ">
          <div>
            <img src="cam1.jpg" alt="cam_one" className="h-80" />
            <div className="flex mt-6 justify-between ">
              <img src="cam1.jpg" alt="item-pic" className="h-24" />
              <img src="cam2.jpg" alt="item-pic" className="h-24" />
              <img src="cam3.jpg" alt="item-pic" className="h-24" />
            </div>
          </div>{" "}
        </div>{" "}
        <div className="w-1/2 pr-8 ">
          <div className="space-y-5 border-b pb-16">
            <div className="text-4xl font-bold text-gray-600">
              Sony Alpha Mirrorless 4K Video Camera(Body Only)
            </div>
            <div className="flex   space-x-4">
              <div className="flex items-center px-2 py-1 bg-yellow-500 rounded-lg">
                <StarIcon className="h-4 text-white " />{" "}
                <span className="text-white text-sm font-semibold">4.6</span>
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                lorem ipsum
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                34K lorem ipsum
              </div>
            </div>
            <div className=" pr-24 text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectr adipisicing elit es possis exe
              tionem ex. Aperiam cumque veniam soluta reiciendis, commodi
              perspiciatis magni. Apisci tempore quos ipsam ut dolorem tempora,
              aliquid illum.
            </div>
          </div>
          <div className="flex mt-5 pb-6 space-x-5 border-b items-center">
            <div className="space-y-1">
              <div className="font-semibold text-gray-500">Location</div>
              <div className="flex items-center py-1 px-2 bg-gray-100 rounded-lg">
                <LocationMarkerIcon className="h-5 text-gray-500" />{" "}
                <span className="text-gray-500 font-semibold text-sm">
                  Addis Ababa
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-gray-500">Quantity</div>
              <div className="flex items-center py-1 px-2 bg-gray-100 rounded-lg">
                <ShoppingBagIcon className="h-5 text-gray-500" />{" "}
                <span className="text-gray-500 font-semibold text-sm">13</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-gray-500">Color</div>
              <div className="flex items-center py-1 px-2 bg-gray-100 rounded-lg">
                <ColorSwatchIcon className="h-5 text-gray-500" />{" "}
                <span className="text-gray-500 font-semibold text-sm">
                  Original
                </span>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="flex justify-between">
              <div className="text-3xl font-semibold text-gray-600">
                $ 400.00
              </div>
              <div className="flex items-center space-x-5">
                <button className="px-6 py-1 rounded-lg text-white font-semibold bg-gray-600">
                  Get Contact
                </button>
                <button className="px-1 py-1 rounded-lg border">
                  <HeartIcon className="h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="px-8 mb-10 flex">
        <div className="w-4/6">
          <div className="w-full  flex  justify-center">
            <div className="flex w-full ml-24 space-x-5">
              <img src="pro3.jpg" alt="propic" className="h-14 rounded-full " />
              <textarea
                rows={3}
                placeholder="Write Comment..."
                className=" rounded-lg w-2/3 px-2 outline-none border-2   border-gray-200"
              />
            </div>
          </div>
          <div className="px-16">
            <Comment />
            <Comment />
            <Comment />
            <Comment />

            <button className="px-2 py-1 mt-6 ml-72 bg-gray-200 font-semibold rounded-lg">
              more...
            </button>
          </div>
        </div>

        <div className="w-2/6 px-4 border-l border-t border-b rounded-l-xl">
          <div className="text-xl font-bold text-gray-700">
            More Item from nahom101
          </div>
          <div className="mt-8">
            <SideItemShow image="jacket.jpg" />
            <SideItemShow image="jacket2.jpg" />
            <SideItemShow image="jacket3.jpg" />
            <SideItemShow image="shoes.webp" />
            <SideItemShow image="jacket2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
