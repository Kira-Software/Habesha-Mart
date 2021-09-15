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
      <button
        className="text-blueGray-500 block"
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
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left  py-2 list-none text-left px-2 rounded shadow-lg"
        }
        style={{ width: "500px" }}
      >
        <div className="font-bold text-gray-800">Category</div>
        <div className="flex flex-wrap justify-between space-y-3 px-4 py-4">
          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <img src="car_one.jpg" alt="car" className="h-8" />
            </span>
            <span className="font-bold">Car</span>
          </button>
          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <img src="home_one.jpeg" alt="car" className="h-8" />
            </span>
            <span className="font-bold">Home</span>
          </button>

          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <img src="jacket.jpg" alt="car" className="h-8" />
            </span>
            <span className="font-bold">Cloth</span>
          </button>
          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <img src="phone.png" alt="car" className="h-8" />
            </span>
            <span className="font-bold">Phone</span>
          </button>
          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <img src="gun.jpg" alt="car" className="h-8" />
            </span>
            <span className="font-bold">gun</span>
          </button>

          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <img src="car_one.jpg" alt="car" className="h-8" />
            </span>
            <span className="font-bold">Car</span>
          </button>
          <button className="flex space-x-2 items-center ring-2 outline-none ring-gray-400 rounded-full px-4">
            <span>
              <i className="fas fa-paper-plane"></i>
            </span>
            <span className="font-bold">more</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ExploreDropdown;
