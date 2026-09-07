const ROCK = "Rock",
  PAPER = "Paper",
  SCISSORS = "Scissors";
const ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomVal = Math.random();
  if (randomVal <= 0.3) {
    return PAPER;
  }

  if (randomVal <= 0.6) {
    return SCISSORS;
  }

  return ROCK;
}

function checkWinner(score, winner) {
  if (score < ROUNDS) {
    return;
  }

  let finalResultMsg = "";
  if (winner == "human") {
    finalResultMsg = "You win!!!";
  } else {
    finalResultMsg = "The computer wins!!!";
  }

  finalResult.textContent = finalResultMsg;
  instruction.textContent = "Please reload the browser for playing again.";
}

function playRound(event) {
  const humanChoice = event.currentTarget.textContent,
    computerChoice = getComputerChoice();
  humanScoreMsg.textContent = humanScore;
  computerScoreMsg.textContent = computerScore;
  if (humanChoice == computerChoice) {
    resultPerRound.textContent = `Same choice: (${humanChoice})`;
    return;
  }

  if (
    (humanChoice == ROCK && computerChoice == SCISSORS) ||
    (humanChoice == PAPER && computerChoice == ROCK) ||
    (humanChoice == SCISSORS && computerChoice == PAPER)
  ) {
    humanScore++;
    humanScoreMsg.textContent = humanScore;
    resultPerRound.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    checkWinner(humanScore, "human");
    return;
  }

  computerScore++;
  computerScoreMsg.textContent = computerScore;
  resultPerRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  checkWinner(computerScore, "computer");
}

const rockBtn = document.querySelector(".rock"),
  paperBtn = document.querySelector(".paper"),
  scissorsBtn = document.querySelector(".scissors");

const resultPerRound = document.querySelector(".result-per-round"),
  humanScoreMsg = document.querySelector(".human-score"),
  computerScoreMsg = document.querySelector(".computer-score");
const finalResult = document.querySelector(".final-result"),
  instruction = document.querySelector(".instruction");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
