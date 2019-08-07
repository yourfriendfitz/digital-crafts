var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/movies", function(req, res, next) {
  res.json(movies);
});

module.exports = router;
