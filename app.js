const locationcontroller = require("./controllers/locations.controller.js")
machinecontroller=require("./controllers/machines.controller.js")
const express = require("express")

const app = express()
app.use("/locations", locationcontroller)
app.use("/machine",machinecontroller)
module.exports = app