import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  outline: none;
`;

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return <Content>Hello World</Content>;
  }
}
