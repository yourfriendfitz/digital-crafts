import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Card, CardImg, CardBody } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
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

const BooksDropdownItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://boiling-escarpment-07603.herokuapp.com/books")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <DropdownMenu>
    {data.map((book, i) => (
      <DropdownItem onClick={this.handleSelect} value={book.id}>{book.title}</DropdownItem>
      ))}
  </DropdownMenu>

  );
};

export default class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: new Book(),
      title: "",
      genre: "",
      author: "",
      year: 2019,
      imageUrl: "",
      dropdownOpen: false,
      bookSelected: false,
      bookId: 0
    };
  }
  handleSubmit = () => {
    const book = this.state.book;
    console.log(book);
    console.log(this.state);
    Book.addBook(book);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      book: new Book(this.state.title, this.state.author, this.state.imageUrl)
    });
  };

  handleSelect = e => {
    Book.deleteBook
  }

  toggle = () => {
    this.setState(state => ({
      dropdownOpen: !state.dropdownOpen
    }));
  };

  render() {
    return (
      <div>
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
                  onChange={this.handleChange}
                />
                <Input
                  type="text"
                  name="author"
                  placeholder="Author"
                  onChange={this.handleChange}
                />
                <Input
                  type="url"
                  name="imageUrl"
                  placeholder="Image URL"
                  onChange={this.handleChange}
                />
                <Button onClick={this.handleSubmit}>Submit</Button>
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
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <BooksDropdownItems/>
                </Dropdown>
                <Button onClick={this.handleSubmit}>Delete</Button>
              </Form>
            </FormContainer>
          </CardBody>
        </Card>
      </div>
    );
  }
}
