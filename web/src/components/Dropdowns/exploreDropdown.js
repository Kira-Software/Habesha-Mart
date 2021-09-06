import React from "react";
import { createPopper } from "@popperjs/core";
import { MenuIcon } from "@heroicons/react/solid";

const ExploreDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex">
          <MenuIcon className="h-6 mr-1 text-gray-800" />
          <span className="font-semibold">Explore</span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
        }
        style={{ width: "700px" }}
      >
        <div className="flex">
          <div className="w-1/4 border-r-2  ">
            <a
              href="#pablo"
              className={
                " hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Car
            </a>
            <a
              href="#pablo"
              className={
                " hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Home
            </a>
            <a
              href="#pablo"
              className={
                " hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Tv
            </a>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />
            <a
              href="#pablo"
              className={
                "hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Brokers
            </a>
          </div>
          <div className="w-3/4 px-4">
            <div className="flex justify-center item-center">
              <img src="car_one.jpg" alt="cat-" className="h-48" />
            </div>
            <div className="text-sm font-tiny text-gray-500 px-16 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos doloremque vero cupiditate temporibus porro nam
            </div>
            <div className="mt-10">
              <div className="flex">
                <a
                  href="#pablo"
                  className={
                    "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  BMW
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  MWB
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  WBM
                </a>
              </div>
              {/* ---------------------other________________ */}
              <div className="flex">
                <a
                  href="#pablo"
                  className={
                    "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  BMW
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  MWB
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  WBM
                </a>
              </div>
            </div>
            {/* __________________________other____________ */}
            <div className="flex">
              <a
                href="#pablo"
                className={
                  "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                BMW
              </a>
              <a
                href="#pablo"
                className={
                  "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                MWB
              </a>
              <a
                href="#pablo"
                className={
                  "text-center hover:bg-gray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                WBM
              </a>
            </div>
            {/* +______________________delete it if  you want__________----- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDropdown;
