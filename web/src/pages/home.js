import { LockClosedIcon, MenuIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  return (
    <div
      className="scrollbar-hide h-screen"
      style={{
        backgroundImage: "url(bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "70% 90%",
      }}
    >
      {/* <div className="mx-14   flex justify-between items-center">
        <img src="logo.png" alt="logo" className="h-14" />
        <div className="flex">
          <button className="flex items-center">
            <MenuIcon className="h-6 mr-1 text-gray-800" />
            <span className="font-semibold">Explore</span>
          </button>
          <button className="ml-6" onClick={() => history.push("/login")}>
            <LockClosedIcon className="h-6 text-gray-800" />
          </button>
        </div>
      </div>
      <div
        className="w-screen flex items-center bg-secondary "
        style={{
          backgroundImage: "url(loading_r.png)",
        }}
      >
        <div className="w-1/2 flex justify-center items-center px-20 ">
          <div className="h-full my-20">
            <h1 className="text-gray-700 text-3xl font-bold">Habesha Mart</h1>
            <div className="font-semibold mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              felis felis quis a, at euismod aliquam. Amet tellus amet nullam
              cras at augue aliquam a.Curabitur arcu, velit tempus augue nec
              orci.Ac tempus enim, enim proin orci dictumst at facilisi semper.
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center ">
          <img src="shoes.webp" alt="intro" className="h-72 absolute  top-44" />
        </div>
      </div>
      <div className="mt-20 px-20">
        <h1 className="text-2xl font-bold text-gray-900 ">
          Explore Popular Categories
        </h1>
        <div className="flex mt-4  flex-wrap">
          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Sneakers</div>
          </div>
          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Phone</div>
          </div>

          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Sneakers</div>
          </div>

          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Sneakers</div>
          </div>

          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Sneakers</div>
          </div>

          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Sneakers</div>
          </div>
          <div className="mt-4  mr-10">
            <div className="bg-secondary hover:border-2  cursor-pointer ring-2   rounded-full h-32 w-32 flex justify-between items-center">
              <img src="shoes.webp" alt="catone" />
            </div>
            <div className="text-center font-semibold  mt-1">Sneakers</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
