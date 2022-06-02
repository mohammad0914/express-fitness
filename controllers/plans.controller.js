const express = require("express");
const plans = express();
const plansArray = require("../models/plan.model.js");

// INDEX
plans.get("/", (req, res) => {
  res.status(200).json(plansArray);
});

module.exports = plans;