const express = require("express");
const app = express();
const models = require("./models");

app.use(express.urlencoded({ extended: false }));

app.post("/add-trip", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const trip = models.Trip.build({
    name: name,
    description: description
  });

  await trip.save();
  res.send("TRIP");
});

app.get("/trips", async (req, res) => {
  const trips = await models.Trip.findAll();
  res.json(trips);
});

app.listen(3000);
