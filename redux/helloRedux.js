const redux = require("redux");
const createStore = redux.createStore;

// reducer
    // create initial state
const initialState = {
  counter: 0
};
    //  use initialState
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, ...payload };

    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// dispatch actions
const actionName = (payload) => ({
    type: type,
    payload
})


// subscriptions

console.log("Hello Redux");
