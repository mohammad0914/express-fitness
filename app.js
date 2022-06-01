// DEPENDENCIES
const express = require("express");
// const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const equipmentController = require('./controllers/equipment.controller')
app.use('/equipment', equipmentController)

const locationsController = require('./controllers/locations.controller')
app.use('/locations', locationsController)

const peopleController = require('./controllers/people.controller')
app.use('/people', peopleController)

const plansController = require('./controllers/plans.controller')
app.use('/plans', plansController)


const specialEventsController = require('./controllers/specialEvents.controller')
app.use('/specialEvents', specialEventsController)



// EXPORT
module.exports = app;