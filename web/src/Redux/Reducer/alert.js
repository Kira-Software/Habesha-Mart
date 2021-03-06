import { SET_ALERT, REMOVE_ALERT } from "../Type/type";

const initialstate = [];

export default (state = initialstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
};
