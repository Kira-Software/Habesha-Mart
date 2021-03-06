import axios from "axios";
import { GET_ACCOUNT, GET_ALL_PROFILE } from "../Type/type";

export const editProfile = (formdata) => async (dispatch) => {
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
  console.log("the comming datas are", formdata);

  const fd = new FormData();
  let temptype;

  if (legaldocument && profilepicture) {
    temptype = "both";
  } else if (legaldocument) {
    temptype = "legal";
  } else if (profilepicture) {
    temptype = "profile";
  } else {
    temptype = "";
  }

  if (legaldocument) {
    fd.append("profileImage", legaldocument, legaldocument.name);
  }
  if (profilepicture) {
    fd.append("profileImage", profilepicture, profilepicture.name);
  }

  if (temptype) {
    fd.set("type", temptype);
  }

  if (firstName) {
    fd.set("firstName", firstName);
  }
  if (lastName) {
    fd.set("lastName", lastName);
  }
  if (userName) {
    fd.set("userName", userName);
  }
  if (gender) {
    fd.set("gender", gender);
  }
  if (phoneNo) {
    fd.set("phoneNo", phoneNo);
  }
  if (telegramlink) {
    fd.set("telegramlink", telegramlink);
  }
  if (facebooklink) {
    fd.set("facebooklink", facebooklink);
  }

  if (instagramlink) {
    fd.set("instagramlink", instagramlink);
  }
  if (whatsapplink) {
    fd.set("whatsapplink", whatsapplink);
  }
  if (birthDate) {
    fd.set("birthDate", birthDate);
  }
  if (address) {
    fd.set("address", address);
  }

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
    const res = await axios.patch(
      "http://localhost:9000/api/user/account/updateProfile",
      fd,
      {
        withCredentials: true,
        //  config,
      }
    );
    console.log(res);
    // dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data
    // })
  } catch (err) {
    console.error("the error is ", err.message);
  }
};

export const getAccount = () => async (dispatch) => {
  console.log("i am in action get account function");
  // const getLoggedIn = useCallback(async () => {
  try {
    const res = await axios.get(
      "http://localhost:9000/api/user/account/getProfile",
      {
        withCredentials: true,
      }
    );

    console.log("the value or res is", res);
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    console.log("the problem error is ", err);
  }
};

export const getOwnerAccount = (id) => async (dispatch) => {
  console.log("i am in action get owner account function");
  // const getLoggedIn = useCallback(async () => {
  try {
    const res = await axios.get(
      `http://localhost:9000/api/user/account/getProfile/owner?userId=${id}`,
      {
        withCredentials: true,
      }
    );

    console.log("the value or res is", res);
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    console.log("the problem error is ", err);
  }
};

export const getAllProfile = () => async (dispatch) => {
  console.log("all profileeeee");

  const allprofile = await axios.get(
    `http://localhost:9000/api/user/account/getAllProfile`,
    { withCredentials: true }
  );

  console.log("the all users value is ", allprofile);

  dispatch({
    type: GET_ALL_PROFILE,
    payload: allprofile.data,
  });

};