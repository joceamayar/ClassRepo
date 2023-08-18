// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

var createGreeting = (message, name) => { 
  return message + ", " + name + "!";
};

//---------------------------------------------------------------------------------------------------------------

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};
                    //There in an imply return for one liner that don't have brackets 
var createGreeting = (message, name) => message + ", " + name + "!";

//However if we add brackets to a one liner we must also add the return 

var createGreeting = (message, name) => {return message + ", " + name + "!"};

//---------------------------------------------------------------------------------------------------------------

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

//if we only had one parameter, we can delete the parenthesis 

var createGreeting = message => message + "!";


//If we donlt have any parameter we must have paranthesis
var createGreeting = () => console.log("hello world");

//---------------------------------------------------------------------------------------------------------------

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

//---------------------------------------------------------------------------------------------------------------

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

var greeting = createGreeting("Hello", "Angie");


//---------------------------------------------------------------------------------------------------------------

// Logs "Hello, Angie!";
greet(greeting);

greet(greeting);