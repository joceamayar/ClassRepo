var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInput = $('#shopping-input');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission


function handleFormSubmit(event) {

    // Prevent the default behavior
    event.preventDefault();

    //create an element 
    
    let newli = $("<li>")
    
    //set the text of the ul base of the input element 
    
   shoppingInput.val()
   newli.text(shoppingInput.val())
    
    
    //append to ul
    
    shoppingListEl.append(newli);
    
}
  
  // Submit event on the form
  shoppingFormEl.on('submit', handleFormSubmit);
  
