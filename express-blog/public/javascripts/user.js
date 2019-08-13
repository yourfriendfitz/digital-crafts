const uuid = require("uuid/v1");

class User {
  constructor(name, pass) {
    this.name = name;
    this.password = pass;
    this.id = uuid();
  }
}

module.exports = User;
