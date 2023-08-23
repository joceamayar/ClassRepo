// TODO: Initialize app variable
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// TODO: Import express
//We don't need this line because is not a publiuc file
// app.use(express.static('public'));

// TODO: Import 'terms.json' file
//everytime we are dealing with a JSON file we whant to add /api/ to our path. 
app.get('/api/terms', (req, res) =>
res.sendFile(path.join(__dirname, '/terms.json')
)
)

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);



// We are usign a Node.js application and setting up local Express.js server.

