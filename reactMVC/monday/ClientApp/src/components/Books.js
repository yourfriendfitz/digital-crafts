import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette"
import { Container as BootstrapContainer } from "reactstrap";

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
background-color: ${Palette.Secondary}
`

const ColoredCardTitle = styled(CardTitle)`
color: ${Palette.Text}
`

const ColoredCardSubtitle = styled(CardSubtitle)`
color: ${Palette.Text}
`

const CardContainer = styled.div`
`;

const Container = styled(BootstrapContainer)`
max-width: 350px;
`

const Books = () => {
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
                <ColoredCardSubtitle className="m-2">{book.author}</ColoredCardSubtitle>
                <Link
                  target="_blank"
                  href={`https://en.wikipedia.org/wiki/${book.title}`}
                >
                  <StyledButton>Wikipedia</StyledButton>
                </Link>
              </CardBody>
            </ColoredCard>
          </CardContainer>
        ))}
      </List>
    </Container>
  );
};
export default Books;
