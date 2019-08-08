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
  const movieToDel = movies.filter(movie => {
    if (movie.id === req.body.remove) {
      return movie;
    }
  });
  movies.splice(movieToDel, 1);
  res.redirect("/");
});

const uploadFile = (req, callback) => {
  new formidable.IncomingForm()
    .parse(req)
    .on("fileBegin", (name, file) => {
      file.path = "./public/images/uploads/" + file.name;
    })
    .on("file", (name, file) => {
      callback(`images/uploads/${file.name}`);
    });
};

router.post("/upload", function(req, res, next) {
  uploadFile(req, photoUrl => {
    res.render("uploadIndex", {
      title: "Express Movies",
      movies: movies,
      photoUrl: photoUrl
    });
  });
});

router.post("/:movieId", function(req, res, next) {
  console.log(req.params.movieId);
  const movie = movies.filter(movie => {
    if (movie.id === req.params.movieId) {
      return movie;
    }
  });
  res.render("movie", { movie: movie[0], movies: movies });
});

module.exports = router;
