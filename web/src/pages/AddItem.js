import React, { useState, useEffect, useRef } from "react";
import { postItem } from "../Redux/Action/itemstuff";
import { getLoggedIn } from "../Redux/Action/authentication";
import { useDispatch } from "react-redux";

export default function AddItem() {
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    itemname: "",
    category: "",
    itemstatus: "",
    itemtype: "",
    description: "",
    price: "",
    quantity: "",
    locationcity: "",
    locationsubcity: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const [imgPreview1, setImgPreview1] = useState(null);
  const [imgPreview2, setImgPreview2] = useState(null);
  const [imgPreview3, setImgPreview3] = useState(null);
  const [imgPreview4, setImgPreview4] = useState(null);

  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [error3, setError3] = useState(null);
  const [error4, setError4] = useState(null);

  const {
    itemname,
    category,
    itemstatus,
    itemtype,
    description,
    price,
    quantity,
    locationcity,
    locationsubcity,
    image1,
    image2,
    image3,
    image4,
  } = formdata;

  let url;

  //const fileInputRef = useRef();
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
          if (e.target.name === "image1") {
            setImgPreview1(reader.result);
          }
          if (e.target.name === "image2") {
            setImgPreview2(reader.result);
          }
          if (e.target.name === "image3") {
            setImgPreview3(reader.result);
          }
          if (e.target.name === "image4") {
            setImgPreview4(reader.result);
          }
        };
        reader.readAsDataURL(selected);

        setformdata({
          ...formdata,
          [e.target.name]: e.target.files[0],
        });
      } else {
        if (e.target.name === "image1") {
          setError1(true);
        }
        if (e.target.name === "image2") {
          setError2(true);
        }
        if (e.target.name === "image3") {
          setError3(true);
        }
        if (e.target.name === "image4") {
          setError4(true);
        }
      }
      //   const fileReader = new FileReader()

      //   fileReader.onload = () => {
      //     url = fileReader.result;
      //     console.log("the value of url is",url)
      //   }
      //   fileReader.readAsDataURL(e.target.files[0])
    }
  };

  const removeImage = (e) => {
    if (e.target.name === "image1") {
      setImgPreview1(null);
      setformdata({
        ...formdata,
        [e.target.name]: null,
      });
    } else if (e.target.name === "image2") {
      setImgPreview2(null);
      setformdata({
        ...formdata,
        [e.target.name]: null,
      });
    }
    if (e.target.name === "image3") {
      setImgPreview3(null);
      setformdata({
        ...formdata,
        [e.target.name]: null,
      });
    }
    if (e.target.name === "image4") {
      setImgPreview4(null);
      setformdata({
        ...formdata,
        [e.target.name]: null,
      });
    }
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("the entered values are ", formdata);
    dispatch(postItem(formdata));

    //  dispatch(postItem(formdata))
    // axios
    //   .post("http://localhost:9000/api/auth/login", formdata, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log("someti", res);
    //     getLoggedIn();
    //   });
    // login(Id, Temppass, Newpass);
  };

  useEffect(() => {
    dispatch(getLoggedIn());
  }, []);

  const Button = (props) => {
    return (
      <button
        className="text-white  bg-red-900 font-semibold w-1/2 text-center mt-3 ml-8 rounded-md px-2 py-2"
        //name="image1"
        onClick={removeImage}
        name={props.name}
      >
        Remove Image
      </button>
    );
  };

  const mystyle = { height: 200, width: 300 };
  return (
    <div className="flex h-screen px-4 py-4">
      <div
        className="  w-1/2  mx-4 rounded-l-2xl  bg-gray-200 "
        // style={{
        //   backgroundImage: "url(bg-1.png)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "top right ",
        // }}
      >
        <img src="logo.png" alt="logo" className="h-14" />
        <div className="h-4/6 flex items-center ">
          {" "}
          <div className="mx-20">
            <h2 className="text-2xl font-bold text-gray-700">
              Sell your Items at H-mart
            </h2>
            <div className="mt-2 font-semibold text-sm text-gray-500">
              This would target any elements that are direct descendants of
              elements with the product-section class name, but without caring
              about the type or attributes of the descendants of
              product-section. This technique is useful when you want to target
              these elements without increasing specificity—we will address
              specificity further ahead in this chapter.
            </div>
          </div>
        </div>
      </div>
      <div className="  w-1/2 px-32 py-6">
        <div className="text-xl font-bold text-gray-900">Item Detail</div>
        <div className="text-sm font-semibold text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur elit. adipiscing Senectus
          viverra evariu.
        </div>
        <div className="mt-8   ">
          <div className="text-sm font-semibold mt-2">Name</div>
          <input
            type="text"
            placeholder="name..."
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="itemname"
            value={itemname}
            onChange={(e) => changer(e)}
          />
          <div className="text-sm font-semibold mt-2">Category</div>
          <select
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="category"
            value={category}
            onChange={(e) => changer(e)}
          >
            <option aria-label="None" value="" />
            <option value="Accessory">Accessory</option>
            <option value="Car">Car</option>
            <option value="Cloth">Cloth</option>
            <option value="Electronics">Electronics</option>
            <option value="House">House</option>
            <option value="Shoes">Shoes</option>
            <option value="Other">Other</option>
          </select>
          <div className="text-sm font-semibold mt-2">Item Status</div>
          <select
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="itemstatus"
            value={itemstatus}
            onChange={(e) => changer(e)}
          >
            <option aria-label="None" value="" />
            <option value="New">New</option>
            <option value="Slightly Used">Slightly Used</option>
            <option value="Used">Used</option>
          </select>
          <div className="text-sm font-semibold mt-2">Item Type</div>
          <select
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="itemtype"
            value={itemtype}
            onChange={(e) => changer(e)}
          >
            <option aria-label="None" value="" />
            <option value="For Sell">For Sell</option>
            <option value="For Rent">For Rent</option>
          </select>
          {/* <input
            type="text"
            placeholder="name..."
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
          /> */}
          <div className="text-sm font-semibold mt-2">Description</div>
          <textarea
            rows={2}
            className="px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="description"
            value={description}
            onChange={(e) => changer(e)}
          ></textarea>
          <div className="flex justify-between mt-2 items-center">
            <div>
              <div className="text-sm font-semibold">Price </div>
              <input
                type="text"
                placeholder="price in Birr"
                className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
                name="price"
                value={price}
                onChange={(e) => changer(e)}
              />
            </div>

            <div>
              <div className="text-sm mt-2 font-semibold">Quantiti</div>
              <input
                type="number"
                placeholder="Quantitiy"
                className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
                name="quantity"
                value={quantity}
                onChange={(e) => changer(e)}
              />
            </div>
          </div>
          <div className="text-sm font-semibold mt-2">Location</div>
          <input
            type="text"
            placeholder="City Location"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="locationcity"
            value={locationcity}
            onChange={(e) => changer(e)}
          />
          <input
            type="text"
            placeholder="Sub-city Location"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="locationsubcity"
            value={locationsubcity}
            onChange={(e) => changer(e)}
          />
          <div className="text-sm font-semibold mt-2">Image</div>
          <input
            type="File"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="image1"
            onChange={(e) => changer(e)}
            accept="image/*"
          />
          <div>
            <div>
              {error1 && (
                <p style={{ color: "red" }}>
                  Unsupported Format (use png,jpg or jpeg images instead)
                </p>
              )}
            </div>
            <div style={{ display: imgPreview1 ? "block" : "none" }}>
              <img src={imgPreview1} style={mystyle} />
              <Button name="image1" />
            </div>
          </div>
          <input
            type="File"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="image2"
            onChange={(e) => changer(e)}
            accept="image/*"
          />{" "}
          <div>
            {error2 && (
              <p style={{ color: "red" }}>
                Unsupported Format (use png,jpg or jpeg images instead)
              </p>
            )}
          </div>
          <div>
            {/* {error && <p>File Not Supported</p>} */}
            <div style={{ display: imgPreview2 ? "block" : "none" }}>
              <img src={imgPreview2} alt="image2 placeholder" style={mystyle} />
              <Button name="image2" />
            </div>
          </div>
          <input
            type="File"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="image3"
            onChange={(e) => changer(e)}
            accept="image/*"
          />{" "}
          <div>
            {error3 && (
              <p style={{ color: "red" }}>
                Unsupported Format (use png,jpg or jpeg images instead)
              </p>
            )}
          </div>
          <div>
            {/* {error && <p>File Not Supported</p>} */}
            <div style={{ display: imgPreview3 ? "block" : "none" }}>
              <img src={imgPreview3} alt="image2 placeholder" style={mystyle} />
              <Button name="image3" />
            </div>
          </div>
          <input
            type="File"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name="image4"
            onChange={(e) => changer(e)}
            accept="image/*"
          />
        </div>

        <div>
          {error4 && (
            <p style={{ color: "red" }}>
              Unsupported Format (use png,jpg or jpeg images instead)
            </p>
          )}
        </div>
        <div>
          {/* {error && <p>File Not Supported</p>} */}
          <div style={{ display: imgPreview4 ? "block" : "none" }}>
            <img src={imgPreview4} alt="image2 placeholder" style={mystyle} />
            <Button name="image4" />
          </div>
        </div>
        <button
          className="text-white  bg-gray-900 font-semibold w-full text-center mt-3 rounded-md px-2 py-2"
          onClick={handlesubmit}
        >
          Submit
        </button>
        {/* category
              description
              image
              location
              Name
              price
              quantity */}
      </div>
    </div>
  );
}
