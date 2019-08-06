var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Hello Mustache", name: "Fitz" });
});

router.get("/animals", function(req, res, next) {
  const animals = ["dog", "cat", "monkey", "kangaroo"];
  res.render("animals", { animals: animals });
});

router.get("/users", function(req, res, next) {
  const users = [{ name: "John", age: 21 }, { name: "Mary", age: 25 }];
  res.render("users", { users: users });
});

module.exports = router;
