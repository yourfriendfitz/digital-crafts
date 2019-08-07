var express = require("express");
var router = express.Router();
const Trip = require("../public/javascripts/modules/trip");

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

router.post("/updateTrip", function(req, res) {
  const trip = trips[req.body.update];
  res.render("update", { trip: trip, trips: trips });
});

router.post("/updateTrip/:id", function(req, res) {
  const trip = trips[req.params.id];
  trip.updateDestination({
    city: req.body.city,
    state: req.body.state
  });
  trip.update("imageUrl", req.body.url);
  trip.update("startDate", req.body.begin);
  trip.update("returnDate", req.body.return);
  res.redirect("/");
});

router.post("/removeTrip", function(req, res) {
  const trip = trips[req.body.remove];
  trips.splice(trip, 1);
  res.redirect("/");
});

router.post("/search/city", function(req, res) {
  let tripArray = [];
  trips.forEach(trip => {
    if (trip.destination.city == req.body.city) {
      tripArray.push(trip);
    }
  });
  res.render("search", { trips: tripArray });
});

router.post("/search/state", function(req, res) {
  let tripArray = [];
  trips.forEach(trip => {
    if (trip.destination.state == req.body.state) {
      tripArray.push(trip);
    }
  });
  res.render("search", { trips: tripArray });
});

module.exports = router;
