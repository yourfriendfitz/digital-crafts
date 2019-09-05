export default class Book {
  constructor(
    title = "Catcher in the Rye",
    author = "J. D. Salinger",
    imageUrl = "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
  ) {
    this.title = title;
    this.author = author;
    this.imageUrl = imageUrl;
  }
  update(key, value) {
    this[key] = value;
  }
  static addBook = async Book => {
    try {
      console.log(JSON.stringify(Book));
      const req = await fetch(
        "https://boiling-escarpment-07603.herokuapp.com/books/add",
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(Book)
        }
      );
      return req.json();
    } catch (err) {
      console.log(err);
    }
  };

  static deleteBook = async id => {
    try {
      const req = await fetch(
        `https://boiling-escarpment-07603.herokuapp.com/books/delete/${id}`,
        {
          method: "POST"
        }
      );
      return req.json();
    } catch (err) {
      console.log(err);
    }
  };
}
