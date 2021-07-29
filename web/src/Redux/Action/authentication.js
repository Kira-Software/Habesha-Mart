import { LOGIN_SUCCESS,LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from "../Type/type";

import axios from "axios"

export const register = (email,username,password) => async (dispatch) => {
    console.log("the comming datas are", email,username,password)
    const newuser = {
        email,
        username,
        password,
      };
    
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    
      const body = JSON.stringify(newuser);

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

}

export const login = (email,password) => async (dispatch) => {
    console.log("the comming datas are", email,password)
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

}