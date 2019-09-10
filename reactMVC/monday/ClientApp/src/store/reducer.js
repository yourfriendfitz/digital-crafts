const initialState = {
  isAuth: false,
  cart: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      state.cart = [...state.cart, payload];
      return { ...state, ...payload };

    case "DEL":
      const newCart = state.cart.filter(item => item.id !== payload);
      state.cart = [...newCart];
      return { ...state, ...payload };

    default:
      return state;
  }
};
