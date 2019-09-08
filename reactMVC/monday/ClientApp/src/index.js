import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styled from "styled-components";
import * as Palette from "./components/Palette";
import registerServiceWorker from "./registerServiceWorker";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const Container = styled.div`
  background-color: ${Palette.Primary};
  display: grid;

`;

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Container className="overflow-auto p-0 m-0 vh-100">
      <App />
    </Container>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
