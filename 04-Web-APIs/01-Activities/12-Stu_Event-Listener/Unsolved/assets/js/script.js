var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

//review

//We use textContent for any display element such as div, span, tag, p. 

// TODO: Add event listener to increment button]

incrementEl.addEventListener("click", function() {
 
  count++;
  countEl.textContent = count;

}); 


// TODO: Add event listener to decrement button]

decrementEl.addEventListener("click", function (){

  if (count > 0 ){

    count--;
    countEl.textContent = count;

  }


});


// TODO: click on count so it reverts back to zero]

countEl.addEventListener("click", function (){

count = 0 
countEl.textContent = count;


});






//We use value for any input element, to display the text 















// // TODO: Add event listener to increment button]
// incrementEl.addEventListener("click", function(){
//   count++;
//   countEl.textContent=count;
// });

// // TODO: Add event listener to decrement button 

// decrementEl.addEventListener("click", function(){
//   count--;
//   countEl.textContent=count;
// });
