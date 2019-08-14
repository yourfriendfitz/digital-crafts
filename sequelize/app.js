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

app.get("/trips/:tripId", async (req, res) => {
  const tripId = req.params.tripId;
  const tripToDelete = await models.Trip.destroy({
    where: {
      id: tripId
    }
  });
  res.json(tripToDelete);
});

app.post("/update-trip", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const tripId = parseInt(req.body.tripId);
  const update = await models.Trip.update(
    {
      name: name,
      description: description
    },
    {
      where: {
        id: tripId
      }
    }
  );
  res.json(update)
});

app.listen(3000);
