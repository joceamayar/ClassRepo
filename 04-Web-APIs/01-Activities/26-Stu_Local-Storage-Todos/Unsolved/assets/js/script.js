let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

//Instead of having the funtion init (). we can modified the variable todos:
let todos = JSON.parse(localStorage.getItem("todos")) ||[] ;
// init();
renderTodos();
// TODO: What is the purpose of this function?
//renders todos if they exist, it displays the specified Html code iside the specified Html element

function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.0
  //this fuction is preventing duplicates from being rendered by clearing the list and re-rendering.
  todoList.innerHTML = ""; // this is preventing us from getting duplicates 
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
//
  // for each string in our array buit an li, giverit a data-index and adding a button 
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    let button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
//Sets todos array to be an empty array if nothing is in local storage, but if there is something stored in local storage , we need to perse the array using JASON.parse to parse the array objects back into an array from a string 
// function init() {
//   // TODO: What is the purpose of the following line of code?
//   let storedTodos = JSON.parse(localStorage.getItem("todos"));
//   // TODO: Describe the functionality of the following `if` statement.
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }
//   // TODO: Describe the purpose of the following line of code.
//   renderTodos();
// }


function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code.

//Allows addign to the todo list, we're usign the submit event that only exist on forms 
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
//Removes items from the todolist 
//they are hooking at a containor, on the whole ul or ol 
todoList.addEventListener("click", function(event) {
  let element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  //removes items that was click on, we're using event delegation
  if (element.matches("button") === true) {
    let index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    //any time we modify the variable, we're trying to persist, by saving into local storage and rerender
    storeTodos();
    renderTodos();
  }
});



//managing the high score on the page