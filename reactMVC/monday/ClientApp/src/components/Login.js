import React from "react";
import { Button as BootstrapButton, Input as BootstrapInput } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import { Container as BootstrapContainer } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import library from "./library.jpeg";

const Button = styled(BootstrapButton)`
  :focus {
    outline: none;
  }
  background-color: ${Palette.AltPrimary};
  color: ${Palette.Primary};
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  margin-bottom: 8px;
`;

const Content = styled(BootstrapContainer)`
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: url(${library});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  margin-top: 75px;
`;

const TitleInImage = styled.h3`
  color: ${Palette.Text};
  font-weight: bold;
  margin: 8px;
  text-align: center;
`;

const TitleInImageDiv = styled(BootstrapContainer)`
  background-color: rgba(224, 225, 221, 0.7);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: grid;
  justify-content: center;
`;

const Input = styled(BootstrapInput)`
  display: grid;
  background-color: rgba(224, 225, 221, 0.7);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Login = props => {
  const handleLogin = () => {
    props.onAuth();
    props.history.push("/");
  };
  return (
    <Content>
      <TitleInImageDiv>
        <TitleInImage>Welcome to The Book Barn Official Site</TitleInImage>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <Button onClick={() => handleLogin()}>Login</Button>
      </TitleInImageDiv>
    </Content>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authRed.isAuth
});

const mapDispatchToProps = dispatch => {
  return { onAuth: () => dispatch(actions.authAction()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
