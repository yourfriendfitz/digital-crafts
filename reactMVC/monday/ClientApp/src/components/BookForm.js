import React from "react";
import styled from "styled-components";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Dropdown, DropdownToggle } from "reactstrap";
import { DropdownItem, DropdownMenu } from "reactstrap";
import * as Palette from "./Palette";
import { useState, useEffect } from "react";
import Book from "./Book";
import library from "./library.jpeg";

const FormTitle = styled(CardTitle)`
  margin: auto;
  color: ${Palette.Text};
`;

const StyledGroup = styled(FormGroup)`
  display: grid;
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  background-color: ${Palette.Primary};
`;

const StyledButton = styled(Button)`
  :focus {
    outline: none;
  }
  margin-top: 8px;
  background-color: ${Palette.AltPrimary};
`;

const StyledDropdownToggle = styled(DropdownToggle)`
  background-color: ${Palette.AltPrimary};
`;

const StyledInput = styled(Input)`
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${Palette.Primary};
`;

const Selected = styled.p`
  margin: auto;
  color: ${Palette.Alert};
  margin-bottom: 16px;
`;

const OuterContainer = styled(Container)`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 350px;
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

const BookForm = () => {
  const [submitted, setSubmitted] = useState(0);

  const handleSubmit = async () => {
    await Book.addBook(new Book(book.title, book.author, book.imageUrl));
    const newBook = { ...book };
    newBook.title = "";
    newBook.author = "";
    newBook.imageUrl = "";
    setBook({ ...newBook });
    setSubmitted(submitted + 1);
  };

  const handleDelete = async () => {
    const id = book.bookId;
    await Book.deleteBook(id);
    const newBook = { ...book };
    newBook.bookSelected = "";
    newBook.isBookSelected = false;
    setBook({ ...newBook });
    setSubmitted(submitted + 1);
  };

  const handleChange = e => {
    const newBook = { ...book };
    newBook[e.target.name] = e.target.value;
    setBook({ ...newBook });
  };

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = e => {
    const newBook = { ...book };
    [newBook.bookId, newBook.bookSelected] = [
      e.target.dataset.id,
      e.target.dataset.title
    ];
    newBook.isBookSelected = true;
    setBook({ ...newBook });
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [book, setBook] = useState({
    title: "",
    genre: "",
    author: "",
    year: 2019,
    imageUrl: "",
    bookSelected: "",
    isBookSelected: false,
    bookId: 0,
    books: []
  });

  useEffect(() => {
    fetch("https://boiling-escarpment-07603.herokuapp.com/books")
      .then(res => res.json())
      .then(data => setBook(book => ({ ...book, books: data })));
  }, [submitted]);

  const DropdownItems = () => {
    return (
      <StyledDropdownMenu className="text-center">
        {book.books.map((bookObj, i) => (
          <DropdownItem
            key={i}
            onClick={handleSelect}
            data-id={bookObj.id}
            data-title={bookObj.title}
          >
            {bookObj.title}
          </DropdownItem>
        ))}
      </StyledDropdownMenu>
    );
  };

  return (
    <OuterContainer className="col-sm">
      <ColoredCard>
        <CardImg top width="100%" src={library} alt="Card image cap" />
        <CardBody>
          <Form>
            <StyledGroup>
              <FormTitle>
                Add a Book{" "}
                <span role="img" aria-label="none">
                  📚
                </span>
              </FormTitle>
              <StyledInput
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={book.title}
              />
              <StyledInput
                type="text"
                name="author"
                placeholder="Author"
                onChange={handleChange}
                value={book.author}
              />
              <StyledInput
                type="url"
                name="imageUrl"
                placeholder="Image URL"
                onChange={handleChange}
                value={book.imageUrl}
              />
              <StyledButton block onClick={handleSubmit}>
                Submit
              </StyledButton>
            </StyledGroup>
          </Form>

          <Form>
            <StyledGroup>
              <FormTitle>
                Delete a Book{" "}
                <span role="img" aria-label="none">
                  📚
                </span>
              </FormTitle>
              <Dropdown
                className="text-center m-3"
                isOpen={dropdownOpen}
                toggle={toggle}
              >
                <StyledDropdownToggle caret>Dropdown</StyledDropdownToggle>
                <DropdownItems />
              </Dropdown>
              <Selected>{book.bookSelected}</Selected>
              <StyledButton block onClick={handleDelete}>
                Delete
              </StyledButton>
            </StyledGroup>
          </Form>
        </CardBody>
      </ColoredCard>
    </OuterContainer>
  );
};
export default BookForm;
