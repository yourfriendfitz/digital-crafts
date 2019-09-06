import React, { Component } from "react";
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
      bookSelected: "",
      isBookSelected: false,
      bookId: 0
    };
  }
  handleSubmit = () => {
    const book = this.state.book;
    Book.addBook(book);
    this.setState({ title: "", author: "", imageUrl: "" });
  };

  handleDelete = () => {
    const id = this.state.bookId;
    Book.deleteBook(id);
    this.setState({ bookSelected: "", isBookSelected: false });
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.setState({
      book: new Book(this.state.title, this.state.author, this.state.imageUrl)
    });
  };

  toggle = () => {
    this.setState(state => ({
      dropdownOpen: !state.dropdownOpen
    }));
  };

  handleSelect = e => {
    this.setState({
      bookId: e.target.dataset.id,
      bookSelected: e.target.dataset.title
    });
  };

  DropdownItems = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://boiling-escarpment-07603.herokuapp.com/books")
        .then(res => res.json())
        .then(data => setData(data));
    });
    return (
      <DropdownMenu className="text-center">
        {data.map((book, i) => (
          <DropdownItem
            key={i}
            onClick={this.handleSelect}
            data-id={book.id}
            data-title={book.title}
          >
            {book.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    );
  };

  render() {
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
                    onChange={this.handleChange}
                    value={this.state.title}
                  />
                  <Input
                    type="text"
                    name="author"
                    placeholder="Author"
                    onChange={this.handleChange}
                    value={this.state.author}
                  />
                  <Input
                    type="url"
                    name="imageUrl"
                    placeholder="Image URL"
                    onChange={this.handleChange}
                    value={this.state.imageUrl}
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
                    <this.DropdownItems />
                  </Dropdown>
                  <Selected>{this.state.bookSelected}</Selected>
                  <Button onClick={this.handleDelete}>Delete</Button>
                </Form>
              </FormContainer>
            </CardBody>
          </Card>
        </CardContainer>
      </OuterContainer>
    );
  }
}
