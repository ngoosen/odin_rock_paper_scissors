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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let computerScore = 0;
let humanScore = 0;

const resultsP = document.querySelector("p#textResult");
const computerScoreSpan = document.querySelector("span#computerScore");
const humanScoreSpan = document.querySelector("span#humanScore");

function displayResult(result, computerChoice, humanChoice) {
  if (result === "tie") {
    resultsP.textContent = "It's a tie! Try again.";
  } else if (result === "win") {
    resultsP.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    humanScoreSpan.textContent = ++humanScore;
  } else {
    resultsP.textContent = `You loose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    computerScoreSpan.textContent = ++computerScore;
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    displayResult("tie", computerChoice, humanChoice);
    return;
  }

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      displayResult("lost", computerChoice, humanChoice);
    } else {
      displayResult("win", computerChoice, humanChoice);
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      displayResult("lost", computerChoice, humanChoice);
    } else {
      displayResult("win", computerChoice, humanChoice);
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      displayResult("lost", computerChoice, humanChoice);
    } else {
      displayResult("win", computerChoice, humanChoice);
    }
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
