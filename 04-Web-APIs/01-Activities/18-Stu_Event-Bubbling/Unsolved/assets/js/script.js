// TODO: Which element is the following line of code selecting?
//This is targeting the first carouselbox class, to grab all of them we will need to use querySeletorcAll. 
let carousel = document.querySelector(".carouselbox");

// TODO: Which element is the following line of code selecting?
//The div element with the class of carousel
let next = carousel.querySelector(".next");//this is an object , button next 
let prev = carousel.querySelector(".prev");//this is an object, button prev
let index = 0; // this index variable is determining which index is been shown in the carousel
let currentImage;

//this is an image array 

let images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

// this navigate fuction is executign the nex image in the array when the user clicks on next incrementing it by one, else when they click prev it decreses by 1 showing the previus image. 
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//this is adding the fuctionability to click the button in the carousel box 
  //and directing it to the image array taking it to the next index

carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.

//here we are adding an addEventListener to be able to click on the next button 
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  //We are addign stopPropagation to be able to only stay in the same page and not to trigget the bubbleling effect which will redirect us to another page 
  event.stopPropagation();
//im increment my index by one 
  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});
//I'm 
navigate(0);
