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

let myRedCar = {
    color: "red",
    year: "2020",
    numWheels: 4,
    isOn: false,

    startCar: function () {
        this.isOn = true;
    }
}

myRedCar.startCar();

if (myRedCar.isOn == true) {
    console.log("Red car is running!");
}

for (let index = 10; index > 0; index--) {
    console.log("I'm on loop: " + index);
}


// myRedCar.startCar();

// console.log("Red car is running: " + myRedCar.isOn);

// myRedCar.stopCar();

// console.log("Red car is running: " + myRedCar.isOn);
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























