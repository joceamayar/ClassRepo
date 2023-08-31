const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server, synchornizing the mocels 
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));//ready to start reciving request 
});
