const locationcontroller = require("./controllers/locations.controller.js")
const express = require("express")

const app = express()
app.use("/locations", locationcontroller)
module.exports = app