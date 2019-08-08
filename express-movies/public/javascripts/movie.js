const uuid = require("uuid/v1");

class Movie {
  constructor(
    title,
    year,
    genre,
    posterUrl,
    description = "No Description Available"
  ) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.posterUrl = posterUrl;
    this.description = description;
    this.id = uuid();
  }
  update(propName, newValue) {
    this[propName] = newValue;
  }
}

module.exports = Movie;
