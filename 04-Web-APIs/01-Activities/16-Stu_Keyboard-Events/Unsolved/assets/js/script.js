//hook into the #key span
//hook into the #code span


let keyStatus = document.querySelector("#key")

let codeStatus = document.querySelector("#code")
let eventStatus = document.querySelector("#status")


function keyupAction(event){

  console.log(event)
keyStatus.textContent = event.key;
codeStatus.textContent = event.keyCode;

eventStatus.textContent= event.type;

}

function keydownAction(event){

  keyStatus.textContent = event.key;
  codeStatus.textContent = event.keyCode;
  document.querySelector("#status").textContent= event.type;

  eventStatus.textContent= event.type;
  
  }


document.addEventListener("keyup", keyupAction);

document.addEventListener("Keydown", keydownAction );



//-------------------------------------------------------------------


// function keydownAction(event){


// }


// function keyupAction(event){
// console.log(event)
// console.log(event.key)





// document.querySelector("#status").innerHTML ="KEYUP Event";

// }


// //Event listeners forkeyup and keydown actions 

// document.addEventListener("keyup", keyupAction);

// document.addEventListener("Keydown", keydownAction );


//-------------------------------------------------------------------


// document.addEventListener("keyup", keyupAction);

// document.addEventListener("keydown", keydownAction);


// let pressKey= event.key;
// let keyValue = event.keycode;


// function keydownAction(event) {
// keySpan.textContent= event.key;


//   document.querySelector("#keyup").textContent = pressKey;

//   document.querySelector("#keydown").textContent = keyValue;

//   document.querySelector("#status").innerHTML = "KEYUP Event";

// }

// function keyupAction(event) {

//   let pressKey= event.key;
//   let keyValue = event.keycode;

//   document.querySelector("#status").innerHTML = "KEYUP Event";

 
// }
