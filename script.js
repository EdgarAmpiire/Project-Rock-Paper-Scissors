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
// function getHumanChoice() {
//   let userInput = document.querySelector("#rock");
//   return userInput;
// }

// Logic to play the entire game of rounds of five
function playGame() {
  // Variables to store player's scores initialized with 0
  let computerScore = 0;
  let humanScore = 0;
  let tie = 0;

  // Logic to play a single round
  function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // console.log(`You Selected: ${humanChoice}`);
    // console.log(`Computer Selected: ${computerChoice}`);

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
  // Logic that plays 5 rounds
  // for (let i = 0; i < 5; i++) {
  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();
  //   const result = playRound(humanSelection, computerSelection);
  //   console.log(`Round ${i + 1}: ${result}`);
  // }

  // function for the buttons to call playRound function
  const content = document.querySelector(".content")
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");

  const displayResult = document.createElement("div");
  displayResult.textContent = "";
  const score = document.createElement("div");
  score.textContent = "";
  const winner = document.createElement("div");
  winner.textContent = "";

  content.appendChild(rockBtn);
  content.appendChild(paperBtn);
  content.appendChild(scissorsBtn);
  content.appendChild(displayResult);
  content.appendChild(score);
  content.appendChild(winner);

  let round = 0;

  // Rock Button
  rockBtn.addEventListener("click", () => {
    if (round >= 5) return;
    round++;
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    
    // Results of the game
    displayResult.innerHTML = `Round: ${round} <br> You selected: ${humanSelection} <br> 
    Computer Selected: ${computerSelection} <br> Result: ${result}`;
    
    // Determine winner of the game
    if (round === 5) {
      score.textContent = `Final Score -> You: ${humanScore}, Computer: ${computerScore}, Ties: ${tie}`;
      let gameWinner = "It's a tie!";
      if (humanScore > computerScore) {
        gameWinner = "You!"
      } else if (computerScore > humanScore) {
        gameWinner = "Computer"
      }
      winner.textContent = `The winner of the game is ${gameWinner}`;
    }
  });

  // Paper Button
  paperBtn.addEventListener("click", () => {
    if (round >= 5) return;
    round++;
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    
    // Results of the game
    displayResult.innerHTML = `Round: ${round} <br> You selected: ${humanSelection} <br> 
    Computer Selected: ${computerSelection} <br> Result: ${result}`;
    
    // Determine winner of the game
    if (round === 5) {
      score.textContent = `Final Score -> You: ${humanScore}, Computer: ${computerScore}, Ties: ${tie}`;
      let gameWinner = "It's a tie!";
      if (humanScore > computerScore) {
        gameWinner = "You!"
      } else if (computerScore > humanScore) {
        gameWinner = "Computer"
      }
      winner.textContent = `The winner of the game is ${gameWinner}`;
    }
  });

  // Scissors Button
  scissorsBtn.addEventListener("click", () => {
    if (round >= 5) return;
    round++;
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    
    // Results of the game
    displayResult.innerHTML = `Round: ${round} <br> You selected: ${humanSelection} <br> 
    Computer Selected: ${computerSelection} <br> Result: ${result}`;
    
    // Determine winner of the game
    if (round === 5) {
      score.textContent = `Final Score -> You: ${humanScore}, Computer: ${computerScore}, Ties: ${tie}`;
      let gameWinner = "It's a tie!";
      if (humanScore > computerScore) {
        gameWinner = "You!"
      } else if (computerScore > humanScore) {
        gameWinner = "Computer"
      }
      winner.textContent = `The winner of the game is ${gameWinner}`;
    }
  });

  // console.log(
  //   `Final Score -> You: ${humanScore}, Computer: ${computerScore}, Ties: ${tie}`
  // );
}
playGame();
