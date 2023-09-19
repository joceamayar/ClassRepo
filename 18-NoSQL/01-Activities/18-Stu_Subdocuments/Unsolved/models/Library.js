const mongoose = require('mongoose');
const { create } = require('../../../17-Ins_Subdocuments/models/Department');

// TODO: Define a new schema named `bookSchema` for the subdocument

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
});
const library = mongoose.model('library', departmentSchema);


const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },

});
const Book = mongoose.model('book', departmentSchema);

  // TODO: Add the `books` subdocument to the parent document as an array
let bookArr = [{title: "Finn", author: "FinnS"}],

  const bookData = { name: 'Taylor',};
  const books = [
    { name: 'Ann', salary: 40000 }, // each of this data are define by the schema 
    { name: 'Liu', salary: 50000 },
  ];

// TODO: Create a model named `Library`

Library
  .create({ name: 'Shoes', manager: managerData, employees: employeeData })
  .then(data => console.log(data))
  .catch(err => console.error(err));
  
// TODO: Create a new instance of the model including the subdocuments

module.exports = Library;
