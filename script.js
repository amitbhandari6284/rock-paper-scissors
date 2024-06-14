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

function getHumanChoice(e) {
  let playerChoice = e.target.id;
  playRound(playerChoice, getComputerChoice());
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let Round = 1;

function playRound(humanChoice, computerChoice) {
  winningRule = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  let roundResult = "";
  if (humanChoice === computerChoice) {
    computerScore += 1;
    humanScore += 1;
    roundResult = "It's a tie!";
  } else if (winningRule[humanChoice] === computerChoice) {
    humanScore += 1;
    roundResult = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    roundResult = `You lose this round! ${computerChoice} beats ${humanChoice}`;
  }
  roundWinner(roundResult);
  checkWinner();
  Round++;
}

function roundWinner(rResult) {
  result.innerHTML = `
    Round: ${Round}<br>
    ${rResult}<br>
    Human Score: ${humanScore}<br>
    Computer Score: ${computerScore}<br>
    Tie Score: ${tieScore}`;
}

function checkWinner() {
  if (Round == 5) {
    if (computerScore == humanScore) {
      title.textContent = "Game Result:";
      gameResult.innerHTML = `
          Tie<br> 
          Human Score : ${humanScore}<br>
          Computer Score : ${computerScore}<br>
          Tie Score : ${tieScore}`;
    } else if (humanScore > computerScore) {
      title.textContent = "Game Result:";
      gameResult.innerHTML = `
          Human WON<br> 
          Human Score : ${humanScore}<br>
          Computer Score : ${computerScore}<br>
          Tie Score : ${tieScore}`;
    } else {
      title.textContent = "Game Result:";
      gameResult.innerHTML = `
          Computer WON<br> 
          Human Score : ${humanScore}<br>
          Computer Score : ${computerScore}<br>
          Tie Score : ${tieScore}`;
    }
    rock.removeEventListener("click", getHumanChoice);
    paper.removeEventListener("click", getHumanChoice);
    scissors.removeEventListener("click", getHumanChoice);
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const title = document.querySelector("#rTitle");
const gameResult = document.querySelector("#gameResult");
const reset = document.querySelector("#reset");

reset.addEventListener("click", () => location.reload());
rock.addEventListener("click", getHumanChoice);
paper.addEventListener("click", getHumanChoice);
scissors.addEventListener("click", getHumanChoice);
