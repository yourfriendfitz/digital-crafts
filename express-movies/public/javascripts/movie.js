class Movie {
  constructor(title, description, genre, posterUrl) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.posterUrl = posterUrl;
  }
  update(propName, newValue) {
    this[propName] = newValue;
  }
}
