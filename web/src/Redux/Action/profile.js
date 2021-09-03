import axios from "axios";

export const editProfile = (formdata) => async (dispatch) => {
  //   const {
  //     firstname,
  //     lastname,
  //     sex,
  //     phonenumber,
  //     birthdate,
  //     address,
  //     legaldocument,
  //   } = formdata;
  console.log("in the action the formdata values are ", formdata);

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
    },
  };

  try {
    const res = await axios.patch(
      "http://localhost:9000/api/user/account/updateProfile",
      formdata,
      {
        withCredentials: true,
        config,
      }
    );
    console.log(res.data);
    // dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data
    // })
  } catch (err) {
    console.error(
      "something has happened while editing profile .,,,,the error is ",
      err.message
    );
  }
};
