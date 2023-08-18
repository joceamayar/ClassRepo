// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function() {
      console.log(this.name + "!");
    }, 100);
  }
};


//This in the contex of a method refer to the object is inside of 
//Methods are: top level functions that belong to an object. 

//The value of This inside a funtion is the window object (the global object).
//The value of This inside of a method is  the object 
//A function nested within a method has a global value 


// An arrow function will bind the contect of This to the method is nested in, making the value of This be the object and not the global object of the window. 


var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(()=> {//usign the arrow syntax will bind the value of this to the method and the value of this in the method is the object 
      console.log(this.name + "!");
    }, 100);
  }
};

//Another way to bind the value of This is by adding the following syntax: bind(this)

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function() {
      console.log(this.name + "!");
    }, bind(this),100); // When we add the "bind(this)" syntax we bind the funCtion to the method, therefore the value of this is now the object and not the window or the global object. 
  }
};


//----------------------------------------------------------------------------------------------- 



person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => console.log(this.name + "!"), 100);
  }
};

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later
