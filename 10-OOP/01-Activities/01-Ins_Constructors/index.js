// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog'
// }

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed) {

  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () { //method
    console.log('Zzzzzzzzz');
  };
}
//Our interface is only the funtions that we are exposing 

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const dog = new Dog('Rex', 2, 'Bulldog');

// Calling dog's nap method
dog.nap();
dog.info


//Dry code - code that is repitetive - Don't Repeat Yourself

//Object oriented program allows us to reuse a lot of our code 

//Is important to not repeat ourself, trying to keep layers of abstranction 

//Objects in JavaScript are unorder collections of related data built on a key-value structure in which values, include functions. They are related data. 

//Everything is javaScript are technical objects even our primitives 
//Our primitives are wrap in an object (this is calle Boxing) 

//Our primitive data types are box 


//Encapsulation 

//Inheritance - new classes can be creted bases on other classes. 

//Abstraction - creating a simple model of something complex. 

//Polymorphism = Multiple object types can implement the samr funtionability 

//new key word - Allows us to create a black java Script object, it asign the value of this to that new instance. the return value becomes the result of the whole new expression