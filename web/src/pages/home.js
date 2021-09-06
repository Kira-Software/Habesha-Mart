import { LockClosedIcon, MenuIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  return (
    <div className="bg-gray-50">
      <div className="scrollbar-hide bg-gray-900 py-4  h-screen px-10 ">
        <div className="flex justify-between">
          <div className="text-lg font-bold text-white">H-mart</div>
          <div className="space-x-8">
            <button className="font-semibold text-white">About</button>
            <button className="font-semibold text-white">Home</button>
            <button className="font-semibold text-white">Sign up</button>
            <button className="font-semibold text-white px-8 py-1 rounded-xl bg-gradient-to-tr from-red-500 to-yellow-500">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex   h-5/6">
          <div className="w-1/2 mt-28 flex items-center">
            <div className="px-10">
              <div className="text-6xl w-4/6  font-bold text-gray-50">
                <span>Connect.</span> <span>Bond.</span> <span>Grow</span>
              </div>
              <div className="mt-10 text-white font-light ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                error obcaecati. Quibusdam, autem eveniet harum facere eligendi
                magni nam ex rem mollitia vitae voluptatibus minus ducimus!
                Exercitationem est id atque!
              </div>
              <div className="mt-10 space-x-4">
                <button className="font-semibold text-white px-8 py-2 rounded-xl bg-gradient-to-tr from-red-500 to-yellow-500">
                  Get Started
                </button>
                <button className="text-gray-400 hover:text-gray-100 hover:bg-gray-700 rounded-md px-4 py-2 font-bold">
                  How to?
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2   py-8 h-full  g-red-600 flex justify-center">
            <img
              src="test-image.jpg"
              alt="sec"
              className=" h-40 rounded-xl  absolute  bottom-16"
              style={{ right: "450px" }}
            />{" "}
            <img
              src="test-image.jpg"
              alt="sec"
              className=" h-40 rounded-xl  absolute   right-10 bottom-16"
            />
            <img src="shop.jpg" alt="img-r" className="h-full rounded-3xl " />
          </div>
        </div>
      </div>
      <div className="px-44 py-20 space-y-14  bg-gray-50 ">
        <div className="flex justify-center items-center space-x-3 ">
          <hr className=" w-20  border-t-2 border-b-2 border-gray-800 font-bold text-gray-900 " />

          <span className="text-4xl text-gray-900   font-bold  ">POPULAR</span>
          <hr className=" w-20  border-t-2 border-b-2 border-gray-800 font-bold text-gray-900 " />
        </div>
        <div className="flex space-x-10 pb-10">
          <div className="rounded-md bg-white px-8 space-y-2 py-4 ring-1 ring-yellow-200  shadow-xl hover:shadow-inner">
            <div>
              <img src="shoes.webp" alt="some img" className="h-28" />
            </div>
            <div className="text-xl font-bold">Chama be 5 birr</div>
            <div>
              <img src="star.png" alt="star" />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Price</div>
              <div className=" font-bold">500 birr</div>
            </div>
          </div>

          <div className="rounded-md bg-white px-8 space-y-2 py-4 hover:shadow-inner ring-1 ring-yellow-200  shadow-xl">
            <div>
              <img src="jacket.jpg" alt="some img" className="h-28" />
            </div>
            <div className="text-xl font-bold">Chama be 5 birr</div>
            <div>
              <img src="star.png" alt="star" />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Price</div>
              <div className=" font-bold">500 birr</div>
            </div>
          </div>
          <div className="rounded-md bg-white px-8 space-y-2 py-4 hover:shadow-inner ring-1 ring-yellow-200  shadow-xl">
            <div>
              <img src="jacket2.jpg" alt="some img" className="h-28" />
            </div>
            <div className="text-xl font-bold">Chama be 5 birr</div>
            <div>
              <img src="star.png" alt="star" />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Price</div>
              <div className=" font-bold">500 birr</div>
            </div>
          </div>
          <div className="rounded-md bg-white px-8 space-y-2 py-4 hover:shadow-inner ring-1 ring-yellow-200  shadow-xl">
            <div>
              <img src="jacket3.jpg" alt="some img" className="h-28" />
            </div>
            <div className="text-xl font-bold">Chama be 5 birr</div>
            <div>
              <img src="star.png" alt="star" />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Price</div>
              <div className=" font-bold">500 birr</div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-gray-900 h-48  px-32 flex space-x-10  ">
        <img
          src="girl.png"
          alt="girl"
          className="   relative bottom-16"
          style={{ height: "300px" }}
        />
        <div className="text-4xl text-white font-bold my-20">
          Set be 5 birr...
        </div>
      </div>
      <div className="my-32 px-32 space-y-14 bg-gray-50">
        <div className="flex justify-center items-center space-x-3 ">
          <hr className=" w-20  border-t-2 border-b-2 border-gray-800 font-bold text-gray-900 " />

          <span className="text-4xl text-gray-900   font-bold  ">BROKERS</span>
          <hr className=" w-20  border-t-2 border-b-2 border-gray-800 font-bold text-gray-900 " />
        </div>
        <div>
          <div className="flex justify-around">
            <div className="flex bg-white rounded-md shadow-xl ">
              <div className="w-60">
                {" "}
                <img
                  src="dog.jpg"
                  alt="broker"
                  className="w-full rounded-t-md"
                />{" "}
                <div className="px-3 py-2 space-y-2">
                  <div className="text-lg font-bold text-gray-900">
                    John Doe
                  </div>
                  <div className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis,
                  </div>
                  <div>
                    <img src="star.png" alt="str" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-md shadow-xl ">
              <div className="w-60">
                {" "}
                <img
                  src="broker.jpg"
                  alt="broker"
                  className="w-full rounded-t-md"
                />{" "}
                <div className="px-3 py-2 space-y-2">
                  <div className="text-lg font-bold text-gray-900">
                    John Doe
                  </div>
                  <div className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis,
                  </div>
                  <div>
                    <img src="star.png" alt="str" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex bg-white rounded-md shadow-xl ">
              <div className="w-60">
                {" "}
                <img
                  src="dani.jpg"
                  alt="broker"
                  className="w-full rounded-t-md"
                />{" "}
                <div className="px-3 py-2 space-y-2">
                  <div className="text-lg font-bold text-gray-900">
                    John Doe
                  </div>
                  <div className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis,
                  </div>
                  <div>
                    <img src="star.png" alt="str" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
