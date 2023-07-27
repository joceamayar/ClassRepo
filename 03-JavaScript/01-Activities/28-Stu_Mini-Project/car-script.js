class Car {
    color;
    year;
    numWheels;
    isOn;

    startCar() {
        this.isOn = true;
    }

    stopCar() {
        this.isOn = false;
    }
}

let myRedCar = new Car();

myRedCar.color = "red";
myRedCar.year = "2020";
myRedCar.numWheels = 4;
myRedCar.isOn = false;

console.log("Red car is running: " + myRedCar.isOn);

myRedCar.startCar();

console.log("Red car is running: " + myRedCar.isOn);

myRedCar.stopCar();

console.log("Red car is running: " + myRedCar.isOn);
// myRedCar is now started

let myOldBlackCar = new Car();

myOldBlackCar.color = "black";
myOldBlackCar.year = "2014";
myOldBlackCar.numWheels = 4;
myOldBlackCar.isOn = false;

// my red car is started, black car is sitting there

myOldBlackCar.startCar();

//both cars are now running

// console.log("Red car is running: " + myRedCar.isOn);
// console.log("Black car is running: " + myOldBlackCar.isOn);























