var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
// var listEl = document.createElement("ol");
// Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "Jax favorite fruits are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);


h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

var listEl = document.createElement("ol");
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

let favoriteFoods =["ramen", "pizza", "tacos", "pasta"]

for (let i = 0; i < favoriteFoods.length; i++) {
    
    let foodsLi = document.createElement ("li")

   foodsLi.textContent=favoriteFoods[i]

    listEl.appendChild(foodsLi);
}

let newli= document.olEL.querySelectorAll('li');

newli.setAttribute("style", "font-color: white; padding: 5px; margin-left: 35px");


let olEL = document.querySelector('ol');

olEL.setAttribute("style", "background-color: #333333; padding: 20px");




// font-color: white; padding: 5px; margin-left: 35px;

// let favoriteFoods =["pasta","pasta","pasta","more-pasta"];


// for (let i = 0; i < favoriteFoods.length; i++) {

//     let foodlist = document.createElement("li");

//     foodlist.textContent = favoriteFoods[i];
    
//     listEl.appendChild(foodlist);
    
    
// }

