import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ITEM,
  GET_SELECTED_ITEM,
  GET_SEARCH_ITEM,
  GET_SOCIALMEDIA
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

export const getItem = () => async (dispatch) => {
  console.log("i am in action find item function");
  // const getLoggedIn = useCallback(async () => {
  const res = await axios.get("http://localhost:9000/api/item", {
    withCredentials: true,
  });

  console.log("inside the getItem the res.data value is ", res.data);

  dispatch({
    type: GET_ITEM,
    payload: res.data,
  });
};

export const getIndividualItem = (id) => async (dispatch) => {
  console.log("i am in get individual function");
  // const getLoggedIn = useCallback(async () => {
  const res = await axios.get(`http://localhost:9000/api/item?postedBy=${id}`, {
    withCredentials: true,
  });

  console.log("inside the getindividual item the res.data value is ", res.data);

  dispatch({
    type: GET_ITEM,
    payload: res.data,
  });
};

export const getSelectedItem = (id) => async (dispatch) => {
  // console.log("id is ",id)
  const res = await axios.get(`http://localhost:9000/api/item?_id=${id}`, {
    withCredentials: true,
  });
  dispatch({
    type: GET_SELECTED_ITEM,
    payload: res.data,
  });

  dispatch({
    type: GET_SOCIALMEDIA,
    payload: res.socialMedia,
  });
};

export const getSearchItem = (category) => async (dispatch) => {
  // console.log("i am in get individual function");
  // const getLoggedIn = useCallback(async () => {
  const res = await axios.get(
    `http://localhost:9000/api/item?category=${category}`,
    {
      withCredentials: true,
    }
  );

  // console.log("inside the getindividual item the res.data value is ", res.data);

  dispatch({
    type: GET_SEARCH_ITEM,
    payload: res.data,
  });
};

export const getMainSearchItems = (category) => async (dispatch) => {
  // console.log("i am in get individual function");
  // const getLoggedIn = useCallback(async () => {
  const res = await axios.get(
    `http://localhost:9000/api/item?category=${category}`,
    {
      withCredentials: true,
    }
  );

  // console.log("inside the getindividual item the res.data value is ", res.data);

  dispatch({
    type: GET_SEARCH_ITEM,
    payload: res.data,
  });
};