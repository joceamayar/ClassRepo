fetch(
  
  //Issues- On any given Repo there is an issue  
  
  // Explain each parameter in comments below.


  // issues?per_page=10& - Give me the first 10 issues
  
  // state=open& - give me the open issues
  
  // sort=created& - it will sort by creating 
  
  //direction=desc - it 



  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
by defailt 