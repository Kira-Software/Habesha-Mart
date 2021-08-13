import { ArrowDownIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import Items from "../components/ItemS";
import Product from "../components/product";
export default function SearchResult() {
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
            <SearchIcon className="h-5 text-gray-400 mr-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 w-full outline-none"
            />
            <XIcon className="h-5 text-gray-400" />
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
            <Product img="j_one.jpg" />

            <Product img="j_two.jpg" />
            <Product img="j_three.jpg" />
            <Product img="j_four.jpg" />
            <Product img="j_five.jpg" />
            <Product img="j_six.jpg" />
          </div>
        </div>
        <div
          className=" w-1/5 px-4 py-10   fixed right-0  "
          style={{ minHeight: "90%" }}
        >
          {" "}
          <div className="flex">
            <div>
              <div className="flex justify-around">
                <img src="jacket.jpg" alt="desc" className="h-56" />
              </div>
              <div className="flex justify-between mt-4">
                <div className="rounded-full border px-2 py-2">
                  <img
                    src="jacket.jpg"
                    alt="one"
                    className="h-12 rounded-full"
                  />
                </div>
                <div className="rounded-full border px-2 py-2">
                  <img
                    src="jacket2.jpg"
                    alt="one"
                    className="h-12 rounded-full"
                  />
                </div>

                <div className="rounded-full border px-2 py-2" rounded-lg>
                  <img
                    src="jacket3.jpg"
                    alt="one"
                    className="h-12 rounded-full"
                  />
                </div>
              </div>{" "}
              <div className="mt-4 text-2xl font-bold text-gray-800">
                Monstera Dk Var (L)
              </div>
              <div className="mt-2 font-semibold text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectr adipisicing elit es possis
                exe tionem ex. Aperiam cumque veniam soluta reiciendis, commodi
                perspiciatis magni. Adipisci tempore quos ipsam ut dolorem
                tempora, aliquid illum.
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-4 ">
                  <div className="font-semibold text-xl text-gray-800">
                    Price
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    $ 400.00
                  </div>
                </div>
                <div>
                  <button className=" px-4 py-1 rounded-3xl bg-primary text-white font-semibold">
                    Get Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
