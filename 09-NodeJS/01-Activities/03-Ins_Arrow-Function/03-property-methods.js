//Arrow funtions bind their contex and look for the funtion they are inside of. So if an arrow fuvction is not inside another funtion then its binding to the global contex

// Avoid using arrow functions for object methods
var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),//Do not use arrow functions for methods. 
  readTag: () => console.log("The dog's tag reads: " + this.name + ".")
};


var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: function() {console.log(this.sound)},//Do not use arrow functions for methods. 
  readTag: function() {console.log("The dog's tag reads: " + this.name + ".")}
};







// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window

