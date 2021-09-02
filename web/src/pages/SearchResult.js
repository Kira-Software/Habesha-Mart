import { ArrowDownIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import Items from "../components/ItemS";
import Product from "../components/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getItem, getSearchItem } from "../Redux/Action/itemstuff";

export default function SearchResult() {
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.item.searchItem);
  const [searchWord, setSearchWord] = useState("");

  const changer = (e) => {
    setSearchWord(e.target.value);
    console.log("the search word is ", searchWord);
  };

  const clearSearch = () => {
    setSearchWord("");
  };

  const handleSearch = () => {
    
  }

  useEffect(() => {
    dispatch(getSearchItem(localStorage.getItem("moreCategory")));
  }, []);
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="flex " style={{ marginTop: "57px" }}>
        <div className=" w-1/5 fixed block " style={{ minHeight: "90%" }}>
          <div className="px-8 mt-4   font-semibold text-gray-600">Filter</div>
          <div className="px-10 py-2  ">
            <div className="font-semibold text-gray-700">Categories</div>
            <ul>
              <li className="mt-2 px-2 flex items-center ">
                <input type="checkbox" className="mr-2 " />
                <span className="text-sm text-gray-500 font-semibold">
                  Gardening
                </span>
              </li>
              <li className="mt-2 px-2">
                <input type="checkbox" className="mr-2 " />
                <span className="text-sm text-gray-500 font-semibold">
                  Plant
                </span>
              </li>
              <li className="mt-2 px-2">
                <input type="checkbox" checked className="mr-2 text-gray-900" />
                <span className="text-sm text-gray-500 font-semibold">
                  seeds
                </span>
              </li>
              <li className="mt-2 px-2">
                <input type="checkbox" className="mr-2 " />
                <span className="text-sm text-gray-500 font-semibold">
                  Bulbs
                </span>
              </li>
              <li className="mt-2 px-2">
                <input type="checkbox" className="mr-2 " />
                <span className="text-sm text-gray-500 font-semibold">
                  Planters
                </span>
              </li>
              <li className=" pl-10 mt-3 ">
                <div className="flex items-baseline">
                  <span className="text-gray-500 text-sm font-semibold">
                    Others
                  </span>
                  <ArrowDownIcon className="h-4 ml-2 text-gray-500" />
                </div>
              </li>
            </ul>
          </div>
          <div className="px-10 py-8  ">
            <div className="font-semibold text-gray-700">Price Range</div>
            <div className="flex mt-4 justify-between">
              <div className="px-7 py-1 bg-gray-100 font-semibold text-gray-600 rounded-3xl">
                MIN
              </div>
              <div className="px-7 py-1 bg-white font-semibold border text-gray-700 rounded-3xl">
                $400
              </div>
            </div>
            <button className="px-2 py-1 w-full bg-primary text-white text-center rounded-3xl mt-3 font-semibold">
              Set Price
            </button>
          </div>
        </div>
        <div className=" w-3/5     px-14 py-8 " style={{ marginLeft: "20%" }}>
          <div className="flex bg-gray-50 px-4 py-2 rounded-xl items-center">
            
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 w-full outline-none"
              value={searchWord}
              onChange={(e) => changer(e)}
            />
            <SearchIcon className="h-5 text-gray-400 mr-4" />
            <XIcon className="h-5 text-gray-400" onClick={clearSearch} />
          </div>
          <div className="my-2 text-sm font-semibold text-gray-300">
            Search Result for ....
          </div>
          <div className="mt-5">
            <button className="px-4 py-1 mx-2  text-gray-500 ">Sort</button>
            <button className="px-5   mx-2  font-semibold py-1 bg-primary text-white rounded-3xl">
              Relevance
            </button>
            <button className="px-5 py-1 mx-2 text-gray-500 rounded-3xl border ">
              Most View
            </button>
            <button className="px-5  py-1 mx-2 text-gray-500 rounded-3xl border ">
              Popular
            </button>
          </div>
          <div className="flex flex-wrap justify-between">
            {searchItem.length !== 0
              ? searchItem.data.map((item, idx) => {
                  if (item.category === localStorage.getItem("moreCategory")) {
                    return (
                      <Product
                        img={`http://localhost:9000/${item.image1}`}
                        name={item.itemname}
                        id={item._id}
                      />
                    );
                  }
                })
              : null}
            {/* <Product img="j_one.jpg" />
            <Product img="j_two.jpg" />
            <Product img="j_three.jpg" />
            <Product img="j_four.jpg" />
            <Product img="j_five.jpg" />
            <Product img="j_six.jpg" /> */}
          </div>
        </div>
        <div
          className=" w-1/5 px-4 py-10   fixed right-0  "
          style={{ minHeight: "90%" }}
        >
          {" "}
          <div className="flex">
            {searchItem.length !== 0 ? (
              searchItem.data.map((item, idx) => {
                if (item._id === localStorage.getItem("detailId")) {
                  return (
                    <div>
                      <div className="flex justify-around">
                        <img
                          src={`http://localhost:9000/${item.image1}`}
                          alt="desc"
                          className="h-56"
                        />
                      </div>
                      <div className="flex justify-between mt-4">
                        {item.image2 ? (
                          <div className="rounded-full border px-2 py-2">
                            <img
                              src={`http://localhost:9000/${item.image2}`}
                              alt="two"
                              className="h-12 rounded-full"
                            />
                          </div>
                        ) : null}
                        {item.image3 ? (
                          <div className="rounded-full border px-2 py-2">
                            <img
                              src={`http://localhost:9000/${item.image3}`}
                              alt="three"
                              className="h-12 rounded-full"
                            />
                          </div>
                        ) : null}

                        {item.image4 ? (
                          <div
                            className="rounded-full border px-2 py-2"
                            rounded-lg
                          >
                            <img
                              src={`http://localhost:9000/${item.image4}`}
                              alt="four"
                              className="h-12 rounded-full"
                            />
                          </div>
                        ) : null}
                      </div>{" "}
                      <div className="mt-4 text-2xl font-bold text-gray-800">
                        {item.itemname}
                      </div>
                      <div className="mt-2 font-semibold text-sm text-gray-500">
                        {item.description}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="mt-4 ">
                          <div className="font-semibold text-xl text-gray-800">
                            Price
                          </div>
                          <div className="text-sm font-semibold text-gray-800">
                            Br. {item.price}
                          </div>
                        </div>
                        <div>
                          <button className=" px-4 py-1 rounded-3xl bg-primary text-white font-semibold">
                            Get Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
