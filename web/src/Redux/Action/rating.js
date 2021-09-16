import axios from "axios";
import { GET_RATTING } from "../Type/type";

export const rateItem = (rateFor, ratingAmount) => async (dispatch) => {
  console.log("the coming data value is ", rateFor, ratingAmount);

  //  const { reporttype, reportcontent } = reportdata;
  const obj = {
    rateFor,
    ratingAmount,
  };
  try {
    const res = await axios.post(
      "http://localhost:9000/api/rate/rateItem",
      obj,
      {
        withCredentials: true,
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

export const getRatting = (id) => async (dispatch) => {
  console.log("i am in action get account function");
  // const getLoggedIn = useCallback(async () => {
  try {
    const res = await axios.get(
      `http://localhost:9000/api/rate/rateItem?rateFor=${id}`,
      {
        withCredentials: true,
      }
    );

    console.log("the value or Item rate  is", res);
    dispatch({
      type: GET_RATTING,
      payload: res.data,
    });
  } catch (err) {
    console.log("the problem error is ", err);
  }
};
