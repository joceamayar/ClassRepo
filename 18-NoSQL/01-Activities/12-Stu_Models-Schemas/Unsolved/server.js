const express = require('express');
const db = require('./config/connection');
// TODO: Add a comment describing the functionality of the code below
// We are distructuring the book model out of models and passing Book from our modules 
//We are inserting into views
//item is the same you will use as document. 
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of the code below
    // we are inserting into book 
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
