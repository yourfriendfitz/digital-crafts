class Movie {
  constructor(title, year, genre, posterUrl) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.posterUrl = posterUrl;
  }
  update(propName, newValue) {
    this[propName] = newValue;
  }
}

module.exports = Movie;
