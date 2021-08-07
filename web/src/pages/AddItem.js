import React ,{useState} from 'react'
import {postItem} from "../Redux/Action/itemstuff"
//import {useDispatch} from "react-redux"

export default function AddItem() {
//const dispatch = useDispatch()
  const [formdata, setformdata] = useState({
    itemname: "",
    category: "",
    description: "",
    price:"",
    quantity: "",
    location: "",
    image: ""
  });

  const {itemname,category,description,price,quantity,location,image} =formdata;

  const { email, password } = formdata;

  const changer = (e) => {
    //  console.log("the form value  is " + {...formdata})
    //console.log("the event . target value is that "+e.target.type)
    setformdata({
      ...formdata,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("the entered values are ",formdata)
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
            value= {itemname}
            onChange={e => changer(e)}
          />
          <div className="text-sm font-semibold mt-2">Category</div>
          <select className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
           name="category" value={category}   onChange={e => changer(e)}
>
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
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
            name = "description"
            value={description}
            onChange={e => changer(e)}

          ></textarea>

          <div className="flex justify-between mt-2 items-center">
            <div>
              <div className="text-sm font-semibold">Price</div>
              <input
                type="text"
                placeholder="price"
                className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
                name = "price"
                value={price}
                onChange={e => changer(e)}
              />
            </div>

            <div>
              <div className="text-sm mt-2 font-semibold">Quantiti</div>
              <input
                type="number"
                placeholder="Quantitiy"
                className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
                name = "quantity"
                value={quantity}
                onChange={e => changer(e)}
              />
            </div>
          </div>

          <div className="text-sm font-semibold mt-2">Location</div>
          <input
            type="text"
            placeholder="Location"
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name = "location"
            value={location}
            onChange={e => changer(e)}
          />
          <div className="text-sm font-semibold mt-2">Image</div>
          <input
            type="File"
            placeholder="name..."
            className=" px-2 py-1 rounded-md border shadow-sm w-full mt-2"
            name = "image"
            onChange={e => changer(e)}
          />
        </div>
        <button className="text-white  bg-gray-900 font-semibold w-full text-center mt-3 rounded-md px-2 py-2"
        onClick={handlesubmit}>
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
