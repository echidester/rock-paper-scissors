// DOM Selectors
const options = document.querySelectorAll(".option");
const startBtn = document.getElementById("start-btn");
const resultsArea = document.getElementById("results");

// Variable Declarations
let playerSelection;
let resultMessage = "";
let activeGame = false;
let playerWinCount = 0;
let computerWinCount = 0;

// Event Listeners
startBtn.addEventListener("click", function () {
  startGame();
});

options.forEach((option) =>
  option.addEventListener("click", function (e) {
    playerSelection = e.target.value;
    playRound(playerSelection, getComputerChoice());
  })
);

const getComputerChoice = function () {
  const gameArray = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * gameArray.length);
  const computerChoice = gameArray[randomIndex];

  return computerChoice;
};

const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  if (activeGame && playerWinCount < 5 && computerWinCount < 5) {
    if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "scissors")
    ) {
      resultMessage = `It's a tie!`;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      resultMessage = "Computer wins this round. :(";
      computerWinCount++;
      if (computerWinCount == 5) {
        resetGame("computer");
      }
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      resultMessage = "You Win!";
      playerWinCount++;
      if (playerWinCount == 5) {
        resetGame("player");
      }
    }
  } else {
    activeGame = false;
    resultMessage = "Game has ended.";
  }

  console.log(`Player: ${playerWinCount}`);
  console.log(`Computer: ${computerWinCount}`);
  resultsArea.innerHTML = `<p>${resultMessage}<br />Player Score: ${playerWinCount}<br />Computer Score: ${computerWinCount}</p>`;
};

const startGame = function () {
  activeGame = true;
  playerWinCount = 0;
  computerWinCount = 0;
};

const resetGame = function (winner) {
  switch (winner) {
    case "player":
      resultMessage = `Game Over. You win!`;
      break;
    case "computer":
      resultMessage = `Game Over. You lose!`;
      break;
    default:
      resultMessage = `Game Over`;
  }

  activeGame = false;
};
