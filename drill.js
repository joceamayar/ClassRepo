
let submitBtn0 = document.querySelector("#button0");
let input0 = document.querySelector("#input0");
let pEl0 = document.querySelector("#renderHere0");

let submitBtn1 = document.querySelector("#button1");
let input1 = document.querySelector("#input1");
let pEl1 = document.querySelector("#renderHere1");

let submitBtn2 = document.querySelector("#button2");
let input2 = document.querySelector("#input2");
let pEl2 = document.querySelector("#renderHere2");

pEl0.textContent = localStorage.getItem("input0");
pEl1.textContent = localStorage.getItem("input1");
pEl2.textContent = localStorage.getItem("input2");


submitBtn0.addEventListener("click", function(){
        localStorage.setItem("input0", input.value)
        pEl.textContent = input.value;

})

submitBtn1.addEventListener("click", function(){
    localStorage.setItem("input0", input.value)
    pEl.textContent = input.value;

})

submitBtn2.addEventListener("click", function(){
    localStorage.setItem("input0", input.value)
    pEl.textContent = input.value;

})





