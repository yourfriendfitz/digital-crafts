import React from "react";
import styled from "styled-components";
import {
  Container as BootstrapContainer,
  Button as BootstrapButton
} from "reactstrap";
import * as Palette from "./Palette";
import library from "./library.jpeg";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Button = styled(BootstrapButton)`
  :focus {
    outline: none;
  }
  background-color: ${Palette.AltPrimary};
`;

const Container = styled(BootstrapContainer)`
`;

const Banner = styled(BootstrapContainer)`
  height: 100px;
  border-radius: 8px;
  background-image: url(${library});
  background-position: right;
  background-size: cover;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const BookImg = styled.img`
  height: inherit;
  width: 250px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Grid = styled.div`
  margin: auto;
  display: grid;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Primary},
    ${Palette.Secondary}
  );
  border-radius: 8px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  padding: 16px;
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
`;

const Cart = props => {
  const CartItems = () => {
    return props.cart.map((book, i) => (
      <Grid key={i} className="text-center">
        <BookImg src={book.imageUrl} alt="book" />
        <h6>{book.title}</h6>
        <Button block onClick={() => props.onDel(book.id)}>
          Remove
        </Button>
      </Grid>
    ));
  };

  return (
    <Container>
      <Banner className="container-fluid">
        <TitleInImageDiv>
          <TitleInImage>Your Cart</TitleInImage>
        </TitleInImageDiv>
      </Banner>
      <CartItems />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartRed.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDel: id => dispatch(actions.delAction(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
