import { getRequest } from "../Action/request";
import {
  GET_ITEM,
  GET_SELECTED_ITEM,
  GET_SEARCH_ITEM,
  GET_COMMENT,
  GET_REQUEST,
  GET_SOCIALMEDIA,
  USER_SEARCH
} from "../Type/type";

const initialstate = {
  loadingitem: true,
  items: [],
  selectedItem: [],
  searchItem: [],
  comment: [],
  request: [],
  socialmedia: [],
  usersearch: []
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
        selectedItem: payload,
      };
    case GET_SEARCH_ITEM:
      return {
        ...state,
        loadingitem: false,
        searchItem: payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        loadingitem: false,
        comment: payload,
      };
    case GET_REQUEST:
      return {
        ...state,
        loadingitem: false,
        request: payload,
      };
    case GET_SOCIALMEDIA:
      return {
        ...state,
        loadingitem: false,
        socialmedia: payload,
      };
      case  USER_SEARCH :
        return {
          ...state,
          loadingitem: false,
          usersearch: payload,
        };
    default:
      return state;
  }
}
