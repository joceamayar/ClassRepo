// Access element using id
let articlesDiv = document.getElementById('articles');
let headerDiv = document.getElementById('header');

// Change style by accessing style object's properties

headerDiv.children[0].style.color ='white';
headerDiv.children[1].style.color = 'white';

articlesDiv.children[0].children[1].style.fontSize = '50px';

// Grabing it with css selectors using the quesrySelector. 
let h1El = document.querySelector('#header h1');
h1El.style.color = "white";

//It would also work if tagert h1, but it would only grab the first h1:
let h1El = document.querySelector('h1');
h1El.style.color = "white";

