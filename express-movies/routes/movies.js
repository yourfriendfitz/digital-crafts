var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express Movies", movies: movies });
});

router.post("/", function(req, res, next) {
  const movie = new Movie(
    req.body.title,
    req.body.year,
    req.body.genre,
    req.body.url
  );
  movies.push(movie);
  res.redirect("/");
});

router.post("/delete-movie", function(req, res, next) {
  movies.splice(movies[req.body.remove], 1);
  res.redirect("/");
});

router.post("/:movieId", function(req, res, next) {
  const movie = movies[req.params.movieId];
  console.log(movies)
  res.render("movie", { movie: movie, movies: movies });
});

module.exports = router;
