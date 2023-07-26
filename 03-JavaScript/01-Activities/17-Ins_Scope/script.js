// A variable declared in global scope is available to all functions
let hello = "Hello"; 

function sayHello() {
  console.log(hello);
  return;
}

let sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  let goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
let sayGoodbyeAgain = function () { 
  console.log(goodbye);
  return;
};

// Shadowing happens when the same variable is used in the local and global scope
let shadow = "Hello";
 console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
let sayWhatAgain = function () {
  let shadow = "Goodbye";
  console.log(shadow);   
};

sayGoodbye();
sayWhat();
sayWhatAgain();
