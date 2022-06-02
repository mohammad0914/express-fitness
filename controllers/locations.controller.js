const express = require("express");
const locations = express();
const locationsArray = require("../models/location.model.js");

// INDEX
locations.get("/", (req, res) => {
  res.status(200).json(locationsArray);
});

module.exports = locations;