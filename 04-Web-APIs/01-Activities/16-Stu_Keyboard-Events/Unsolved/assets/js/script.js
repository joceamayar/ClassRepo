//hook into the #key span
//hook into the #code span

document.addEventListener("keyup", keyupAction);

document.addEventListener("keydown", keydownAction);


let pressKey= event.key;
let keyValue = event.keycode;


function keydownAction(event) {
keySpan.textContent= event.key;


  document.querySelector("#keyup").textContent = pressKey;

  document.querySelector("#keydown").textContent = keyValue;

  document.querySelector("#status").innerHTML = "KEYUP Event";

}

function keyupAction(event) {

  let pressKey= event.key;
  let keyValue = event.keycode;

  document.querySelector("#status").innerHTML = "KEYUP Event";

 
}
