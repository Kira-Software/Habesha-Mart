import { useState, useEffect } from "react";
import { editProfile } from "../Redux/Action/profile";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../Redux/Action/profile";

import {
  LightBulbIcon,
  PencilAltIcon,
  PencilIcon,
} from "@heroicons/react/solid";

export default function EditProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.authreducer.profile);
  const loading = useSelector((state) => state.authreducer.loading);
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    phoneNo: "",
    telegramlink: "",
    facebooklink: "",
    instagramlink: "",
    whatsapplink: "",
    birthDate: "",
    address: "",
    legaldocument: "",
    profilepicture: "",
  });

  const [ppPreview, setppPreview] = useState(
    profile.profilepicture
      ? `http://localhost:9000/${profile.profilepicture}`
      : "pro3.jpg"
  );
  const [legalDocumentPreview, setlegalDocumentPreview] = useState(null);

  const changer = (e) => {
    if (e.target.type === "file") {
      console.log("the image value is", e.target.files);
    }
    //  console.log("the form value  is " + {...formdata})
    //console.log("the event . target value is that "+e.target.type)
    if (e.target.type !== "file") {
      setformdata({
        ...formdata,
        [e.target.name]: e.target.value,
      });
    }

    if (e.target.type === "file") {
      const selected = e.target.files[0];
      const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          if (e.target.name === "profilepicture") {
            setppPreview(reader.result);
          }
          if (e.target.name === "legaldocument") {
            setlegalDocumentPreview(reader.result);
          }
        };
        reader.readAsDataURL(selected);

        setformdata({
          ...formdata,
          [e.target.name]: e.target.files[0],
        });
      } else {
        // if (e.target.name === "pp") {
        //   setError1(true);
        // }
        // if (e.target.name === "image2") {
        //   setError2(true);
        // }
      }
    }
  };

  const handleSubmit = () => {
    console.log("the submitted formdata value is ", formdata);
    console.log("the submitted profilepicture value is ", profilepicture);

    dispatch(editProfile(formdata));
    // console.log("the file values are", legaldocument[0], legaldocument[1]);

    setformdata({
      firstName: "",
      lastName: "",
      userName: "",
      gender: "",
      phoneNo: "",
      telegramlink: "",
      facebooklink: "",
      instagramlink: "",
      whatsapplink: "",
      birthDate: "",
      address: "",
      legaldocument: "",
      profilepicture: "",
    });
  };

  useEffect(() => {
    dispatch(getAccount());
  }, []);

  const mystyle = { height: 200, width: 300 };

  const {
    firstName,
    lastName,
    userName,
    gender,
    phoneNo,
    telegramlink,
    facebooklink,
    instagramlink,
    whatsapplink,
    birthDate,
    address,
    legaldocument,
    profilepicture,
  } = formdata;
  return (
    <div>
      <div className="flex ">
        <div className="px-6 flex flex-col justify-center  w-1/4 h-screen bg-primary opacity-90">
          <div className="text-2xl font-bold text-white ">
            A few Clicks away from Updating your Profile
          </div>
          <div>
            <img src="edit_profile.png" alt="edit-pro" />
          </div>
        </div>
        <div
          className="w-3/4 py-10 h-screen  flex justify-center"
          style={{
            backgroundImage: "url(bg-shape-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "210px 210px",
            backgroundPosition: "top right ",
          }}
        >
          <div className=" flex flex-col items-center">
            <div>
              <div className=" rounded-full   px-1 py-1 bg-white  ">
                <img
                  src={ppPreview === null ? "pro3.jpg" : ppPreview}
                  alt="propic"
                  className="h-28 w-28 rounded-full"
                  // onChange={(e) => changer(e)}
                  // name="profilepicture"
                />
              </div>
              <div className="relative left-20 bottom-9 ">
                <button className="bg-primary rounded-full ring-2 ring-white px-1 py-1">
                  <label for="pp">
                    {" "}
                    <PencilIcon className="h-5 text-white" cursor="pointer" />
                  </label>
                  <input
                    type="file"
                    hidden
                    id="pp"
                    name="profilepicture"
                    onChange={(e) => changer(e)}
                  />
                </button>
              </div>
            </div>

            <div className=" space-y-6">
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => changer(e)}
                    placeholder={profile.firstName}
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => changer(e)}
                    placeholder={profile.lastName}
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={(e) => changer(e)}
                    placeholder={profile.userName}
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              {/* other */}
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    gender
                  </label>
                  <select
                    className="mr-40 w-1/2"
                    name="gender"
                    value={gender}
                    onChange={(e) => changer(e)}
                  >
                    <option value="">""</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={(e) => changer(e)}
                    placeholder={profile.phoneNo}
                    className="flex  bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              {/* other */}
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Birthday
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={birthDate}
                    onChange={(e) => changer(e)}
                    placeholder={profile.birthDate}
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Addres
                  </label>
                  <input
                    type="text"
                    name={profile.address}
                    value={address}
                    onChange={(e) => changer(e)}
                    placeholder="Addis Ababa"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>

              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Telegram
                  </label>
                  <input
                    type="text"
                    name="telegramlink"
                    value={telegramlink}
                    onChange={(e) => changer(e)}
                    placeholder={profile.telegramlink}
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Facebook
                  </label>
                  <input
                    type="text"
                    name="facebooklink"
                    value={facebooklink}
                    onChange={(e) => changer(e)}
                    placeholder={profile.facebooklink}
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              <div className="flex space-x-8 ">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="instagramlink"
                    value={instagramlink}
                    onChange={(e) => changer(e)}
                    placeholder={profile.instagramlink}
                    className="flex w-60 bg-gray-100 outline-none px-2 py-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Whatsapp
                  </label>
                  <input
                    type="text"
                    name="whatsapplink"
                    value={whatsapplink}
                    onChange={(e) => changer(e)}
                    placeholder={profile.whatsapplink}
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div>
              </div>
              <div className="flex  space-x-8">
                {/* <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Addres
                  </label>
                  <input
                    type="text"
                    placeholder="Addis Ababa"
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                </div> */}
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Legal Document
                  </label>
                  <input
                    type="file"
                    name="legaldocument"
                    //value={legaldocument}
                    onChange={(e) => changer(e)}
                    //multiple
                    className="flex bg-gray-100 w-60 outline-none px-2 py-1 rounded-md"
                  />
                  <div
                    style={{ display: legalDocumentPreview ? "block" : "none" }}
                  >
                    <img
                      src={legalDocumentPreview}
                      alt="image2 placeholder"
                      style={mystyle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <button
                className="bg-primary text-white font-bold rounded-2xl px-4 py-1"
                onClick={handleSubmit}
              >
                Save change
              </button>
              <button className="font-semibold text-gray-800 border rounded-2xl px-4 py-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
