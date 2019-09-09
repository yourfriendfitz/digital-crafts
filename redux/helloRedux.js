const redux = require("redux");
const createStore = redux.createStore;

// reducer
// create initial state
const initialState = {
  counter: 0,
  isLoggedIn: false
};
//  use initialState
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      state.counter === 0
        ? state.counter++
        : (state.counter = state.counter * 2);
      return { ...state, ...payload };

    case "AUTH":
      state.isLoggedIn = !state.isLoggedIn;
      return { ...state, ...payload };

    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// dispatch actions
const incrementAction = payload => ({
  type: "INCREMENT",
  payload
});

const authAction = payload => ({
  type: "AUTH",
  payload
});

// subscriptions

store.subscribe(() => console.log(store.getState()));
setInterval(() => {
  store.dispatch(incrementAction({ date: new Date().toDateString() }));
}, 5000);
setInterval(() => {
  store.dispatch(authAction({ date: new Date().toDateString() }));
}, 10000);
