import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styled from "styled-components";
import { Primary } from "./components/Palette";
import registerServiceWorker from "./registerServiceWorker";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const GrayDiv = styled.div`
  background-color: ${Primary};
`;

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <GrayDiv>
      <App />
    </GrayDiv>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
