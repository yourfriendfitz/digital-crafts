var express = require("express");
var router = express.Router();

const users = [{ name: "John", age: 21 }, { name: "Mary", age: 25 }];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Hello Mustache", name: "Fitz" });
});

router.get("/animals", function(req, res, next) {
  const animals = ["dog", "cat", "monkey", "kangaroo"];
  res.render("animals", { animals: animals });
});

router.get("/users", function(req, res, next) {
  res.render("users", { users: users });
});

router.get("/addUser", function(req, res, next) {
  res.render("addUser");
});

router.post("/addUser", function(req, res, next) {
  const [name, age] = [req.body.name, req.body.age];
  users.push({ name: name, age: age });
  res.redirect("/users");
});

module.exports = router;
