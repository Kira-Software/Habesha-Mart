import React from "react";
import { createPopper } from "@popperjs/core";
import { LogoutIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { Logout } from "../../Redux/Action/authentication";
import { useDispatch,useSelector } from "react-redux";
const UserDropdown = () => {
  const items = useSelector((state) => state.item.items);
  const user = useSelector((state) => state.authreducer.user);
  // dropdown props

  const dispatch = useDispatch();
  const history = useHistory();
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

  const handleLogout = () => {
    console.log("inside the logout function");
    dispatch(Logout());
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
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("./../../assets/img/team-1-800x800.jpg").default}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button
          className={
            "text-sm py-2 px-4 hover:bg-gray-50  font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => {
            history.push("/profile");
          }}
        >
          Profile
        </button>
        <button
          className={
            "text-sm py-2 px-4  hover:bg-gray-50 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => {
            history.push("/item-list");
          }}
        >
          My Items
        </button>
        <button
          className={
            "text-sm py-2 px-4    hover:bg-gray-50  font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          <span
            className="flex justify-center w-full  space-x-2"
            onClick={handleLogout}
          >
            <span>
              <LogoutIcon className="h-5 text-gray-500" f />
            </span>
            <span>Logout</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
