import React, { Component } from "react";
import styled from "styled-components";

const Foot = styled.div`
  display: grid;
  justify-content: center;
  width: 100vw;
  color: gray;
`;

export class Footer extends Component {
  static displayName = Footer.name;

  render() {
    return <Foot>This is the Footer</Foot>;
  }
}
