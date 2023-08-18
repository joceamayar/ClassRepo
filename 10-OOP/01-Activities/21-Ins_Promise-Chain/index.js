const inquirer = require('inquirer');
const fetch = require('node-fetch');

inquirer
  .prompt({ //returs a promise, is ventible and waitable 
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  // promises are chained to directly pass inquirer data into fetch request
  .then((inquirerResponse) => fetch(`https://api.github.com/users/${inquirerResponse.username}`)) //we are making a fethc request base 
  // promises are chained to parse the request for the json data
  .then((respose) => response.json())//response object 
  // json data is accepted as user and logged to the console
  .then((user) => console.log(user));
  
  .Catch - is rejected 



//Fulfile- everything that gets fuilfill is going to be execurted in the 

  
  
  
  
  //Rejected state - if we did a fetch request and the server sends back a 405 or a 500
  //400- bad request, we probably made the request incorrectly  
  //500- the back in creash and or they crash and don't want to expose why. 

