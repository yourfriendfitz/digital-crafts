import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Login from "./components/Login";
import requireAuth from "./components/requireAuth";
import Books from "./components/Books";
import Cart from "./components/Cart";
import BookForm from "./components/BookForm";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={requireAuth(Home)} />
        <Route exact path="/books" component={requireAuth(Books)} />
        <Route exact path="/books/add" component={requireAuth(BookForm)} />
        <Route exact path="/cart" component={requireAuth(Cart)} />
      </Layout>
    );
  }
}
