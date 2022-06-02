const express = require("express");
const people = express();
const peopleArray = require("../models/person.model.js");

// INDEX
people.get("/", (req, res) => {
  res.status(200).json(peopleArray);
});

module.exports = people;