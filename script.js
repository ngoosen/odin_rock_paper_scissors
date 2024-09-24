let gameCancelled = false;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber <= 3) {
    return "rock";
  } else if (randomNumber > 3 && randomNumber <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice;

  try {
    userChoice = prompt("Please enter Rock, Paper or Scissors: ").toLowerCase();
  } catch {
    gameCancelled = true;
    return;
  }

  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Invalid choice! Please enter Rock, Paper or Scissors.");
    return getHumanChoice();
  }

  return userChoice;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(computerChoice, humanChoice) {
    if (gameCancelled) {
      return;
    }

    if (humanChoice === computerChoice) {
      return "Tie!";
    }

    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++;
        return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
      } else {
        humanScore++;
        return `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
      }
    }

    if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        computerScore++;
        return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
      } else {
        humanScore++;
        return `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
      }
    }

    if (computerChoice === "rock") {
      computerScore++;
      return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    }

    humanScore++;
    return `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
  }

  while (round < 5) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    const roundResult = playRound(computerChoice, humanChoice);

    if (gameCancelled) {
      break;
    }

    console.log(roundResult);
    round++;
  }

  if (gameCancelled) {
    console.log("It seems like you don't want to play. That's fine, I don't care... I didn't even want to play in the first place...");
  } else {
    if (humanScore > computerScore) {
      alert("You won the game! Congratulations!");
    } else if (humanScore < computerScore) {
      alert("You lost the game! Better luck next time!");
    } else {
      alert("It's a tie! Play again to see who's the winner!");
    }
  }
}

playGame();
