const express = require("express");
const equipment = express();
const equipmentArray = require("../models/equipment.js");



// INDEX
equipment.get("/", (req, res) => {
  res.status(200).json(equipmentArray);
});



module.exports = equipment;