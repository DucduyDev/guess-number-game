function main() {
  // define secret number between 1 and 20
  let secretNumber = randomNumber();
  let score = 20;
  let highScore = 0;

  function setScore(element, score) {
    if (score < 0) {
      displayMessage("😿 Game Over!");
    } else {
      element.textContent = score;
    }
  }

  function displayMessage(message) {
    document.querySelector(".message").textContent = message;
  }

  const scoreElement = document.querySelector(".score");
  const highScoreElement = document.querySelector(".highscore");
  setScore(scoreElement, score);
  setScore(highScoreElement, highScore);

  document.querySelector(".check").addEventListener("click", () => {
    const guess = +document.querySelector(".guess").value;
    // when there is no input
    if (!guess) {
      displayMessage("🙊 No Number!");
    } else if (guess !== secretNumber) {
      if (score >= 1) {
        displayMessage(guess > secretNumber ? "🙀 Too High" : "😿 Too Low");
        score--;
        setScore(scoreElement, score);
      }
    }

    // when player wins
    else {
      displayMessage("🎊 Correct!");
      document.body.style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";

      //   set high score
      if (score > highScore) {
        highScore = score;
        setScore(highScoreElement, highScore);
      }
    }
  });

  document.querySelector(".again").addEventListener("click", () => {
    //   reset the game
    score = 20;
    secretNumber = randomNumber();
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = null;
    document.body.style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
  });
}

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

main();
