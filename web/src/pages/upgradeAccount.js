import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { sendupgraderequest } from "../Redux/Action/accountupgrade";
import { getLoggedIn } from "../Redux/Action/authentication";
export default function UpgradeAccount() {
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    roleType: "",
    legalId: "",
    category: "",
    location: "",
  });

  const { roleType, legalId, category, location } = formdata;

  const [legalIdPreview, setlegalIdPreview] = useState(null);

  useEffect(() => {
    dispatch(getLoggedIn());
  }, []);

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
            setlegalIdPreview(reader.result);
          }
          if (e.target.name === "legaldocument") {
            setlegalIdPreview(reader.result);
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
  const handlesendrequest = () => {
    //dispatch(sendrequest(formdata));
    console.log("the value of formdata is ", formdata);
    dispatch(sendupgraderequest(formdata));
  };

  return (
    <div>
      <Navbar />
      <div className="pt-16 h-full bg-gray-50 flex justify-center items-center">
        <div className="my-8 w-3/5 shadow-md rounded-lg bg-white  py-6 px-8 ">
          {" "}
          <div className="text-2xl mb-10 font-bold text-primary text-center">
            Upgrade your Account
          </div>
          <div className="my-4 space-y-4">
            <div className="flex space-x-4">
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Job
                </label>
                <select
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm shadow focus:outline-none focus:ring w-full 
                ease-linear transition-all duration-150"
                  value={roleType}
                  onChange={(e) => changer(e)}
                  name="roleType"
                >
                  <option value=""></option>
                  <option value="seller">Seller</option>
                  <option value="broker">Broker</option>
                </select>
              </div>
              {/* --------------------- */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="availablity location"
                  value={location}
                  onChange={(e) => changer(e)}
                  name="location"
                />
              </div>
            </div>
            {/* ---------------------flex form two----------------- */}
            <div className="flex space-x-4">
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Prefered Category
                </label>
                <select
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm shadow focus:outline-none focus:ring w-full 
                ease-linear transition-all duration-150"
                  value={category}
                  onChange={(e) => changer(e)}
                  name="category"
                >
                  <option value=""></option>

                  <option>Electronics</option>
                  <option>Cloth</option>
                  <option>Car</option>
                  <option>Home</option>
                  <option>Accessory</option>
                  <option>Shoes</option>
                  <option>Other</option>
                </select>
              </div>
              {/* --------------------- */}
              <div className="relative w-full mb-3">
                <label
                  className="block   text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Identification Card
                </label>
                <input
                  type="file"
                  className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  // value={legalId}
                  onChange={(e) => changer(e)}
                  name="legalId"
                />
              </div>
            </div>

            <div className="space-x-6 flex justify-center">
              <button
                className=" shadow-md bg-primary text-white font-bold px-10 py-1 rounded-xl"
                onClick={handlesendrequest}
              >
                Upgrade
              </button>
              <button className="shadow-md font-bold text-gray-800 px-10 py-1 hover:bg-gray-100 rounded-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
