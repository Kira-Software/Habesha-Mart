import {
  GET_ITEM,GET_SELECTED_ITEM,GET_SEARCH_ITEM
  } from "../Type/type";
  
  const initialstate = {
    loading: true,
    items: [],
    selectedItem: [],
    searchItem: []
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
      case GET_SELECTED_ITEM:
        return {
          ...state,
          selectedItem: payload
        };
        case GET_SEARCH_ITEM:
          return {
            ...state,
            searchItem: payload
          };
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
  