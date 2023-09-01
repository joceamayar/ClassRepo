// const { restore } = require("../../models/User"); // we don't need this one because is conneting to the back end. 

let cars = document.querySelector("#cars")

cars.addEventListener("click", async function(event){

    if(event.target.matches("button")){
        let clickedId = event.target.getAttribute("data-id")

        console.log(clickedId);


        const response = await fetch("/api/cars/" +clickedId, {
            method : "DELETE",
        });
        
        await response.json();

        if(response.status === 200){
            
            window.location.reload()
        }

        else{
            console.log("error")
        }

    }
})