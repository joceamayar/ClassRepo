const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend} = require('../helpers/fsUtils');
const diagnosticsArray = require('../db/diagnostics.json');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  res.json(diagnosticsArray)

}); 

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
readAndAppend(diagnosticsArray, req.body)

});

module.exports = diagnostics;
