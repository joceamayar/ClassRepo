
//Process.argv - Allows us to input into our terminal ands pass values 

// returns an array of command line arguments
console.log(process.argv); //printes out the whole array 
// process.argv[2] === process.argv[3];

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);


// Get the command-line arguments using process.argv
const argument1 = process.argv[2];// will only print the third and the forth item in the array 
const argument2 = process.argv[3];

if (process.arg[2]===process.arg[3]){
    console.log("They are the same!")
}else{
    console.log("they are not the same!")
}

// Compare the arguments and print the result
const result = argument1 === argument2;
// console.log(result);


//node index.js 
 '/Users/jos/.nvm/versions/node/v18.16.0/bin/node', //The path to node in my computer 
'/Users/jos/repos/classRepo/09-NodeJS/01-Activities/11-Ins_process-argv/index.js' // The path to the file in the computer 

//node index.js electric boogaloo creates two strings 

//node index.js "electric boogaloo"  conbines the strings into one string



