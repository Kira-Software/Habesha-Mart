import {
  ChatIcon,
  LocationMarkerIcon,
  PaperAirplaneIcon,
  StarIcon,
} from "@heroicons/react/solid";
import ItemLS from "../components/ItemLC";
import ItemListCat from "../components/ItemListCat";
import Items from "../components/ItemS";
import Navbar from "../components/Navbar";
import { getLoggedIn } from "../Redux/Action/authentication";
import { getIndividualItem } from "../Redux/Action/itemstuff";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ItemListSeller() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.user);
  const items = useSelector((state) => state.item.items);
  const isLoading = useSelector((state) => state.authreducer.isLoading);
  const profile = useSelector((state) => state.authreducer.profile);
  const loading = useSelector((state) => state.authreducer.loading);

  let myitemcount = 0;
  let categoryarray = [];

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
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <div className="mt-14 py-4 flex">
        <div
          className="w-1/5  flex justify-center  items-center "
          style={{ height: "570px" }}
        >
          <div>
            <div className="flex justify-center">
              <div className="w-32 h-32 border-2 border-primary px-1 py-1 flex justify-center items-center overflow-hidden rounded-full  ">
                <img
                  src={`http://localhost:9000/${profile.profilepicture}`}
                  alt="propic"
                  className="w-28 h-28 rounded-full"
                />
              </div>
            </div>

            <div className="text-lg text-primary  mt-2 font-bold text-center">
              {profile.firstName}
            </div>
            <div className="text-sm font-semibold text-gray-400  text-center  ">
              {user !== null ? user.email : null}
            </div>
            <div>
              <div className="w-60 text-center text-sm mt-2 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus provident, odio magnam soluta non reprehenderit
                quis iusto esse quas blanditiis? Minus beatae alias
                exercitationem magnam ut commodi harum quod omnis.
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm">
                  {" "}
                  <span className="font-bold">
                    {items.length !== 0 ? <>{items.data.length} Posts</> : null}
                  </span>{" "}
                </div>
                <div className="flex space-x-2 items-center">
                  <span className="text-xl font-bold text-primary">4.6</span>
                  <img src="star.png" alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 pt-4 ">
          <div className="border-b flex py-4 space-x-8">
            {items.length !== 0 && !isLoading
              ? items.data.map((item, idx) => {
                  if (!categoryarray.includes(item.category)) {
                    categoryarray.push(item.category);
                    return (
                      <ItemListCat
                        img={`http://localhost:9000/${item.image1}`}
                        label={item.category}
                      />
                    );
                  }
                })
              : null}
            {/* <ItemListCat img="home_three.jpg" label="Home" />
            <ItemListCat img="car_one.jpg" label="Car" />
            <ItemListCat img="six.jpg" label="phone" />
            <ItemListCat img="bg_0.jpg" label="Head Phone" /> */}
          </div>
          <div className="flex flex-wrap ">
            {items.length !== 0 && !isLoading
              ? items.data.map((item, idx) => {
                  return (
                    <ItemLS
                      img={`http://localhost:9000/${item.image1}`}
                      name={item.itemname}
                      id={item._id}
                      category={item.category}
                    />
                  );
                })
              : null}

            {/* <ItemLS img="home_one.jpeg" />
            <ItemLS img="home_two.jpg" />

            <ItemLS img="home_three.jpg" />
            <ItemLS img="home_four.jpg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
