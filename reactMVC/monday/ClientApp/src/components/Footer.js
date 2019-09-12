import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import text from "./sample.txt";

const Foot = styled(Container)`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: gray;
  opacity: 0;
`;

export class Footer extends Component {
  static displayName = Footer.name;

  render() {
    return <Foot>{text}</Foot>;
  }
}
