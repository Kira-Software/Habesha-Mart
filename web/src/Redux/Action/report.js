import axios from "axios";

export const sendreport = (reportdata, id) => async (dispatch) => {
  console.log(
    "the coming formdata value is ",
    reportdata,
    "and the id is ",
    id
  );

  const { reporttype, reportcontent } = reportdata;
  const obj = {
    id,
    reporttype,
    reportcontent,
  };
  try {
    const res = await axios.post(
      "http://localhost:9000/api/report/sendReport",
      obj,
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
