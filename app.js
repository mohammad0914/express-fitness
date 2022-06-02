// DEPENDENCIES
const express = require("express");
// const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const personsController = require("./controllers/persons.controller");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found.");
});

// EXPORT
module.exports = app;