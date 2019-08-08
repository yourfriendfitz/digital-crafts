var express = require("express");
var router = express.Router();
const Trip = require("../public/javascripts/modules/trip");
const User = require("../public/javascripts/modules/user");

router.get("/user", function(req, res, next) {
  res.render("register", {
    title: "Express Trips"
  });
});

router.post("/user", function(req, res) {
  const user = new User(req.body.name, req.body.password);
  users.push(user);
  res.redirect("/login");
});

router.get("/login", function(req, res, next) {
  res.render("login", {
    title: "Express Trips"
  });
});

router.post("/login", function(req, res) {
  const authUser = users.find(user => {
    return user.name === req.body.name && user.password === req.body.password;
  });
  if (authUser) {
    req.session.user = authUser;
  } else {
    res.redirect("/login");
  }
  res.redirect("/");
});

/* GET home page. */
router.get("/", function(req, res, next) {
  if (req.session) {
    if (req.session.user) {
      res.render("index", {
        title: "Express Trips",
        trips: trips
      });
    } else {
      res.redirect("/login");
    }
  }
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
  if (req.session) {
    req.session.trip = trip;
  }
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
