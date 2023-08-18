// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () { //it allows us to add methods after we have declare the constructure
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
console.log(dog);

dog.nap();


/*Prototype - Every object tha twe create with the new word allows us to add methods after the fact.  */