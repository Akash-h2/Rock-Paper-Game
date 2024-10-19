let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length); 
  return options[randIdx];
};


const drawGame = () => {
  msg.innerText = "It's a Draw! Try again.";
  msg.style.backgroundColor = "#081b31";
};

const showResult = (isUserWin, userChoice, compChoice) => {
  if (isUserWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
};


const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    const isUserWin = checkWinner(userChoice, compChoice);
    showResult(isUserWin, userChoice, compChoice);
  }
};


const checkWinner = (userChoice, compChoice) => {
  const winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winningCombinations[userChoice] === compChoice;
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
