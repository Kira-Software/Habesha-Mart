import { useEffect } from "react";

import {
  LocationMarkerIcon,
  ChatIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";

import ItemLS from "../components/ItemLC";
import Items from "../components/ItemS";
import { getLoggedIn } from "../Redux/Action/authentication";
import { getIndividualItem } from "../Redux/Action/itemstuff";
import { getAccount } from "../Redux/Action/profile";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.user);
  const profile = useSelector((state) => state.authreducer.profile);
  const items = useSelector((state) => state.item.items);
  const loadingitem = useSelector((state) => state.authreducer.loadingitem);
  const loading = useSelector((state) => state.authreducer.loading);

  let myitemcount = 0;

  useEffect(() => {
    dispatch(getLoggedIn());
    //   .then(res =>  dispatch(getIndividualItem(res.data.user._id)));
    // dispatch(getIndividualItem(user._id))
  }, []);
  useEffect(() => {
    // dispatch(getLoggedIn())
    //   .then(res =>  dispatch(getIndividualItem(res.data.user._id)));
    if (user !== null) {
      dispatch(getIndividualItem(user._id));
      dispatch(getAccount());
    }
  }, [user]);

  return (
    <div className="h-screen">
      <img src="phones.jpg" alt="bg" className="w-full max-h-60" />

      <div className=" rounded-full w-36 flex container px-1 py-1 bg-white absolute top-40 left-28 items-center">
        <img
          src={`http://localhost:9000/${profile.profilepicture}`}
          alt="propic"
          className="h-36 w-36 rounded-full"
        />
      </div>
      <div className="flex">
        <div className="w-1/5"> </div>
        <div className="mt-4 w-4/5 ">
          <div className="text-xl font-bold text-primary">
<<<<<<< HEAD
            {!loading ? profile.firstName : null} {profile.lastName}
=======
            <span>{!loading ? profile.firstName : null}</span>
>>>>>>> 76c54ce560ac326f418e86d67d715908537eefb9
          </div>
          <div className="text-sm font-semibold text-gray-600">
            web designer and front end developer at my dorm
          </div>
          <div className="flex mt-2 space-x-5">
            <div className="flex items-center space-x-2">
              <LocationMarkerIcon className="h-4 text-gray-500" />
              <div className="text-sm text-gray-500 font-semibold">
                {profile.address}
              </div>
            </div>
            {/* <div className="flex items-center space-x-2">
              <ChatIcon className="h-4 text-gray-500" />
              <div className="text-sm text-gray-500 font-semibold">
                nahom101-fb
              </div>
            </div> */}
            <div className="flex items-center space-x-2">
              <PaperAirplaneIcon className="h-4 text-gray-500" />

              <div className="text-sm text-gray-500 font-semibold">@nah_n1</div>
            </div>
            <div>
              <Link
                className="font-bold border rounded-md self-center px-2 py-1 hover:bg-gray-500 bg-gray-300 "
                to="/edit-profile"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-10 flex mt-4 px-10">
        <div className="w-1/5  space-y-2">
          <div className="flex items-center  ">
            <PhoneIcon className="h-4 text-gray-500 mr-2" />
            <span className="text-sm font-semibold text-gray-500">
              {profile.phoneNo}
            </span>
          </div>
          <div className="flex items-center ">
            <MailIcon className="h-4 text-gray-500 mr-2" />
            <span className="text-sm font-semibold text-gray-500">
              {user !== null ? user.email : null}
            </span>
          </div>
          <div className="flex items-center ">
            <PaperAirplaneIcon className="h-4 text-gray-500 mr-2" />
            <span className="text-sm font-semibold text-gray-500">@nah_n1</span>
          </div>
          <div className="flex items-center space-x-2 mt-20">
            <div className="text-3xl text-gray-700 font-bold">4.5</div>
            <div>
              <img src="star.png" alt="star" />
            </div>
          </div>
          <div>
            <Link
              className="font-bold border rounded-md self-center px-2 py-1 hover:bg-gray-500 bg-gray-300 "
              to="/"
            >
              Home Page
            </Link>
          </div>

          <div>
            <Link
              className="font-bold border rounded-md self-center px-2 py-1 hover:bg-gray-500 bg-gray-300  "
              to="/additem"
            >
              Add Item
            </Link>
          </div>
        </div>

        <div className="w-2/5 mx-2 bg-white rounded-lg px-4 py-2 shadow-md ">
          <div className="font-semibold text-lg text-gray-700">Items</div>
          <div className="py-2 flex justify-around">
            {items.length !== 0 && !loadingitem ? (
              items.data.map((item, idx) => {
                myitemcount++;
                if (myitemcount < 3) {
                  return (
                    <div
                      className="border px-5 hover:shadow-md rounded-xl py-2 space-y-1"
                      key={idx}
                    >
                      <img
                        src={`http://localhost:9000/${item.image1}`}
                        alt="item-one"
                        className="h-24"
                      />
                      <div className="text-gray-700   font-semibold">
                        {item.name}
                      </div>
                      <div>
                        <img src="star.png" alt="rate" />
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <p>Loading ...</p>
            )}
            {/* <div className="border px-5 hover:shadow-md rounded-xl py-2 space-y-1">
                  <img src="jacket2.jpg" alt="item-one" className="h-24" />
                  <div className="text-gray-700   font-semibold">Jacket De_9</div>
                  <div>
                    <img src="star.png" alt="rate" />
                  </div>
                </div> */}

            <Link
              className="font-semibold border rounded-md self-center px-2 py-1 hover:bg-gray-100"
              to="item-list"
            >
              See More
            </Link>
          </div>
        </div>
        <div className="w-2/5 mx-2 bg-white rounded-lg px-4 py-2 shadow-md h-56">
          <div className="font-semibold text-lg text-gray-700">About Me</div>
          <div className="flex items-center justify-center h-full">
            <div className="font-semibold text-2xl text-gray-500">
              no Content for now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
