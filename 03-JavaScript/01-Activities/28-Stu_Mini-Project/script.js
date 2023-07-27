
let choices = ["R", "P", "S"];
let wins = 0;
let losses = 0;
let ties = 0;

let roundNumber = 0;

let playerChoice = prompt("Enter 'R' for Rock, 'P' for Paper, or 'S' for Scissors")

let randomIndex = Math.floor(Math.random() * choices.length)
let computerChoice = choices[randomIndex];

let result = "";

play()

function play() {

  if (playerChoice === "R" && computerChoice === "P") {

    console.log("player wins!")

    wins++
  }
  else if (
    (playerChoice === "R" && computerChoice === "S") ||
    (playerChoice === "P" && computerChoice === "R") ||
    (playerChoice === "S" && computerChoice === "P")
  ) {
    result = "You win!";
    wins++;
  } else {
    result = "You lose!";
    losses++;
  }


  alert(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);

  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    play();
  } else {
    alert(`Total Wins: ${wins}\nTotal Ties: ${ties}\nTotal Losses: ${losses}`);
  }
}
