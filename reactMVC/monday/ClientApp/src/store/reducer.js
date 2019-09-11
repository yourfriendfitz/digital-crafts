import * as actionTypes from "./actionTypes";
const initialState = {
  isAuth: false,
  cart: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      state.cart = [...state.cart, payload];
      return { ...state, ...payload };

    case actionTypes.DEL:
      const newCart = state.cart.filter(item => item.id !== payload);
      state.cart = [...newCart];
      return { ...state, ...payload };

    default:
      return state;
  }
};
