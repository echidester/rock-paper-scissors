// DOM Selectors
const options = document.querySelectorAll(".option");
const resultsArea = document.getElementById("results");
let playerSelection;
let resultMessage = "";

// Event Listeners
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
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultMessage = "You Win!";
  }

  resultsArea.innerHTML = `<p>${resultMessage}`;
};

// const playGame = function () {
//   let playerWinCount = 0;
//   let computerWinCount = 0;

//   let computerSelection = getComputerChoice();

//   console.log(`Player choice: ${playerSelection}`);
//   console.log(`Computer choice: ${computerSelection}`);

//   let winner = playRound(playerSelection, computerSelection);
//   console.log(winner);

//   switch (winner) {
//     case "player":
//       playerWinCount++;
//       break;
//     case "computer":
//       computerWinCount++;
//       break;
//     case "tie":
//       break;
//     default:
//       console.log("An error occured.");
//   }
// };

// playGame();
