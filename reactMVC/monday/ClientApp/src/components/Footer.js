import React, { Component } from "react";
import { Container } from "reactstrap"
import styled from "styled-components";

const Foot = styled(Container)`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: gray;
`;

export class Footer extends Component {
  static displayName = Footer.name;

  render() {
    return <Foot>This is the Footer</Foot>;
  }
}
