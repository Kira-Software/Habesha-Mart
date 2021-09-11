import axios from "axios";

export const sendreplyrequest = (formdata) => async (dispatch) => {
  const {
    replyname,
    replycategory,
    replydescription,
    replyquantity,
    replylocation,
    replyimage,
  } = formdata;
  const fd = new FormData();
  if (replyimage) {
    fd.append("profileImage", replyimage, replyimage.name);
  }
  fd.set("replyname", replyname);
  fd.set("replycategory", replycategory);
  fd.set("replydescription", replydescription);
  fd.set("replyquantity", replyquantity);
  fd.set("replylocation", replylocation);

  try {
    const res = await axios.post(
      "http://localhost:9000/api/report/sendReport",
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

// export const getAccount = () => async (dispatch) => {
//   console.log("i am in action get account function");
//   // const getLoggedIn = useCallback(async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:9000/api/user/account/getProfile",
//       {
//         withCredentials: true,
//       }
//     );

//     console.log("the value or res is", res);
//     dispatch({
//       type: GET_ACCOUNT,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log("the problem error is ", err);
//   }
// };
