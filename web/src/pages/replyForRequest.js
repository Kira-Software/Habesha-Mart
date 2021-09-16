import { useState } from "react";
import { useDispatch } from "react-redux";

import Navbar from "../components/Navbar";

export default function ReplyForRequest() {
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    replyname: "",
    replycategory: "",
    replydescription: "",
    replylocation: "",
    replyquantity: "",
    replyimage: "",
  });

  const {
    replyname,
    replycategory,
    replydescription,
    replylocation,
    replyquantity,
    replyimage,
  } = formdata;

  const [replyimagepreview, setreplyimagepreview] = useState(null);

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
          if (e.target.name === "replyimage") {
            setreplyimagepreview(reader.result);
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

  const handlesendreply = () => {
    console.log("the final value of send reply is ", formdata);
    //dispatch(sendrequest(formdata));
  };
  const mystyle = { height: 200, width: 300 };

  return (
    <div>
      <Navbar />
      <div className="flex pt-14 ">
        <div
          className="w-1/4 fixed bg-secondary flex items-center"
          style={{ height: "600px" }}
        >
          <img src="request.png" alt="sideImage" />
        </div>
        <div className="w-3/4 ml-72 overflow-auto flex justify-center py-10">
          <div style={{ width: "600px" }}>
            {" "}
            <div className="space-y-8">
              <div className="font-bold text-primary text-3xl text-center">
                Reply For Request
              </div>
              <div className="text-center text-sm font-tiny text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia et ad corrupti impedit quis omnis odio autem earum,
                totam aliquam odit fugiat consequuntur saepe. Exercitationem
                corrupti autem sapiente ea vitae.
              </div>
              <div className="space-y-4">
                {/* -------------one-------------- */}
                <div className="relative w-full mb-3">
                  <label
                    className="block   text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 z"
                    defaultValue="BMW car"
                    name="replyname"
                    onChange={(e) => changer(e)}
                    value={replyname}
                  />
                </div>

                {/* _______________two____________-- */}
                <div className="relative w-full mb-3">
                  <label
                    className="block   text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Item Category
                  </label>
                  <select
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600
                   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
                    ease-linear transition-all duration-150"
                    name="replycategory"
                    onChange={(e) => changer(e)}
                    value={replycategory}
                  >
                    <option value=""></option>

                    <option value="Electronics">Electronics</option>
                    <option value="Cloth">Cloth</option>
                    <option value="Car">Car</option>
                    <option value="Home">Home</option>
                    <option value="Accessory">Accessory</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* ______________________3______________ */}
                <div className="relative w-full mb-3">
                  <label
                    className="block   text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="description..."
                    name="replydescription"
                    onChange={(e) => changer(e)}
                    value={replydescription}
                  />
                </div>
                {/* _______________________________4______________ */}
                <div className="relative w-full mb-3">
                  <label
                    className="block   text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="jesse@example.com"
                    name="replyquantity"
                    onChange={(e) => changer(e)}
                    value={replyquantity}
                  />
                </div>
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
                    defaultValue="Addis Ababa, Ethiopia"
                    name="replylocation"
                    onChange={(e) => changer(e)}
                    value={replylocation}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block   text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full 
                    ease-linear transition-all duration-150"
                    name="replyimage"
                    onChange={(e) => changer(e)}
                    //value={replyimage}
                  />
                  <div
                    style={{ display: replyimagepreview ? "block" : "none" }}
                  >
                    <img
                      src={replyimagepreview}
                      alt="image2 placeholder"
                      style={mystyle}
                    />
                  </div>
                </div>
                {/* _____________________button___________-- */}
                <div className="space-x-4 flex justify-center">
                  <button
                    className=" shadow-md bg-primary text-white font-bold px-10 py-1 rounded-xl"
                    onClick={handlesendreply}
                  >
                    Reply
                  </button>
                  <button
                    className="shadow-md font-bold text-gray-800 px-10 py-1 
                  hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
