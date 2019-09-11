import * as actionTypes from "./actionTypes";
const initialState = {
  isAuth: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH:
      state.isAuth = true;
      return { ...state, ...payload };

    case actionTypes.UNAUTH:
      state.isAuth = false;
      return { ...state, ...payload };

    default:
      return state;
  }
};
