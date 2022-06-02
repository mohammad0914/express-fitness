const express = require("express");
const equipment = express();
const equipmentArray = require("../models/machine.model.js");

// INDEX
equipment.get("/", (req, res) => {
  res.status(200).json(equipmentArray);
});

module.exports = equipment;