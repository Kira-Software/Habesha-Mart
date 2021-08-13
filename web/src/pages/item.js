import {
  LocationMarkerIcon,
  StarIcon,
  ColorSwatchIcon,
  ShoppingBagIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import Comment from "../components/comment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product";
import SideItemShow from "../components/sideItemShow";

export default function Item() {
  return (
    <div>
      <Navbar />
      <div className="mt-14 flex px-8 py-16">
        <div className="w-1/2     ">
          <div className="  flex justify-center items-center h-full">
            <div>
              <div className=" bg-secondary  ">
                <img src="j_one.png" alt="j" className="h-96" />
              </div>{" "}
              <div className="w-full mt-2 flex justify-between  ">
                <img src="j_two.jpg" alt="2" className="h-20 " />
                <img src="j_three.jpg" alt="2" className="h-20 " />
                <img src="j_four.jpg" alt="2" className="h-20 " />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-1/2 pr-8 ">
          <div className="space-y-5 border-b pb-16">
            <div className="text-4xl font-bold text-primary">
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
            <div className=" pr-24 text-gray-500 text-sm font-semibold">
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
          <div className="py-5 mt-2">
            <div className="flex justify-between">
              <div className="text-3xl font-semibold text-primary">
                $ 400.00
              </div>
              <div className="flex items-center space-x-5">
                <button className="px-6 py-1 rounded-3xl text-white font-semibold bg-primary">
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
              <img
                src="pro3.jpg"
                alt="propic"
                className="h-14 w-14 rounded-full "
              />
              <div className="w-full">
                <textarea
                  rows={3}
                  placeholder="Write Comment..."
                  className=" rounded-lg w-2/3 px-4 py-2 outline-none border-2   border-gray-300"
                />
                <button className="px-8 block py-1 text-white font-semibold mt-2 bg-primary rounded-3xl">
                  Post comment
                </button>
              </div>
            </div>
          </div>
          <div className="px-16">
            <Comment />
            <Comment />
            <Comment />
            <Comment />

            <button className="px-12 py-1 mt-6 ml-72  bg-primary text-white font-semibold rounded-3xl">
              more
            </button>
          </div>
        </div>

        <div className="w-2/6 px-4   rounded-l-xl">
          <div className="flex items-center space-x-4">
            <hr className="w-16 border-b-2 border-gray-600" />
            <div className="text-xl font-bold text-gray-700 capitalize">
              More from nahom101
            </div>
            <hr className="w-16 border-b-2 border-gray-600" />
          </div>

          <div className="mt-8 space-y-4">
            <SideItemShow />
            <SideItemShow />
            <SideItemShow />
            <SideItemShow />
          </div>
        </div>
      </div>
      <div
        className="h-32 mt-6 px-32 flex items-center"
        style={{
          backgroundImage: "url(img.webp)",
          backgroundBlendMode: "screen",
          backgroundSize: "cover",
          backgroundColor: "#040c1c",
        }}
      >
        <div className="w-3/4 space-y-3">
          <div className="text-4xl font-bold text-white">
            Upgrade Your Account
          </div>
          <div className="text-white text-sm font-semibold w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sequi
            eum delectus rem, velit consequuntur vero tenetur iusto optio illum
            provident id esse eius accusantium facilis deleniti sed, laudantium
            corrupti!
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <button className="text-white px-8 py-2 rounded-xl font-bold bg-gradient-to-tr from-red-500 to-yellow-400">
            Upgrade Now!
          </button>
        </div>
      </div>
      <div className="px-32 mt-4 ">
        <div className="text-2xl text-gray-900 font-bold">Related Items</div>
        <div className="flex justify-around py-4   space-x-3   ">
          <Product img="j_one.jpg" />
          <Product img="j_two.jpg" />
          <Product img="j_three.jpg" />
          <Product img="j_four.jpg" />
          <button className="border rounded-full self-center px-5 py-5">
            <ArrowRightIcon className="h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
