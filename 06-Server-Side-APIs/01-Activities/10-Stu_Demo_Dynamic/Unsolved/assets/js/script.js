let userContainer = document.getElementById('users');
let fetchButton = document.getElementById('fetch-button');

function getApi() {
  let requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      // Use the console to examine the response
      console.log(users);
     
    for (let i = 0; i < users.length; i++) {

      // create an element 
      let userName1 = documen.createElement
      let userName2 = document.createElement

      //CREATE THE TEXT


      //Apending it tot the page 
      issueContainer.append(userName);
        issueContainer.append(userContainer);
 



    
        let issueTitle = document.createElement('p');
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;
        
    }
    
    });
}
fetchButton.addEventListener('click', getApi);


// Response Object tells us whether or not the server undertood us: 