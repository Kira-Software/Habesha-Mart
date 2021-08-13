import {
  ChatIcon,
  LocationMarkerIcon,
  PaperAirplaneIcon,
  StarIcon,
} from "@heroicons/react/solid";
import ItemLS from "../components/ItemLC";
import ItemListCat from "../components/ItemListCat";
import Items from "../components/ItemS";
import Navbar from "../components/Navbar";

export default function ItemListSeller() {
  return (
    <div>
      <Navbar />
      <div className="mt-14 py-4 flex">
        <div
          className="w-1/5  flex justify-center  items-center "
          style={{ height: "570px" }}
        >
          <div>
            <div className="flex justify-center">
              <div className="w-32 h-32 border-2 border-primary px-1 py-1 flex justify-center items-center overflow-hidden rounded-full  ">
                <img
                  src="pro2.jpg"
                  alt="propic"
                  className="w-28 h-28 rounded-full"
                />
              </div>
            </div>

            <div className="text-lg text-primary  mt-2 font-bold text-center">
              John Doe
            </div>
            <div className="text-sm font-semibold text-gray-400  text-center  ">
              @john-n
            </div>
            <div>
              <div className="w-60 text-center text-sm mt-2 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus provident, odio magnam soluta non reprehenderit
                quis iusto esse quas blanditiis? Minus beatae alias
                exercitationem magnam ut commodi harum quod omnis.
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm">
                  {" "}
                  <span className="font-bold">120</span> Posts
                </div>
                <div className="flex space-x-2 items-center">
                  <span className="text-xl font-bold text-primary">4.6</span>
                  <img src="star.png" alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 pt-4 ">
          <div className="border-b flex py-4 space-x-8">
            <ItemListCat img="home_three.jpg" label="Home" />
            <ItemListCat img="car_one.jpg" label="Car" />
            <ItemListCat img="six.jpg" label="phone" />
            <ItemListCat img="bg_0.jpg" label="Head Phone" />
          </div>
          <div className="flex flex-wrap ">
            <ItemLS img="home_one.jpeg" />
            <ItemLS img="home_two.jpg" />

            <ItemLS img="home_three.jpg" />
            <ItemLS img="home_four.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
