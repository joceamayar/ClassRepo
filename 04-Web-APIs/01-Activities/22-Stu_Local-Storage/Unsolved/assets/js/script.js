let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let signUpButton = document.querySelector("#sign-up");
let msgDiv = document.querySelector("#msg");
let userEmailSpan = document.querySelector("#user-email");
let userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {

   // retriving and pasting it in the page
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");

  userEmailSpan.textContent = email;
  userEmailSpan.textContent = password;

  // TODO: Retrieve the last email and password and render it to the page
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

      // TODO: Save email and password to localStorage and render the last registered user


    userEmailSpan.textContent =email;
    userPasswordSpan.textContent = password;

   //settign the values: 

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    //or 
    renderLastRegistered();

  }
});
