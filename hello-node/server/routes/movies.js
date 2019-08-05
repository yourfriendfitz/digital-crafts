var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const movie1 = {title: "Superman"}
    const movie2 = {title: "Batman"}
    const movies = [movie1, movie2]
  res.json({
      movies
  });
});

module.exports = router;