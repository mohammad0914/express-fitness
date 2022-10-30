const machine = require("../models/machine.model.js")
const express = require("express")
const machinecontrollers = express.Router()

machinecontrollers.get("/", (req, res) => {
    res.json(machine)
})

module.exports = machinecontrollers