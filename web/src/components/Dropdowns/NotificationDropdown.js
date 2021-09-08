import React from "react";
import { createPopper } from "@popperjs/core";
import NotificationItem from "../NotificationItem";
import NotificationItemBroker from "../NotificationItemBroker";
import ReplyCard from "../replyCard";
const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    console.log("hey");
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
        className="text-blueGray-500 block py-1 px-3  "
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-bell"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-4 list-none text-left rounded shadow-lg mt-1 min-w-48 px-6 overflow-auto  "
        }
        style={{ height: "550px" }}
      >
        <div className="text-gray-900 text-2xl font-bold ">Notification</div>

        <NotificationItemBroker />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </>
  );
};

export default NotificationDropdown;
