const buttons = document.getElementsByTagName('button');

//factory funtion 
const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
//A point of start, create a variable to increment 
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  //closure 
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// grabing all of the elements looping them 
//

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
