var express = require("express");
var router = express.Router();
const Trip = require("../public/javascripts/modules/trip");

let trips = [];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express Trips",
    trips: trips
  });
});

router.post("/addTrip", function(req, res) {
  const trip = new Trip(
    {
      city: req.body.city,
      state: req.body.state
    },
    req.body.url,
    req.body.begin,
    req.body.return
  );
  trips.push(trip);
  res.redirect("/");
});

module.exports = router;
