import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardBody } from "reactstrap";
import { Dropdown, DropdownToggle } from "reactstrap";
import { DropdownItem, DropdownMenu } from "reactstrap";
import { useState, useEffect } from "react";
import Book from "./Book";
import library from "./library.jpeg";

const FormTitle = styled.h1`
  margin: auto;
`;

const Form = styled.div`
  display: grid;
  margin: 16px;
  width: 300px;
`;

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
`;

const Input = styled.input`
  display: grid;
`;

const Button = styled.button`
  display: grid;
`;

const Selected = styled.p`
  margin: auto;
  color: red;
  margin-bottom: 16px;
`;

const CardContainer = styled.div`
  max-width: 320px;
`;
const OuterContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const BookForm = () => {
  const [book, setBook] = useState({
    title: "",
    genre: "",
    author: "",
    year: 2019,
    imageUrl: "",
    bookSelected: "",
    isBookSelected: false,
    bookId: 0
  });

  const [bookToAdd, setBookToAdd] = useState();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = () => {
    const book = bookToAdd;
    Book.addBook(book);
    setBook({ title: "", author: "", imageUrl: "" });
  };

  const handleDelete = () => {
    const id = book.bookId;
    Book.deleteBook(id);
    setBook({ bookSelected: "", isBookSelected: false });
  };

  const handleChange = async e => {
    const newBook = { ...book };
    newBook[e.target.name] = e.target.value;
    await setBook({ ...newBook });
    setBookToAdd(new Book(book.title, book.author, book.imageUrl));
  };

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = e => {
    setBook({
      bookId: e.target.dataset.id,
      bookSelected: e.target.dataset.title
    });
  };

  const DropdownItems = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://boiling-escarpment-07603.herokuapp.com/books")
        .then(res => res.json())
        .then(data => setData(data));
    });
    return (
      <DropdownMenu className="text-center">
        {data.map((bookObj, i) => (
          <DropdownItem
            key={i}
            onClick={handleSelect}
            data-id={bookObj.id}
            data-title={bookObj.title}
          >
            {bookObj.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    );
  };

  return (
    <OuterContainer>
      <CardContainer>
        <Card>
          <CardImg top width="100%" src={library} alt="Card image cap" />
          <CardBody>
            <FormContainer>
              <Form>
                <FormTitle>
                  Add a Book{" "}
                  <span role="img" aria-label="none">
                    📚
                  </span>
                </FormTitle>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  value={book.title}
                />
                <Input
                  type="text"
                  name="author"
                  placeholder="Author"
                  onChange={handleChange}
                  value={book.author}
                />
                <Input
                  type="url"
                  name="imageUrl"
                  placeholder="Image URL"
                  onChange={handleChange}
                  value={book.imageUrl}
                />
                <Button onClick={handleSubmit}>Submit</Button>
              </Form>

              <Form>
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
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownItems />
                </Dropdown>
                <Selected>{book.bookSelected}</Selected>
                <Button onClick={handleDelete}>Delete</Button>
              </Form>
            </FormContainer>
          </CardBody>
        </Card>
      </CardContainer>
    </OuterContainer>
  );
};
export default BookForm;
