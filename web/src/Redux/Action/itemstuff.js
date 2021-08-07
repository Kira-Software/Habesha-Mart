import { LOGIN_SUCCESS,LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from "../Type/type";

import axios from "axios"

export const postItem = (formdata) => async (dispatch) => {
    const {itemname,category,description,price, quantity,location,image} = formdata
    console.log("the comming datas are", formdata)
    // const newuser = {
    //     email,
    //     username,
    //     password,
    //   };
    
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };
    
    //   const body = JSON.stringify(newuser);

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

