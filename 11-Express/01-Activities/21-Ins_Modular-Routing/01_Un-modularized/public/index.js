const api = require('express').Router()
const feedback = require("./feedback");
const tips = require("./tips");

api.use("feedback", feedback);
api.use("/tips",tips)

module.exports = api
