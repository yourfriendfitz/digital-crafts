var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  const movie1 = { title: "Superman" };
  const movie2 = { title: "Batman" };
  const movies = [movie1, movie2];
  res.json({
    movies
  });
});

router.post("/", (req, res) => {
  let movieTitle = req.body.movieTitle;
  let movieYear = req.body.movieYear;
  console.log(movieTitle);
  console.log(movieYear);
  res.send("Movie Saved!");
});

module.exports = router;
