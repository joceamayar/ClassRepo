// Functions are reusable blocks of code that perform a specific task


// This is a function declaration 
//You declare a fuction, by giving givign it a name just like when we declare a variable
//A funtion willk have and input, something to execute and a return 
//Funtion declariations are hoisted,  meaning that we can put this fuction declaration at the bottom of out code, before even defining it. 

declareHello(); // can be use before defining the functin 
function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// This is a function expression
//In an expression function you declare the variable to a funtion 
//This type of functions can only be use after being define.
let expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

expressHello(); //can only beuse after have been defined 

// Functions must be called to execute
declareHello(); 
expressHello();

//Functions can be called again to make the block of code execute again
declareHello(); 

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);



//We can pass text from variables such as a for loop 

for (let i = 0; i <10; i++) {
  declareText("Hello, I'm a fuction declaration. I was called " + i + " times")
  
}


function declareText(text){
  console.log(text);
  console.log("-----------------------------------");

  return;
}


//Other examples:

add()
add (5,5)


function add(num1, num2){

  console.log(num1 + num2)
}