// Constructor class can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
class Cat { // the same as a constructure function 
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  nap() {// we can just say the method funtion without having to add the function na,e
    console.log('Zzzzzzzzz');
  }
}

// Sets the variables "catOne" and "catTwo" to a Cat object and initializes with name, age, and breed properties
const catOne = new Cat('Tom', 2, 'Shorthair');
const catTwo = new Cat('Garfield', 3, 'Bengal');

// Calling Cat's nap method
catOne.nap();
catTwo.nap();
