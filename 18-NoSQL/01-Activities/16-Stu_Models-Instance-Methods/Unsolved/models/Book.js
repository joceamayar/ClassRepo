const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`

const bookSchema = new mongoose.Schema({
    titlte: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
  });

// TODO: Create a custom instance method named `getDiscount`

bookSchema.methods.getDiscount = function () {
    // The 'this' keyword is used to specify the properties belonging to the particular instance
    console.log(
      `Price discount is ${this.price/2}`
    );
  };

// TODO: Create a model named `Book`
const = new Book({ name: 'No snacks no Paws', author: "Finn", pice: 200 });

// TODO: Create a new instance of the model

bookSchema.methods.getBook = function () {
    // The 'this' keyword is used to specify the properties belonging to the particular instance
    console.log(
      `This department has the name ${this.name} and a total stock of ${this.totalStock}`
    );
  };

// TODO: Call the custom instance method on the instance

newBook.getDiscount(); 



module.exports = Book;

// node bookSchema.js

//we are able to set properties on the object that didn't exist. 
