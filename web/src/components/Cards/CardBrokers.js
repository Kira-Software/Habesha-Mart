import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Redux/Action/authentication";
import { getAllProfile } from "../../Redux/Action/profile";
import { Link } from "react-router-dom";
// components

export default function CardBrokers() {
  const dispatch = useDispatch();
  const alluser = useSelector((state) => state.authreducer.alluser);
  const loading = useSelector((state) => state.authreducer.loading);
  const allprofile = useSelector((state) => state.authreducer.allprofile);

  useEffect(() => {
    //  dispatch(getLoggedIn());
    //dispatch(getItem());
    dispatch(getAllUser());
    dispatch(getAllProfile());

    // dispatch(getRequest());
    //console.log("the value of items is ", items);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Brokers
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  items
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              {!loading
                ? alluser.brokerlist.map((broker, idx) => {
                    return allprofile.data.map((profile, idx2) => {
                      if (broker._id === profile.userId) {
                        console.log("they are equal", broker);
                        return (
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {broker.userName}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {broker.email}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <Link to="about-seller">
                                  <img
                                    alt="..."
                                    src={`http://localhost:9000/${profile.profilepicture}`}
                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute   w-10"
                                  />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    });
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
