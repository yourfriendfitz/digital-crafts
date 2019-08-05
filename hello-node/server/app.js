var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var jsonRouter = require("./routes/json");
var moviesRouter = require("./routes/movies");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

let movies = [];

app.post("/movies", (req, res) => {
  let movieTitle = req.body.movieTitle;
  let movieYear = req.body.movieYear;
  console.log(movieTitle);
  console.log(movieYear);
  res.send("Movie Saved!");
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/json", jsonRouter);
app.use("/movies", moviesRouter);
app.use("/movies/:genre/year/:year", function(req, res, next) {
  let genre = req.params.genre;
  let year = req.params.year;
  res.send(`The genre is ${genre} and the year is ${year}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
