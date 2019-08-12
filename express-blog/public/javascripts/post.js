const uuid = require("uuid/v1");

class Post {
  constructor(body) {
    this.body = body;
    this.timestamp = new Date(Date.now()).toLocaleTimeString();
    this.id = uuid();
  }
  updateBody(newValue) {
    this.body = newValue;
  }
}
module.exports = Post;
