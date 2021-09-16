import axios from "axios";
import { GET_REQUEST } from "../Type/type";

export const sendrequest = (formdata) => async (dispatch) => {
  console.log("the coming formdata value is ", formdata);

  try {
    const res = await axios.post(
      "http://localhost:9000/api/request/sendItemRequest",
      formdata,
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

export const getRequest = () => async (dispatch) => {
  console.log("i am in action get account function");
  // const getLoggedIn = useCallback(async () => {
  try {
    const res = await axios.get(
      "http://localhost:9000/api/request/getItemRequest",
      {
        withCredentials: true,
      }
    );

    console.log("the value of getting request res is", res);
    dispatch({
      type: GET_REQUEST,
      payload: res.data,
    });
  } catch (err) {
    console.log("the problem error is ", err);
  }
};
