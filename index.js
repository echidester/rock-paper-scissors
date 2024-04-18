const getComputerChoice = function () {
  const gameArray = ["Rock", "Paper", "Scissors"];

  //randomly return either Rock, Paper or Scissors
  const randomIndex = Math.floor(Math.random() * gameArray.length);
  const computerChoice = gameArray[randomIndex];

  return computerChoice;
};

const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "tie";
    } else if (computerSelection === "paper") {
      return "computer";
    } else if (computerSelection === "scissors") {
      return "player";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "player";
    } else if (computerSelection === "paper") {
      return "tie";
    } else if (computerSelection === "scissors") {
      return "computer";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "computer";
    } else if (computerSelection === "paper") {
      return "player";
    } else if (computerSelection === "scissors") {
      return "tie";
    }
  }
};

const playGame = function () {
  let playerWinCount = 0;
  let computerWinCount = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = getComputerChoice();

    let winner = playRound(playerSelection, computerSelection);
    console.log(winner);

    switch (winner) {
      case "player":
        playerWinCount++;
        break;
      case "computer":
        computerWinCount++;
        break;
      case "tie":
        break;
      default:
        console.log("An error occured.");
    }
  }

  if (playerWinCount > computerWinCount) {
    console.log(`You win!`);
  } else if (playerWinCount < computerWinCount) {
    console.log(`You lose. The computer won. :(`);
  } else {
    console.log(`You tied!`);
  }
};

playGame();
