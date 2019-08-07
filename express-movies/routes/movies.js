var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express Movies", movies: movies });
});

router.post("/addMovie", function(req, res, next) {
  const movie = new Movie(
    req.body.title,
    req.body.year,
    req.body.genre,
    req.body.url
  );
  movies.push(movie);
  res.redirect("/");
});

module.exports = router;
