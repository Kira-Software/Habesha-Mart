import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../Type/type";

import axios from "axios";

export const postItem = (formdata) => async (dispatch) => {
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
  console.log("the comming datas are", formdata);

  const fd = new FormData();
  if (image1) {
    fd.append("itemImage", image1, image1.name);
  }
  if (image2) {
    fd.append("itemImage", image2, image2.name);
  }
  if (image3) {
    fd.append("itemImage", image3, image3.name);
  }
  if (image4) {
    fd.append("itemImage", image4, image4.name);
  }
  // fd.append("itemImage", image1, image1.name);
  // fd.append("itemImage", image2, image2.name);
  // fd.append("itemImage", image3, image3.name);
  // fd.append("itemImage", image4, image4.name);

  fd.set("itemname", itemname);
  fd.set("category", category);
  fd.set("itemstatus", itemstatus);
  fd.set("itemtype", itemtype);
  fd.set("description", description);
  fd.set("price", price);
  fd.set("quantity", quantity);
  fd.set("locationcity", locationcity);
  fd.set("locationsubcity", locationsubcity);

  console.log("the final form data value is ", fd);

  // const newuser = {
  //     email,
  //     username,
  //     password,
  //   };

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
    },
  };
  //   const body = JSON.stringify(newuser);
  //"proxy": "http://localhost:9000",
  try {
    const res = await axios.post("http://localhost:9000/api/item", fd, {
      withCredentials: true,
      config,
    });
    console.log(res);
    // dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data
    // })
  } catch (err) {
    console.error("the error is ", err.message);
  }
};