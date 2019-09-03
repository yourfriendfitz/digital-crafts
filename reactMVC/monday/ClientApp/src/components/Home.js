import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  outline: none;
  display: grid;
  justify-content: center;
`;

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return <Content>
    <div>Welcome to The Book Barn Official Site</div>
    </Content>;
  }
}

