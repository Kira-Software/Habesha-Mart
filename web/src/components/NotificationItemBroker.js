import React, { useState } from "react";

import { useHistory } from "react-router-dom";
export default function NotificationItem() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const handleSeeMore = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <div className="flex space-x-4 border-b py-4 shadow-sm">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("./../assets/img/team-1-800x800.jpg").default}
            />
          </span>
          <div className="w-96 space-y-1">
            <span className="w-full text-sm font-semibold  text-gray-800  block">
              Lorem ipsum
            </span>
            <span className=" text-sm  text-gray-600  ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              nulla quasi beatae modi commodi praesentium, cumque dolorem
              maiores odio{" "}
              <button className="text-blue-600" onClick={handleSeeMore}>
                see more
              </button>
            </span>{" "}
            <span className={open ? "block" : "hidden"}>
              <span className="block">
                <span className="font-semibold text-sm text-gray-800 block">
                  Category
                </span>
                <span className="text-sm text-gray-600">House</span>
              </span>
              <span className="block">
                <span className="font-semibold text-sm text-gray-800 block">
                  Location
                </span>
                <span className="text-sm text-gray-600">Bole, Addis Ababa</span>
              </span>
              <span className="block">
                <span className="font-semibold text-sm text-gray-800 block">
                  Quantity
                </span>
                <span className="text-sm text-gray-600">2</span>
              </span>
            </span>
            <div className="space-x-4">
              <button
                className="font-semibold px-4 py-1 rounded-lg bg-gray-100"
                onClick={() => history.push("/reply-for-request")}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
