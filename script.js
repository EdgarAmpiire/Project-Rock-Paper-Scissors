// Logic to get the computer choice that randomly returns "rock", "paper", or "scissors"

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let result;
  switch (choice) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
  }
  return result;
}
getComputerChoice();

// Logic to get the human choice and returns one choice depending on what the human inputs

function getHumanChoice() {
  let choice = prompt("Please enter your choice: ");
// let choice = "paper";
  return choice;
}

// Variables to store players scores initialized with 0

let computerScore = 0;
let humanScore = 0;

// Logic to play a single round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }else if ( 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`You Selected: ${humanChoice}`);
    console.log(`Computer Selected: ${computerChoice}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Logic to play the entire game of rounds of five
