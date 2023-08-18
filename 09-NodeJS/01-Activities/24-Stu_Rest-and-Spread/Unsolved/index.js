// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
//spread operator 
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
//The whole array of songs 

console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];

  // TODO: What does the reduce() method do?
  //we are adding all of the items in the array togather. 
  //the 0 value is the starting point 
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
//this is the rest operatos because is inside a parameter
//with the rest operator it allows you to past an infinity of values
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
10
console.log(additionSpread(1, 2, 3, 4, 100));
