import {
  GET_ITEM,GET_SELECTED_ITEM,GET_SEARCH_ITEM,GET_COMMENT
  } from "../Type/type";
  
  const initialstate = {
    loadingitem: true,
    items: [],
    selectedItem: [],
    searchItem: [],
    comment: []
  };
  
  export default function (state = initialstate, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ITEM:
        return {
          ...state,
          loadingitem: false,
          items: payload,
        };
      case GET_SELECTED_ITEM:
        return {
          ...state,
          loadingitem: false,
          selectedItem: payload
        };
        case GET_SEARCH_ITEM:
          return {
            ...state,
            loadingitem: false,
            searchItem: payload
          };
      case GET_COMMENT:
        return {
          ...state,
          loadingitem: false,
          comment: payload,
        };
    //   case LOGIN_FAIL:
    //     return {};
      default:
        return state;
    }
  }
  