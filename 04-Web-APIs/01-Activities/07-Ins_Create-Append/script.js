
//Creating a dinamic element: (3 Important components: create the element, set the textContent, Append the child)

//1. Create the element 
let tag = document.createElement ("h1")

//2. Set the text content 

tag.textContent = "example text"

//3. Append

document.body.appendChild(tag);
//-----------------------------------------------------

//Creates element basen on tag enter by user 

let tag = document.createElement("p")

//Adds text content to create the tag
tag.textContent = "exaple text 1"

//Appends tag as a child of document body 

document.body.appendChild(tag);
//-----------------------------------------------------

// we can also run it in a loop! 

 for (let i = 0; i < 20; i++) {
  
  //Creates element basen on tag enter by user 

let tag = document.createElement("p")

//Adds text content to create the tag
tag.textContent = "exaple text " + i;

//Appends tag as a child of document body 

document.body.appendChild(tag);
  
 }
//-----------------------------------------------------

//And add an Array 

let petNames = ["Finn", "Guajillo", "Gari", "Pancho"]

for (let i = 0; i < petNames.length; i++) {
  
  //Creates element basen on tag enter by user 

let tag = document.createElement("p")

//Adds text content to create the tag
tag.textContent = petNames[i];

//Appends tag as a child of document body 

document.body.appendChild(tag);
  
 }