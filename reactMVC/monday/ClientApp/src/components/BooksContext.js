import React, { Component } from "react";

const BooksContext = React.createContext();

class BooksStore extends Component {
  state = {
    favorites: []
  };
  handleAddFavorite = book => {
    this.setState(state => ({ favorites: [...this.state.favorites, book] }));
  };
  render() {
    return (
      <BooksContext.Provider
        value={{
          favorites: this.state.favorites,
          onAddFavorite: this.handleAddFavorite
        }}
      >
        {this.props.children}
      </BooksContext.Provider>
    );
  }
}
export { BooksContext, BooksStore };
