var express = require("express");
var router = express.Router();
const Post = require("../public/javascripts/post");
const User = require("../public/javascripts/user");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
