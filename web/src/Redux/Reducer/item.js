import {
  GET_ITEM
  } from "../Type/type";
  
  const initialstate = {
    loading: true,
    items: [],
  };
  
  export default function (state = initialstate, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ITEM:
        return {
          ...state,
          loading: false,
          items: payload,
        };
    //   case REGISTER_FAIL:
    //     return {};
    //   case LOGIN_SUCCESS:
    //     return {
    //       ...state,
    //       isAuthenticated: true,
    //       loading: false,
    //       user: payload,
    //     };
    //   case LOGIN_FAIL:
    //     return {};
      default:
        return state;
    }
  }
  