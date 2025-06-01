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

// Logic to get the human choice and returns one choice depending on what the human inputs
function getHumanChoice() {
  //   let choice = prompt("Please enter your choice: ");
  return choice;
}

// Logic to play the entire game of rounds of five
function playGame() {
  // Variables to store player's scores initialized with 0
  let computerScore = 0;
  let humanScore = 0;
  let tie = 0;

  // Logic to play a single round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(`You Selected: ${humanChoice}`);
    console.log(`Computer Selected: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      tie++;
      return `It's a tie!`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`Times you won: ${humanScore}`);
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      console.log(`Times computer won: ${computerScore}`);
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${i + 1}: ${result}`);
  }

  console.log(
    `Final Score -> You: ${humanScore}, Computer: ${computerScore}, Ties: ${tie}`
  );
}

playGame();
