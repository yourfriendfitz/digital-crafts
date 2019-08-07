var express = require("express");
var router = express.Router();
const formidable = require("formidable");

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

const uploadFile = (req, callback) => {
  new formidable.IncomingForm()
    .parse(req)
    .on("fileBegin", (name, file) => {
      file.path = "./public/images/uploads/" + file.name;
    })
    .on("file", (name, file) => {
      callback(file.name);
    });
};

router.post("/upload", function(req, res, next) {
  uploadFile(req, photoUrl => {
    res.send("UPLOAD");
  });
  // res.render("movie", { movie: movie, movies: movies });
});

router.post("/:movieId", function(req, res, next) {
  const movie = movies[req.params.movieId];
  console.log(movies);
  res.render("movie", { movie: movie, movies: movies });
});

module.exports = router;
