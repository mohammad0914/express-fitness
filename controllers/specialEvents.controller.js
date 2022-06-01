const express = require("express");
const specialEvents = express();
const specialEventsArray = require("../models/specialEvents.js");



// INDEX
specialEvents.get("/", (req, res) => {
  res.status(200).json(specialEventsArray);
});



module.exports = specialEvents;