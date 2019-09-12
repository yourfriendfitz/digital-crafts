import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styled from "styled-components";
import * as Palette from "./components/Palette";
import registerServiceWorker, { forceSWupdate } from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./store/cart";
import authReducer from "./store/auth";

const rootReducer = combineReducers({
  authRed: authReducer,
  cartRed: cartReducer
});

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Primary},
    ${Palette.AltPrimary}
  );
  display: grid;
`;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Container className="overflow-auto p-0 m-0 vh-100">
      <Provider store={store}>
        <App />
      </Provider>
    </Container>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
forceSWupdate();
window.location.reload(true);
