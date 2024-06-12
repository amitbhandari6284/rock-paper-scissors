console.log("(Rock, Paper, Scissors) by AB");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice: Rock, Paper, Scissors");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    alert("Enter a valid choice");
    return getHumanChoice();
  } else {
    return humanChoice;
  }
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(humanChoice, computerChoice) {
  winningRule = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (humanChoice === computerChoice) {
    tieScore+=1
    alert(
      `Round: ${Round} \nIt's a tie! \nHuman Score : ${humanScore} \nComputer Score : ${computerScore} \nTie Score : ${tieScore}`
    );
  } else if (winningRule[humanChoice] === computerChoice) {
    humanScore += 1;
    alert(
      `Round: ${Round} \nYou win this round!, ${humanChoice} beats ${computerChoice} \nHuman Score : ${humanScore} \nComputer Score : ${computerScore} \nTie Score : ${tieScore}`
    );
  } else {
    computerScore += 1;
    alert(
      `Round: ${Round} \nYou lose this round!, ${computerChoice} beats ${humanChoice} \nHuman Score : ${humanScore} \nComputer Score : ${computerScore} \nTie Score : ${tieScore}`
    );
  }
}

let Round = 1;
function playGame() {
  while (Round <= 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    Round++;
  }
  humanScore == computerScore
    ? alert(
        `This game is a Tie \nHuman Score : ${humanScore} \nComputer Score : ${computerScore} \nTie Score : ${tieScore}`
      )
    : humanScore > computerScore
    ? alert(
        `Human won this game \nHuman Score : ${humanScore} \nComputer Score : ${computerScore} \nTie Score : ${tieScore}`
      )
    : alert(
        `Computer won this game \nHuman Score : ${humanScore} \nComputer Score : ${computerScore} \nTie Score : ${tieScore}`
      );
}

playGame();
