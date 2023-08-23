const express = require('express');

const PORT = 3001; // only one program can be listening in a port
const reviews = require('./db/reviews');

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());// this is important for json
app.use(express.urlencoded({ extended: true }));// this is parsing out the data

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => { //http request - retreats
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.json(reviews); //make sure we are adding this line of code
});

// POST request to add a review
app.post('/api/reviews', (req, res) => { // creates
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.json(`Review for ${response.data.product} has been added!`);
  } else {
    res.json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>/ // without this 
  console.log(`Express server listening on port ${PORT}!`)
);


//What things can we send: 
//JSOM
//status res.status200.json*reviews); 
//files: res.sendFile(path.join (__dirname,"db"); when sending files we need an absolute path 
//a string of html (<h1>hello world<h1/>)


//Challenge
//randomly generate an id 



//insopnia

// {
// "produtc": "playstation 5",

// }