const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder
    app.use(express.static('public')); //if i have a files server uo 

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));/this tells the computer lo listen 

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page
   //paths can literally be called any name 
    app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)//this tells the computer lo listen 
);


// install =npm i nodemon --global
//if an error happends on a mac then run = sudo npm i nodemon --global
//now we can use = nodemon server.js
//This works like live server 