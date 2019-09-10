import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import library from "./library.jpeg";

const Content = styled(Container)`
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: url(${library});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const TitleInImage = styled.h3`
  color: ${Palette.Text};
  font-weight: bold;
  margin: 8px;
  text-align: center;
`;

const TitleInImageDiv = styled(Container)`
  background-color: rgba(224, 225, 221, 0.7);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 8px;
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
