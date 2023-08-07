let timerEl = document.getElementById('countdown');
let mainEl = document.getElementById('main');

let message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
let words = message.split(' ');

function countDown() {

let timeLeft = 5; // run the interval every five second 

  let timerInterval = setInterval(function() {
    timeLeft--; //subtract the interval each time 
    timerEl.textContent = timeLeft;

    if(timeLeft === 0) {
   
      clearInterval(timerInterval);

      displayMessage();
    }

  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  let msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 500);
}

countDown()