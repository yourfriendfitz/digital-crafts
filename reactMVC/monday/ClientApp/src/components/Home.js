import React, { Component } from "react";
import styled from "styled-components";
import library from "./library.jpeg";

const Content = styled.div`
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: url(${library});
  background-size: cover;
  border-radius: 8px;
`;

const TitleInImage = styled.h3`
  color: white;
  margin: 8px;
  text-align: center;
`;

const TitleInImageDiv = styled.div`
  background-color: #08d9d6;
  border-radius: 8px;
  margin: 8px;
`;

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Content>
        <TitleInImageDiv>
          <TitleInImage>Welcome to The Book Barn Official Site</TitleInImage>
        </TitleInImageDiv>
      </Content>
    );
  }
}
