let time =document.querySelector("#time");
// let time =$("#time");

setInterval(function(){

    // console.log(dayjs().format("MMM, DD YYYY [at] hh:mm:ss"));
    time.textContent = dayjs().format("MMM, DD YYYY [at] hh:mm:ss")
    //time.text(dayjs().format("MMM, DD YYYY [at] hh:mm:ss"))
}, 1000)


let inputEl= document. querySelector(['#name,#type,#date']);
let submitBtnEl = document.querySelector("#submit-button");
let storedInputArr = []

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();

let inputValue = inputEl.value
console.log("inputValue");

storedInputArr.push(inputValue); 
console.log("storedInputArr:", storedInputArr);

let newProject ={
projectInput: inputValue
}
console.log("newProject object:", newProject);

})

// let nameEL = document.querySelector("#name")
// let submitBtnEl = document.querySelector("#submit-button");
// let storedInputArr = []

// submitBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();

//     let nameValue= nameEl.value
// console.log("nameValue: ",nameValue);
// let newProject = {
//     projectName: nameValue
// }
// console.log("newProject object: ",newProject)
// })

