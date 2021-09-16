import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { MenuIcon, ShieldCheckIcon } from "@heroicons/react/solid";
import { sendreport } from "../../Redux/Action/report";
import { useDispatch } from "react-redux";
const ReportDropdown = (props) => {
  // dropdown props
  const dispatch = useDispatch();
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

  const [report, setreport] = useState({
    reporttype: "",
    reportcontent: "",
  });

  const { reporttype, reportcontent } = report;
  const changer = (e) => {
    setreport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSendReport = () => {
    console.log("inside of the sen report method");
    dispatch(sendreport(report,props.id));
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
        <div className="flex space-x-2 items-center">
          <ShieldCheckIcon className="h-4 text-gray-400" />{" "}
          <span className="text-gray-400 font-semibold text-sm">Report </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-xl w-72"
        }
      >
        {" "}
        <div className="px-4 py-2">
          <div className="text-sm font-semibold text-primary border-b">
            Report
          </div>
          <div className="mt-4 space-x-4">
            <div className="relative w-full mb-3">
              <label
                className="block   text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Report Type
              </label>
              <select
                className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
              bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
              transition-all duration-150"
                name="reporttype"
                value={reporttype}
                onChange={(e) => changer(e)}
              >
                <option value="">{""}</option>
                <option value="Racist">Racist</option>
                <option value="Threat">Threat</option>
                <option value="Sexual">Sexual</option>
                <option value="Immoral">Immoral</option>
              </select>
            </div>
          </div>
          <div className="mt-4 space-x-4">
            <div className="relative w-full mb-3">
              <label
                className="block   text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Report Content
              </label>
              <textarea
                rows={4}
                className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="say something"
                name="reportcontent"
                value={reportcontent}
                onChange={(e) => changer(e)}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className=" shadow-md bg-primary text-white font-bold px-6 py-1 rounded-xl"
              onClick={handleSendReport}
            >
              Send report
            </button>
            <button
              className="shadow-md font-bold text-gray-800 px-6 py-1 hover:bg-gray-100 rounded-xl"
              onClick={closeDropdownPopover}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDropdown;
