var express = require("express");
var router = express.Router();
const Trip = require("../public/javascripts/modules/trip");
const User = require("../public/javascripts/modules/user");

let currentUser;

const authenticate = (req, res, next) => {
  if (req.session) {
    if (req.session.user) {
      next();
    } else {
      res.redirect("/login");
    }
  }
};

const logCb = async (req, res, next) => {
  console.log("Second MiddleWare");
  next();
};

router.get("/user", function(req, res, next) {
  res.render("register", {
    title: "Express Trips"
  });
});

router.post("/user", function(req, res) {
  const user = new User(req.body.name, req.body.password);
  users.push(user);
  console.log(users);
  res.redirect("/login");
});

router.get("/login", function(req, res, next) {
  res.render("login", {
    title: "Express Trips"
  });
});

router.post("/login", function(req, res) {
  currentUser = users.find(user => {
    return user.name === req.body.name && user.password === req.body.password;
  });
  if (currentUser) {
    req.session.user = authUser;
  } else {
    res.redirect("/login");
  }
  res.redirect("/");
});

/* GET home page. */
router.get("/", [authenticate, logCb], function(req, res, next) {
  res.render("index", {
    title: "Express Trips",
    user: currentUser
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
  currentUser.trips.push(trip);
  res.redirect("/");
});

router.post("/updateTrip", function(req, res) {
  const trip = currentUser.trips.find(trip => {
    return trip.id === req.body.update;
  });
  res.render("update", { trip: trip });
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
  const trip = currentUser.trips.find(trip => {
    return trip.id === req.body.remove;
  });
  currentUser.trips.splice(currentUser.trips[trip], 1);
  res.redirect("/");
});

router.post("/search/city", function(req, res) {
  const tripArray = currentUser.trips.filter(trip => {
    return trip.destination.city == req.body.city;
  });
  res.render("search", { trips: tripArray });
});

router.post("/search/state", function(req, res) {
  const tripArray = currentUser.trips.filter(trip => {
    return trip.destination.state == req.body.state;
  });
  res.render("search", { trips: tripArray });
});

module.exports = router;
