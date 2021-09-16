import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";
import NotificationItem from "../NotificationItem";
import NotificationItemBroker from "../NotificationItemBroker";
import ReplyCard from "../replyCard";
import { useSelector, useDispatch } from "react-redux";
import { getRequest } from "../../Redux/Action/request";

const NotificationDropdown = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.user);
  const loading = useSelector((state) => state.authreducer.loading);
  const request = useSelector((state) => state.item.request);

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

  useEffect(() => {
    dispatch(getRequest());
  }, []);
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
        {user.role === "classCustomer" ? (
          <>
            {" "}
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />{" "}
          </>
        ) : user.role === "broker" ? (
          <>
            {request.length !== 0 ? (
              request.map((item, idx) => {
                return (
                  <NotificationItemBroker
                    name={item.requestname}
                    category={item.requestcategory}
                    quantity={item.requestquantity}
                    location={item.requestlocation}
                    description={item.requestdescription}
                  />
                );
              })
            ) : (
              <> No Notification</>
            )}
            {/* {" "}
            <NotificationItemBroker />
            <NotificationItemBroker />
            <NotificationItemBroker />
            <NotificationItemBroker />{" "} */}
          </>
        ) : null}
      </div>
    </>
  );
};

export default NotificationDropdown;
