import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOG_OUT,
} from "../Type/type";
import { getAccount } from "./profile";
import axios from "axios";
import { Redirect } from "react-router";
import setalert from "./alert";

export const register = (email, userName, password) => async (dispatch) => {
  console.log(
    "the comming datas in action register is",
    email,
    userName,
    password
  );
  const newuser = {
    email,
    userName,
    password,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newuser);

  try {
    axios
      .post("http://localhost:9000/api/auth/signup", newuser, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getLoggedIn());
      });

      dispatch(setalert("err.msg", "danger"));

  } catch (err) {
    console.log("the error is ", err);
   // dispatch(setalert("err.msg", "danger"));

  }

  //   try {
  //     const res = await axios.post("/api/register", body, config);
  //     console.log(res);
  //     dispatch({
  //         type: REGISTER_SUCCESS,
  //         payload: res.data
  //     })
  //   } catch (err) {
  //       console.error("the error is ",err.message)
  //   }
};

export const getLoggedIn = () => async (dispatch) => {
  console.log("i am in action get logged in function");
  // const getLoggedIn = useCallback(async () => {
  const loggedInStateRes = await axios.get(
    "http://localhost:9000/api/auth/isLoggedIn",
    { withCredentials: true }
  );

  dispatch({
    type: REGISTER_SUCCESS,
    payload: loggedInStateRes.data,
  });
  //dispatch(getAccount());

  // setLoggedInState({
  //   ...loggedInState,
  //   isLoading: false,
  //   isLoggedIn: loggedInStateRes.data.isLoggedIn,
  //   user: loggedInStateRes.data.user,
  // });
  // }, [loggedInState]);
};

export const login = (email, password) => async (dispatch) => {
  console.log("the comming datas are", email, password);
  const loguser = {
    email,
    password,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(loguser);
  try {
    axios
      .post("http://localhost:9000/api/auth/login", loguser, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getLoggedIn());
      });
  } catch (err) {
    console.log("the error is ", err);
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

export const Logout = () => async (dispatch) => {
  console.log("inside of the action logout");
  try {
    axios
      .delete("http://localhost:9000/api/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getLoggedIn());
      });
    // <Redirect to="/login" />
    dispatch({
      type: LOG_OUT,
      payload: null,
    });
  } catch (err) {
    console.log("the error while logging out is ", err);
  }
};
