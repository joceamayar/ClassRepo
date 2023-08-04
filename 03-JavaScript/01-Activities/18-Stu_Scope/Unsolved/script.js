// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions

let shout = "Shout"

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function


function sayLions() { 
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  let animal = "Tigers";
  console.log(animal ); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 

function sayBears() {
  let bears = "Bears";
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

function singAlong() {
  let sing = "Sing"; 
  console.log(sing + ",");
  let singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();



//shadowing - when you defined a variable at multiple scope levels eg.

let bears = "Bear" 
function sayBears() {
  let bears = "Bears";//This is a different variable 
    console.log(bears + "! OH MY!");
    return;
}
