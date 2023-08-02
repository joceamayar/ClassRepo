var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
//this is an array of strings so its using JSON
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
objects
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })//this is converting from JSON syntax into a java script variable tha we can use


  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }

};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
