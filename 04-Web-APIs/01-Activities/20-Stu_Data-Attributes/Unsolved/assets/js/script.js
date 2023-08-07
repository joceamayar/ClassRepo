let container = document.querySelector(".container");

container.addEventListener("click", function (event) {

let element = event.target;
console.log(element);  

if (element.matches(".box")){
console.log(element.getAttribute("data-number"));


if(element.textContent === "")
{
    element.textContent = element.getAttribute("data-number");

}

else{
    element.textContent ="";
}

}
});



  
//   if (element.matches(".box")) {
//     console.log(element.getAttribute("data-number"))


//     if (element.textContent === "") {

//       element.textContent = element.getAttribute("data-number")

//     }

//     else {
//       element.textContent = "";

//     }
//   }}
// );
