import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Books from "./components/Books";
import Cart from "./components/Cart"
import BookForm from "./components/BookForm";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/add" component={BookForm} />
        <Route exact path="/cart" component={Cart} />
      </Layout>
    );
  }
}
