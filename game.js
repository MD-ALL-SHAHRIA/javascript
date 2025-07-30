let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

/*
    if(score === null)
  {
    score = {
      wins :0,
    losses :0,
    ties : 0


    };
  }
    */

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "you lose";
    } else if (computerMove === "Paper") {
      result = "you win";
    } else {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "you win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else {
      result = "you lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "you lose";
    } else {
      result = "you win";
    }
  }

  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(".js-results").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You 
      <img src="icons/${playerMove}-emoji.png" class="rz-icon"/>
      <img src="icons/${computerMove}-emoji.png" class="rz-icon"/>
      Computer`;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
