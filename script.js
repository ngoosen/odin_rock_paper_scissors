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
  const userChoice = prompt("Please enter Rock, Paper or Scissors: ");
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
    humanChoice = humanChoice.toLowerCase();

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
    console.log("🚀 ~ playGame ~ roundResult:", roundResult);

    round++;
  }

  if (humanScore > computerScore) {
    alert("You won the game! Congratulations!");
  } else if (humanScore < computerScore) {
    alert("You lost the game! Better luck next time!");
  } else {
    alert("It's a tie! Play again to see who's the winner!");
  }
}

playGame();
