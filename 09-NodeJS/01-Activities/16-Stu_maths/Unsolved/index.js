// TODO: Import `maths.js`
const maths = require('./maths');

let arguments =process.argv.slice(2)
let operation = arguments[0]
let num1 = parseInt(arguments[1]);
let num2 = parseInt(arguments[2]);

console.log(maths.sum(num1,num2));


//Using an if statement

if (operation === 'sum') {
    console.log(maths.sum(num1, num2));

} else if (operation === 'difference') {
    console.log(maths.subtract(num1, num2));

} else if (operation === 'product') {
    console.log(maths.multiply(num1, num2));

} else if (operation === 'divide') {
    console.log(maths.divide(num1, num2));

} else {
    console.log("Invalid operation");
}


//Using the switch element 


switch (operation) {
    case 'add':
        console.log(maths.sum(num1, num2));
        break;
    case 'subtract':
        console.log(maths.subtract(num1, num2));
        break;
    case 'multiply':
        console.log(maths.multiply(num1, num2));
        break;
    case 'divide':
        console.log(maths.divide(num1, num2));
        break;
    default:
        console.log("Invalid operation");
}






// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
