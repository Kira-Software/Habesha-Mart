import { ArrowRightIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItem } from "../Redux/Action/itemstuff";

export default function ClassC() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  let clothcount = 0;
  let electronicscount = 0;
  let shoescount = 0;
  let accessorycount = 0;
  let housecount = 0;
  let carcount = 0;
  let othercount = 0;

  useEffect(() => {
    dispatch(getItem());
    console.log("the value of items is ", items);
  }, []);
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
          {items.length !== 0 ? (
            items.data.map((item, idx) => {
              if (item.category === "Electronics" && electronicscount < 4) {
                electronicscount++;
                return (
                  <Product
                    img={`http://localhost:9000/${item.image1}`}
                    name={item.itemname}
                    description={item.description}
                    itemtype={item.itemtype}
                  />
                );
              }
            })
          ) : (
            <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
          )}
          {/* <Product img="two.jpg" />
          <Product img="three.jpg" />
          <Product img="four.jpg" /> */}

          <button className="border rounded-full self-center px-5 py-5">
            <ArrowRightIcon className="h-5" />
          </button>
        </div>
        <div className="text-2xl text-gray-900 font-bold">Cloth</div>
        <div className="flex justify-around py-4   space-x-3   ">
          {items.length !== 0 ? (
            items.data.map((item, idx) => {
              if (item.category === "Cloth" && clothcount < 4) {
                clothcount++;

                return (
                  <Product
                    img={`http://localhost:9000/${item.image1}`}
                    name={item.itemname}
                    description={item.description}
                    itemtype={item.itemtype}
                  />
                );
              }
            })
          ) : (
            <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
          )}
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
              {items.length !== 0 ? (
                items.data.map((item, idx) => {
                  if (item.category === "Car" && carcount < 4) {
                    carcount++;
                    return (
                      <Product
                        img={`http://localhost:9000/${item.image1}`}
                        name={item.itemname}
                        description={item.description}
                        itemtype={item.itemtype}
                      />
                    );
                  }
                })
              ) : (
                <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
              )}
              <button className="border rounded-full self-center px-5 py-5">
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
            <div className="text-2xl text-gray-900 font-bold">Home</div>
            <div className="flex justify-around py-4   space-x-3   ">
              {items.length !== 0 ? (
                items.data.map((item, idx) => {
                  if (item.category === "House" && housecount < 4) {
                    housecount++;
                    return (
                      <Product
                        img={`http://localhost:9000/${item.image1}`}
                        name={item.itemname}
                        description={item.description}
                        itemtype={item.itemtype}
                      />
                    );
                  }
                })
              ) : (
                <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
              )}
              <button className="border rounded-full self-center px-5 py-5">
                <ArrowRightIcon className="h-5" />
              </button>
            </div>

            <div className="text-2xl text-gray-900 font-bold">Accessories</div>
            <div className="flex justify-around py-4   space-x-3   ">
              {items.length !== 0 ? (
                items.data.map((item, idx) => {
                  if (item.category === "Accessory" && accessorycount < 4) {
                    accessorycount++;
                    return (
                      <Product
                        img={`http://localhost:9000/${item.image1}`}
                        name={item.itemname}
                        description={item.description}
                        itemtype={item.itemtype}
                      />
                    );
                  }
                })
              ) : (
                <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
              )}
              <button className="border rounded-full self-center px-5 py-5">
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
            <div className="text-2xl text-gray-900 font-bold">Shoes</div>
            <div className="flex justify-around py-4   space-x-3   ">
              {items.length !== 0 ? (
                items.data.map((item, idx) => {
                  if (item.category === "Shoes" && shoescount < 4) {
                    shoescount++;
                    return (
                      <Product
                        img={`http://localhost:9000/${item.image1}`}
                        name={item.itemname}
                        description={item.description}
                        itemtype={item.itemtype}
                      />
                    );
                  }
                })
              ) : (
                <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
              )}
              <button className="border rounded-full self-center px-5 py-5">
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
            <div className="text-2xl text-gray-900 font-bold">Other</div>
            <div className="flex justify-around py-4   space-x-3   ">
              {items.length !== 0 ? (
                items.data.map((item, idx) => {
                  if (item.category === "Other" && othercount < 4) {
                    othercount++;
                    return (
                      <Product
                        img={`http://localhost:9000/${item.image1}`}
                        name={item.itemname}
                        description={item.description}
                        itemtype={item.itemtype}
                      />
                    );
                  }
                })
              ) : (
                <p style={{ font: "Algerian bold red 20px" }}>Loading ...</p>
              )}
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
