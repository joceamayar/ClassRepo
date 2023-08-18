const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value


//functional programing - give a conditional and send it out 

const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});



//Imperative programing - Describes a sequesnce of instructions that tells the computer what to do and in which oreder


let filterArray

for (let i = 0; i < moviePatrons.length; i++) {

  if(patron.age> 17 )
  {
    filterArray.push(patron)
  }
  
}



console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that i of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over so that we don't affect the existing object (immutability). Note that this is not the ideal way of copying the object in this case and we will be using another approach (spread operator) for copying objects later in the module.
  const pObj = JSON.parse(JSON.stringify(patron));
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);



//For or Each 

let numbers = [0,1,2,3,4,5,6 ];


numbers.forEach((number ) =>{


  console.log(number)

})





//For of  Filter 

//Start with an array numbers 

let numbers = [0,1,2,3,4,5,6 ];


// Then we are dealing with a single value inside the array number 
numbers.filter((number) =>{


  return number>3

})


//for of Map 

let numbers = [0,1,2,3,4,5,6 ];


numbers.map((number ) =>{

return number*2

})
//Eg.

numbers.forEach(number =>{
  console.log(number)
})

//Looping through funtionsl loops

let names = ["Marina", "Hanrry", "Jocelin", "Stephen"] //Array of strings - make a for loops that preints out all the loops

names.map(name => ({name})) //This funtional loop is tranforming the array into an array of objects 
(4) [{…}, {…}, {…}, {…}]


let numbers = [0,1,2,3,4,5,6]

numbers.map((number) => {return 0} ) // this loop only returns 0's

numbers.map((number) => 0 ) // this also returns noly 0's because there is an imply return 

numbers.map((number) => number ) //returns the array of objects 

numbers.map((number) => number + "") /* turns the array of number into an array of strings */ (7) ['0', '1', '2', '3', '4', '5', '6']
                                        
numbers.map((number) => ({number}) ) /* turns the array into an array of objects */ (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]


let students = names.map((name) => ({studentName: names, id: Math.floor(Math.random()*100)})) // We are creating an array of obejcts,student nemse and randomizing an id for each student) 

names.filter((name)=>{ return name.includes("a")});/*Filter is conditional (true or flase), here we are filtering all the names tha include the letter a */(2) ['Marina', 'Hanrry']