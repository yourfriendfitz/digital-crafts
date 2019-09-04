import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Books from "./components/Books";
import { BooksStore } from "./components/BooksContext";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <BooksStore>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
        </BooksStore>
      </Layout>
    );
  }
}
