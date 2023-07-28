var container = document.querySelector(".container");

container.addEventListener("click", function (event)

{
  var element = event.target;
  console.log(element);

  // TODO: Complete function
  if (element.matches(".box")) {
    console.log(element.getAttribute("data-number"))


    if (element.textContent === "") {

      element.textContent = element.getAttribute("data-number")

    }

    else {
      element.textContent = "";

    }
  }}
);
