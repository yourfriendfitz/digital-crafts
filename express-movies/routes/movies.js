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
  movies.splice(movies[req.body.remove]);
  res.redirect("/");
});

router.get("/movies/:movieId", function(req, res, next) {
  const movie = movies[req.params.movieId];
  res.render("movie", { movie: movie });
});

module.exports = router;
