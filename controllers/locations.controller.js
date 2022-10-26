const express = require("express")

const location = require("../models/location.model.js")
const locationcontroller = express.Router()


locationcontroller.get("/", (req, res) => {
    res.json(location)
})
module.exports = locationcontroller

