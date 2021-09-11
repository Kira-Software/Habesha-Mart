import axios from "axios";
import { GET_COMMENT } from "../Type/type";
export const sendcomment = (commentBody, itemId) => async (dispatch) => {
  console.log(
    "the coming formdata value is ",
    commentBody,
    "and the id is ",
    itemId
  );
  const obj = {
    commentBody,
    itemId,
  };
  try {
    const res = await axios.post(
      "http://localhost:9000/api/comment/commentOnItem",
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

export const getComment = (itemId) => async (dispatch) => {
  console.log("i am in action get comment function");
  // const getLoggedIn = useCallback(async () => {
  try {
    const res = await axios.get(
      `http://localhost:9000/api/comment/commentOnItem?itemId=${itemId}`,
      {
        withCredentials: true,
      }
    );

    console.log("the value or res is", res);
    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    console.log("the problem error is ", err);
  }
};
