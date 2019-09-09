const redux = require("redux");
const createStore = redux.createStore;

// reducer
// create initial state
const initialState = {
  counter: 0,
  logicalTime: 0
};
//  use initialState
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      state.counter++;
      state.logicalTime++;
      return { ...state, ...payload };

    case "DECREMENT":
      state.counter--;
      state.logicalTime++;
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

const decrementAction = payload => ({
  type: "DECREMENT",
  payload
});

// subscriptions

store.subscribe(() => console.log(store.getState()));
store.dispatch(incrementAction({ date: new Date().toDateString() }));
store.dispatch(decrementAction({ date: new Date().toDateString() }));
