import { ArrowRightIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product";

export default function ClassC() {
  return (
    <div>
      <Navbar />
      <div
        className=" mt-14  flex  px-32 items-center border-t h-96 bg-gradient-to-tr  "
        style={{
          backgroundImage: "url(img.webp)",
          backgroundBlendMode: "screen",
          backgroundSize: "cover",
          backgroundColor: "#042a3d",
        }}
      >
        <div className="w-1/2">
          <div className="text-7xl text-white font-bold">Intro Here..</div>
        </div>
        <div className="w-1/2">two</div>
      </div>
      <div className="mt-14 px-20">
        <div className="text-2xl  text-gray-900 font-bold">Electronics</div>
        <div className="flex   justify-around py-4   space-x-2   ">
          <Product img="one.jpg" />
          <Product img="two.jpg" />
          <Product img="three.jpg" />
          <Product img="four.jpg" />

          <button className="border rounded-full self-center px-5 py-5">
            <ArrowRightIcon className="h-5" />
          </button>
        </div>
        <div className="text-2xl text-gray-900 font-bold">Jacket</div>
        <div className="flex justify-around py-4   space-x-3   ">
          <Product img="j_one.jpg" />
          <Product img="j_two.jpg" />
          <Product img="j_three.jpg" />
          <Product img="j_four.jpg" />
          <button className="border rounded-full self-center px-5 py-5">
            <ArrowRightIcon className="h-5" />
          </button>
        </div>

        {/* <Product img="" />
          <Product img="" />
          <Product img="" /> */}
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
      <div className="px-32 py-20">
        <div>
          <div>
            <div className="text-2xl text-gray-900 font-bold">Car</div>
            <div className="flex justify-around py-4   space-x-3   ">
              <Product img="car_one.jpg" />
              <Product img="car_two.jpg" />
              <Product img="car_three.jpg" />
              <Product img="car_four.jpg" />
              <button className="border rounded-full self-center px-5 py-5">
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
            <div className="text-2xl text-gray-900 font-bold">Home</div>
            <div className="flex justify-around py-4   space-x-3   ">
              <Product img="home_one.jpeg" />
              <Product img="home_two.jpg" />
              <Product img="home_three.jpg" />
              <Product img="home_four.jpg" />
              <button className="border rounded-full self-center px-5 py-5">
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
