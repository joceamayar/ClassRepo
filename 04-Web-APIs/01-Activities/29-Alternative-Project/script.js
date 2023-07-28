let container = document.querySelector(".container");
let images = [
  { img: "./image-1.png", description: "content" },
  { img: "./image-2.png", description: "2" },
  { img: "./image-3.png", description: "3" },
  { img: "./image-4.png", description: "4" },
];

let imgEl = document.querySelector("img");
let h1El = document.querySelector("h1");
let currentIndex = 0;
let timer = 5

renderObject();

function renderObject() {
  imgEl.src = images[currentIndex].img;
  h1El.textContent = images[currentIndex].description;
}

container.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; 
  }
  renderObject();
});


IntervalId = setInterval(function() {
  timer--;
  console.log(timer);
  document.getElementById("timer").textContent = timer;
  
  if(timer <= o )

}, 10);



// let contaner= document.querySelector(".containor")
// let images = [
//     {img: "./image-1.png", description: "content"},
//     {img: "./image-2.png", description: "2"},
//     {img: "./image-3.png", description: "3"},
//     {img: "./image-4.png", description: "4"},
// ]

// let imgEl = document.querySelector("img");
// let h1E1 = document.querySelector("h1");
// let currentIndex= 0 
 
// renderObject()


// function randerObject(){

// imgEl.src = images[currentIndex].img
// h1E1.textContent= images[currentIndex].description

// }


// contaner.addEventListener("click", function(){

//     currentIndex++;
//     renderObject()
// })



// let timer = 100;
// setInterval(funtion()){
//     timer--;
//     console,log(timer)
//     h4El.textContent = timer
// },1000)



//     img.src=images[].img
//     h1EL.textCountent = image[0].description


// }


// Container.addEventListener("click", funtion()){

//     currentIndex ++;
    



// let imageEl = document.querySelector("img");
// let imageDescEl = document.querySelector("h1");
// let timerEl = document.querySelector("h4");


// let timer = 60;
// let idleTimer = 10;

// let intervalId;
// let idleIntervalId;

// let container = document.querySelector(".container");

// let currentImageIndex = 0;

// renderImage();
// startOverallTimer();


// container.addEventListener("click", function(event){

//         if(event.target.matches("img") || event.target.matches("h1"))
//         {
//             clearInterval(idleIntervalId);

//             nextImage();

//             renderImage();
//         }

// })

// function nextImage() {
//     if (currentImageIndex < images.length-1)
//         currentImageIndex++;

//     else
//     currentImageIndex = 0;
// }

// function startOverallTimer(){

//     intervalId = setInterval(function(){
//         timer--;
//         timerEl.textContent = timer;

//         if(timer === 0){
//             clearInterval(intervalId);
//         }


//     },1000)


// }

// function startIdleTimer(){

//     idleIntervalId = setInterval(function(){
//         idleTimer--;
//         console.log(idleTimer)
//         if(idleTimer === 0){
//             nextImage();
//             renderImage();
//             clearInterval(idleIntervalId);
//         }
//     },1000)


// }



// function renderImage(){
//     idleTimer= 10;
//     imageEl.src = images[currentImageIndex].img;
//     imageDescEl.textContent = images[currentImageIndex].description;
    
//     startIdleTimer();
// }