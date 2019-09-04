import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import { BooksContext } from "./BooksContext";

const List = styled.div`
  display: grid;
  justify-content: center;
`;
const Book = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  background-color: gray;
  border-radius: 8px;
  margin: 8px;
`;

const Image = styled.img`
  margin: auto;
  height: 240px;
  width: 160px;
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

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    )
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <BooksContext.Consumer>
      {({ favorites, onAddFavorite }) => (
        <Container>
          <List>
            {data.map((book, i) => (
              <Book key={i}>
                <h1>{book.title}</h1>
                <h5>{book.author}</h5>
                <h6>{book.year}</h6>
                <Image
                  src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}
                />
                <Link target="_blank" href={book.link}>
                  <Button>Wikipedia</Button>
                </Link>
              </Book>
            ))}
          </List>
        </Container>
      )}
    </BooksContext.Consumer>
  );
};
export default Books;
