const express = require("express");
const specialEvents = express();
const specialEventsArray = require("../models/special-event.model.js");

// INDEX
specialEvents.get("/", (req, res) => {
  res.status(200).json(specialEventsArray);
});

module.exports = specialEvents;

