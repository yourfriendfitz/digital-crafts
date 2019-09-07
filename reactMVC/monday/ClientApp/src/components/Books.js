import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import styled from "styled-components";
import { Container } from "reactstrap";

const List = styled.div`
  display: grid;
  justify-content: center;
`;

const Link = styled.a`
  margin: 8px;
  outline: none;
`;

const Button = styled.button`
  border-radius: 8px;
  :focus {
    outline: none;
  }
`;

const CardContainer = styled.div`
  max-width: 320px;
`;

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
            <Card className="m-3">
              <CardImg
                top
                width="100%"
                src={book.imageUrl}
                alt="Card image cap"
              />
              <CardBody className="text-center">
                <CardTitle>{book.title}</CardTitle>
                <CardSubtitle className="m-2">{book.author}</CardSubtitle>
                <Link
                  target="_blank"
                  href={`https://en.wikipedia.org/wiki/${book.title}`}
                >
                  <Button>Wikipedia</Button>
                </Link>
              </CardBody>
            </Card>
          </CardContainer>
        ))}
      </List>
    </Container>
  );
};
export default Books;
