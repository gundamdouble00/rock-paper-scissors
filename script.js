const rock = "rock",
  paper = "paper",
  scissors = "scissors";

function getComputerChoice() {
  let randomVal = Math.random();
  if (randomVal <= 0.3) {
    return paper;
  }

  if (randomVal <= 0.6) {
    return scissors;
  }

  return rock;
}

function getHumanChoice() {
  let choice = prompt("What's your choie? (rock, paper or scissors)");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  humanChoice[0] = humanChoice[0].toUpperCase();
  computerChoice[0] = computerChoice[0].toUpperCase();
  if (humanChoice == computerChoice) {
    return `Same choice (${humanChoice})`;
  }

  if (
    (humanChoice == rock && computerChoice == scissors) ||
    (humanChoice == paper && computerChoice == rock) ||
    (humanChoice == scissors && computerChoice == paper)
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }

  computerScore++;
  return `You lose! ${computerChoice} beats ${humanChoice}`;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice(),
      computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
  }
  if (humanScore == computerScore) {
    console.log("Final result: You (human) win!");
    return;
  }

  console.log("Final result: The computer win!");
}

playGame();
