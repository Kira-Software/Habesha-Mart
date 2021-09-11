import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ACCOUNT,
  LOG_OUT,
} from "../Type/type";

const initialstate = {
  loading: true,
  user: null,
  isAuthenticated: false,
  profile: [],
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: payload.isLoggedIn,
        loading: false,
        user: payload.user,
      };
    case REGISTER_FAIL:
      return {};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case GET_ACCOUNT:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    default:
      return state;
  }
}
