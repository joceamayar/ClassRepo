const { response } = require("express");

console.log('hello');
const termEl = document.getElementById('terms');
const termButton = document.getElementById('term-btn');

// Invoked by the buttonHandler function to fetch terms from the data store
const getTerms = async () => {//every async funtion returns a promise
  const result = await fetch('/api/terms', {
    method: 'GET',
  });
  const json = await response.json();
  return terms;
};

// Invoked by the forEach() method in the buttonHandler function to properly set up each term to be rendered to the index.html page
const renderTerm = (term) => {
  //creatign the content 
  const cardEl = document.createElement('div');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');
//
  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');
//apending it
  cardBodyTitle.innerHTML = `<a href=${term.url}>${term.term}</a>`;
  cardBodyEl.innerText = term.definition;
  termEl.appendChild(cardBodyTitle);
  termEl.appendChild(cardBodyEl);
};

// Event Listener calls this method to invoke the getTerms function and render each returned 'term' to the index.html page
const buttonHandler = () =>
  getTerms().then((terms) => response.forEach((term) => renderTerm(term)));

// Event Listener invoked when the Fetch Terms button is clicked
termButton.addEventListener('click', buttonHandler);

//git houst - create 
//git delete- deletes
//Fetch by default does a delete