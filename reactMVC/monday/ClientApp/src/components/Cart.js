import React from "react";
import styled from "styled-components";
import {
  Container as BootstrapContainer,
  Button as BootstrapButton
} from "reactstrap";
import * as Palette from "./Palette";
import library from "./library.jpeg";
import { connect } from "react-redux";

const Button = styled(BootstrapButton)`
  :focus {
    outline: none;
  }
  background-color: ${Palette.AltPrimary};
`;

const Container = styled(BootstrapContainer)`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 350px;
`;

const Img = styled.img`
  height: 250px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
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
      <Img src={library} alt="library" />
      <CartItems />
    </Container>
  );
};

const delAction = payload => ({
  type: "DEL",
  payload
});

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDel: id => dispatch(delAction(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
