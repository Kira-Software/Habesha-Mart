import axios from "axios";

export const sendupgraderequest = (formdata) => async (dispatch) => {
  console.log("the comming datas are", formdata);
  const { roleType, category, location, legalId } = formdata;
  const fd = new FormData();

  fd.append("legalIdImage", legalId, legalId.name);

  fd.set("roleType", roleType);

  fd.set("category", category);

  fd.set("location", location);
  //console.log("the value of fd is", fd);
  const config = {
    headers: {
      "Content-type": "multipart/formdata",
    },
  };

  // const body = JSON.stringify(loguser);
  try {
    const res = await axios.post(
      "http://localhost:9000/api/user/account/upgradeAccount",
      fd,
      {
        withCredentials: true,
        config,
      }
    );
    // .then((res) => {
    //   dispatch(getLoggedIn());
    // });
    console.log("the res value is ", res.data);
  } catch (err) {
    console.log("the error is ", err.message);
  }

  //   try {
  //     const res = await axios.post("/api/login", body, config);
  //     console.log(res);
  //     dispatch({
  //         type: LOGIN_SUCCESS,
  //         payload: res.data
  //     })
  //   } catch (err) {
  //       console.error("the error is ",err.message)
  //   }
};
