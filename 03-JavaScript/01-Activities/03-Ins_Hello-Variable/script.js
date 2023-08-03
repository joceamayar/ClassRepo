// Declares student variable using let keyword 
//let - lets us know when we have mistakes 
//This variable is currently undefine 

let studentName;

// Uses assignment operator(=) to assign a value
 studentName = "Jocelin";
let studentAge = 32;

// To re-assign a variable, use only the variable's name  
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
// console.log("My name is " + studentName + "I am " +studentAge+"years old" );

cpnsole.log("my name is " + studentName + ".I am" + studentAge + "years old!");

// Or 

console.log(`my name is ${studentName}. I am ${studentAge} years old.`)


