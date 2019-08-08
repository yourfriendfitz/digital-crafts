const uuid = require("uuid/v1");

class User {
  constructor(name, pass) {
    this.name = name;
    this.password = pass;
    this.id = uuid();
    this.trips = [];
  }
}

module.exports = User;
