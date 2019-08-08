class User {
  constructor(name, pass) {
    this.name = name;
    this.password = pass;
    this.trips = [];
  }
}

module.exports = User;
