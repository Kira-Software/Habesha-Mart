import { useEffect, useState } from "react";
import axios from "axios";
import {
  LocationMarkerIcon,
  StarIcon,
  ColorSwatchIcon,
  ShoppingBagIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import Comment from "../components/comment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product";
import SideItemShow from "../components/sideItemShow";
import { getLoggedIn } from "../Redux/Action/authentication";
import {
  getcontact,
  getIndividualItem,
  getSelectedItem,
} from "../Redux/Action/itemstuff";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReportDropdown from "../components/Dropdowns/reportDropDown";
import { sendcomment, getComment } from "../Redux/Action/comment";
import { deleteItem } from "../Redux/Action/itemstuff";
import { getOwnerAccount } from "../Redux/Action/profile";
import { Rating } from "@material-ui/lab";
import { rateItem, getRatting } from "../Redux/Action/rating";
//import {facebookIcon} from "../../public/social/facebook.png"
export default function Item() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.user);
  const items = useSelector((state) => state.item.items);
  const isLoading = useSelector((state) => state.authreducer.isLoading);
  const selectedItem = useSelector((state) => state.item.selectedItem);
  const searchItem = useSelector((state) => state.item.searchItem);
  const searchedcomment = useSelector((state) => state.item.comment);
  const loadingitem = useSelector((state) => state.item.loadingitem);
  const rate = useSelector((state) => state.item.rate);

  const [comment, setComment] = useState("");
  const [phonedisplay, setphonedisplay] = useState(false);

  const [value, setValue] = useState(0);

  // const handleRatting = (rateFor, rattingAmount) => {
  //   dispatch(rateItem(rateFor, rattingAmount));
  // };

  const handlePhoneDisplay = () => {
    setphonedisplay(!phonedisplay);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentPost = (comment, itemId) => {
    console.log("the submitted comment is ", comment, itemId);
    dispatch(sendcomment(comment, itemId));
    dispatch(getComment(itemId));
    window.location.reload(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
    window.location.reload(true);
  };

  const handleGetowner = (id) => {
    console.log("the poster id", id);
    dispatch(getOwnerAccount(id));
    // window.location.reload(true);
  };
  useEffect(() => {
    dispatch(getLoggedIn());
    dispatch(getSelectedItem(localStorage.getItem("S_Id")));
    dispatch(getComment(localStorage.getItem("S_Id")));
    dispatch(getRatting(localStorage.getItem("S_Id")));

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

  let relatedCount = 0;

  let phonestyle = {
    display: phonedisplay ? "block" : "none",
    marginTop: 20,
    fontSize: 20,
    width: "50%",
  };

  return (
    <div>
      <Navbar />
      {selectedItem.length !== 0 && !isLoading ? (
        selectedItem.data.map((item, idx) => {
          return (
            <div className="mt-14 flex px-8 py-16">
              <div className="w-1/2     ">
                <div className="  flex justify-center items-center h-full">
                  <div>
                    <div className=" bg-secondary  ">
                      <img
                        src={`http://localhost:9000/${item.image1}`}
                        alt="main item image"
                        className="h-96"
                      />
                    </div>{" "}
                    <div className="w-full mt-2 flex justify-between  ">
                      {item.image2 ? (
                        <img
                          src={`http://localhost:9000/${item.image2}`}
                          alt="image2"
                          className="h-20 "
                        />
                      ) : null}
                      {item.image3 ? (
                        <img
                          src={`http://localhost:9000/${item.image3}`}
                          alt="image3"
                          className="h-20 "
                        />
                      ) : null}
                      {item.image4 ? (
                        <img
                          src={`http://localhost:9000/${item.image4}`}
                          alt="image4"
                          className="h-20 "
                        />
                      ) : null}
                      {/* <img src="j_two.jpg" alt="2" className="h-20 " />
                        <img src="j_three.jpg" alt="2" className="h-20 " />
                        <img src="j_four.jpg" alt="2" className="h-20 " /> */}
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="w-1/2 pr-8 ">
                <div className="space-y-5 border-b pb-16">
                  <div className="text-4xl font-bold text-primary">
                    {item.itemname}
                  </div>
                  <div className="flex   space-x-4">
                    <div className="flex items-center px-2 py-1 bg-yellow-500 rounded-lg">
                      <StarIcon className="h-4 text-white " />{" "}
                      <span className="text-white text-sm font-semibold">
                        {rate.length !== 0
                          ? rate.data[0].avgRate.toFixed(1)
                          : null}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 font-semibold">
                      lorem ipsum
                    </div>
                    <div className="text-sm text-gray-400 font-semibold">
                      34K lorem ipsum
                    </div>
                  </div>
                  <div className=" pr-24 text-gray-500 text-sm font-semibold">
                    <div>{item.description}</div>
                    <div>{item.itemstatus}</div>
                    <div>{item.itemtype}</div>
                    <br />
                    <br />{" "}
                    {user !== null ? (
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                          dispatch(rateItem(item._id, newValue));
                          dispatch(getRatting(item._id));

                          // console.log("the value of newvalue is ", newValue);
                        }}
                      />
                    ) : null}
                    <div
                      className="px-6 py-1 rounded-3xl text-white font-semibold bg-primary"
                      // onClick={handleGetContact}
                      style={phonestyle}
                    >
                      <span style={{ marginRight: 10 }}> Contact </span>{" "}
                      {selectedItem.socialMedia.phoneNo}
                    </div>
                  </div>
                </div>
                <div className="flex mt-5 pb-6 space-x-5 border-b items-center">
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-500">Location</div>
                    <div className="flex items-center py-1 px-2 bg-gray-100 rounded-lg">
                      <LocationMarkerIcon className="h-5 text-gray-500" />{" "}
                      <span className="text-gray-500 font-semibold text-sm">
                        {item.locationcity}
                      </span>
                      <span className="text-gray-500 font-semibold text-sm ml-3">
                        {item.locationsubcity}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-500">Quantity</div>
                    <div className="flex items-center py-1 px-2 bg-gray-100 rounded-lg">
                      <ShoppingBagIcon className="h-5 text-gray-500" />{" "}
                      <span className="text-gray-500 font-semibold text-sm">
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                  {/*  <div className="space-y-1">
                    <div className="font-semibold text-gray-500">Color</div>
                     <div className="flex items-center py-1 px-2 bg-gray-100 rounded-lg">
                      <ColorSwatchIcon className="h-5 text-gray-500" />{" "}
                      <span className="text-gray-500 font-semibold text-sm">
                        Original
                      </span>
                    </div> 
                  </div>*/}
                  {user !== null ? (
                    <ul>
                      <ReportDropdown id={item._id} />
                    </ul>
                  ) : null}

                  {user !== null ? (
                    item.postedBy === user._id ? (
                      <>
                        <button
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            width: 100,
                            borderRadius: 10,
                          }}
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete Item
                        </button>
                      </>
                    ) : null
                  ) : null}
                  <Link to="/about-seller">
                    <button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        width: 100,
                        borderRadius: 10,
                      }}
                      to="/about-seller"
                      onClick={() => handleGetowner(item.postedBy)}
                    >
                      Owner Profile
                    </button>
                  </Link>
                </div>
                <div className="py-5 mt-2">
                  <div className="flex justify-between">
                    <div className="text-3xl font-semibold text-primary">
                      Br. {item.price}
                    </div>
                    <div className="flex items-center space-x-5">
                      {selectedItem.socialMedia.phoneNo ? (
                        <button onClick={handlePhoneDisplay}>
                          <img
                            src="./social/phone.jpg"
                            alt="fb icon"
                            style={{ width: 35, height: 35 }}
                          />
                        </button>
                      ) : null}

                      {selectedItem.socialMedia.facebooklink ? (
                        <a
                          href={selectedItem.socialMedia.facebooklink}
                          target="_blank"
                        >
                          <img
                            src="./social/facebook.png"
                            alt="fb icon"
                            style={{ width: 70, height: 40 }}
                          />
                        </a>
                      ) : null}
                      {selectedItem.socialMedia.instagramlink ? (
                        <a
                          href={selectedItem.socialMedia.instagramlink}
                          target="_blank"
                        >
                          <img
                            src="./social/instagram.png"
                            alt="fb icon"
                            style={{ width: 45, height: 45 }}
                          />
                        </a>
                      ) : null}
                      {selectedItem.socialMedia.telegramlink ? (
                        <a
                          href={selectedItem.socialMedia.telegramlink}
                          target="_blank"
                        >
                          <img
                            src="./social/telegram.png"
                            alt="fb icon"
                            style={{ width: 40, height: 40 }}
                          />
                        </a>
                      ) : null}
                      {selectedItem.socialMedia.whatsapplink ? (
                        <a
                          href={selectedItem.socialMedia.whatsapplink}
                          target="_blank"
                        >
                          <img
                            src="./social/whatsapp.png"
                            alt="fb icon"
                            style={{ width: 50, height: 50 }}
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}

      <div className="px-8 mb-10 flex ">
        {selectedItem.length !== 0 && !isLoading && user !== null ? (
          selectedItem.data.map((item, idx) => {
            return (
              <div className="w-4/6">
                <div className="w-full  flex  justify-center">
                  <div className="flex w-full ml-24 space-x-5">
                    <img
                      src="pro3.jpg"
                      alt="propic"
                      className="h-14 w-14 rounded-full "
                    />
                    <div className="w-full">
                      <textarea
                        rows={3}
                        placeholder="Write Comment..."
                        className=" rounded-lg w-2/3 px-4 py-2 outline-none border-2   border-gray-300"
                        onChange={handleCommentChange}
                        value={comment}
                      />
                      <button
                        className="px-8 block py-1 text-white font-semibold mt-2 bg-primary rounded-3xl"
                        onClick={() => handleCommentPost(comment, item._id)}
                      >
                        Post comment
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-16">
                  {searchedcomment.length !== 0 && !loadingitem
                    ? searchedcomment.data.map((indcomment, idx) => {
                        return (
                          <Comment
                            comment={indcomment.comment}
                            date={indcomment.date}
                          />
                        );
                      })
                    : null}

                  {/* <Comment />
                    <Comment />
                    <Comment /> */}
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full  flex  justify-center">
            <div className="flex w-full ml-24 space-x-5"> </div>{" "}
          </div>
        )}

        <div className="w-2/6 px-4   rounded-l-xl">
          <div className="flex items-center space-x-4">
            <hr className="w-16 border-b-2 border-gray-600" />
            <div className="text-xl font-bold text-gray-700 capitalize">
              More from {user !== null ? user.userName : null}
            </div>
            <hr className="w-16 border-b-2 border-gray-600" />
          </div>

          <div className="mt-8 space-y-4">
            {items.length !== 0 && !isLoading
              ? items.data.map((item, idx) => {
                  if (
                    item.category === localStorage.getItem("Category") &&
                    item._id !== localStorage.getItem("S_Id")
                  ) {
                    return (
                      <SideItemShow
                        name={item.itemname}
                        description={item.description}
                        image={item.image1}
                        id={item._id}
                        category={item.category}
                      />
                    );
                  }
                })
              : null}
            {/* <SideItemShow />
            <SideItemShow />
            <SideItemShow />
            <SideItemShow /> */}
          </div>
        </div>
      </div>
      <div
        className="h-32 mt-6 px-32 flex items-center"
        style={{
          backgroundImage: "url(img.webp)",
          backgroundBlendMode: "screen",
          backgroundSize: "cover",
          backgroundColor: "#040c1c",
        }}
      >
        <div className="w-3/4 space-y-3">
          <div className="text-4xl font-bold text-white">
            {user === null ? (
              <div>
                Sign Up Now{" "}
                <div className="text-white text-sm font-semibold w-2/3">
                  Sign Up and Unlock the features
                </div>
              </div>
            ) : user.role === "classCustomer" ? (
              <div>
                Upgrade Your Account{" "}
                <div className="text-white text-sm font-semibold w-2/3">
                  Upgrade Your Acount and become a Seller or Broker
                </div>
              </div>
            ) : user.role === "seller" || "broker" ? (
              <div>Visit Your Profile </div>
            ) : null}
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <button className="text-white px-8 py-2 rounded-xl font-bold bg-gradient-to-tr from-red-500 to-yellow-400">
            {user === null ? (
              <Link to="/register">Sign Up</Link>
            ) : user.role === "classCustomer" ? (
              <Link to="/upgrade-account">Upgrade Account</Link>
            ) : user.role === "seller" || "broker" ? (
              <Link to="/profile">My Profile</Link>
            ) : null}
          </button>
        </div>
      </div>
      <div className="px-32 mt-4 ">
        <div className="text-2xl text-gray-900 font-bold">Related Items</div>
        <div className="flex justify-around py-4   space-x-3   ">
          {searchItem.length !== 0 && !isLoading
            ? searchItem.data.map((item, idx) => {
                if (
                  item.category === localStorage.getItem("Category") &&
                  item._id !== localStorage.getItem("S_Id") &&
                  relatedCount < 4
                ) {
                  relatedCount++;
                  return (
                    <Product
                      name={item.itemname}
                      description={item.description}
                      img={`http://localhost:9000/${item.image1}`}
                      id={item._id}
                      category={item.category}
                    />
                  );
                }
              })
            : null}
          {/* <Product img="j_one.jpg" />
           <Product img="j_two.jpg" />
          <Product img="j_three.jpg" />
          <Product img="j_four.jpg" /> */}
          <button className="border rounded-full self-center px-5 py-5">
            <ArrowRightIcon className="h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
