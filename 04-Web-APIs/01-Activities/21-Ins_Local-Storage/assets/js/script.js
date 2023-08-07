var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

// is local storage is null then start at 0 
var count = localStorage.getItem("count") || 0 ;

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});


//Local storage, everything that we need to save needs to be in loccal storage and everything that we get we also get it as a string 

//Local storage - helps data to persist 

//If the user clears they history and the data set on local storage 

// great for short and front-end storage, and is save in your browser history 

