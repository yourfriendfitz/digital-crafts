import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import { Container as BootstrapContainer } from "reactstrap";
import { connect } from "react-redux";

const List = styled.div`
  display: grid;
  justify-content: center;
`;

const Link = styled.a`
  margin: 8px;
  outline: none;
`;

const StyledButton = styled(Button)`
  :focus {
    outline: none;
  }
  background-color: ${Palette.AltPrimary};
  color: ${Palette.Primary};
`;

const ColoredCard = styled(Card)`
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Secondary},
    ${Palette.AltPrimary}
  );
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const ColoredCardTitle = styled(CardTitle)`
  color: ${Palette.Text};
`;

const ColoredCardSubtitle = styled(CardSubtitle)`
  color: ${Palette.Text};
`;

const CardContainer = styled.div``;

const Container = styled(BootstrapContainer)`
  max-width: 350px;
`;

const Books = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://boiling-escarpment-07603.herokuapp.com/books")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <Container>
      <List>
        {data.map((book, i) => (
          <CardContainer key={i}>
            <ColoredCard className="m-3">
              <CardImg
                top
                width="100%"
                src={book.imageUrl}
                alt="Card image cap"
              />
              <CardBody className="text-center">
                <ColoredCardTitle>{book.title}</ColoredCardTitle>
                <ColoredCardSubtitle className="m-2">
                  {book.author}
                </ColoredCardSubtitle>
                <Link
                  target="_blank"
                  href={`https://en.wikipedia.org/wiki/${book.title}`}
                >
                  <StyledButton>Wikipedia</StyledButton>
                </Link>
                <StyledButton onClick={() => props.onAdd(book)}>
                  Add to Cart
                </StyledButton>
              </CardBody>
            </ColoredCard>
          </CardContainer>
        ))}
      </List>
    </Container>
  );
};

const addAction = payload => ({
  type: "ADD",
  payload
});

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (book) => dispatch(addAction(book))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Books);
