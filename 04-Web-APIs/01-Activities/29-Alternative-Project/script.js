let container = document.querySelector(".container");
let images = [
  { img: "./image-1.png", description: "content" },
  { img: "./image-2.png", description: "2" },
  { img: "./image-3.png", description: "3" },
  { img: "./image-4.png", description: "4" },
];

let imgEl= document.querySelector("img")
let h1El= document.querySelector("h1")
let currentIndex = 0
renderCurrentIndex();

function renderCurrentIndex(){

  imgEl.src = images[currentIndex].img
  h1El.textContent = images[currentIndex].description

}

container.addEventListener("click", function(){
  timer--5;
  currentIndex++;

  renderCurrentIndex();

})



//Setting a Timer on my page 

let timer = 100; 
let h4El =  document.querySelector("h4")
let intervalID;

intervalID =setInterval(function(){
timer --; 

h4El.textContent = timer
 
if(timer<=0){

  clearInterval(intervalID)
  gameOver();

}

},1000)
