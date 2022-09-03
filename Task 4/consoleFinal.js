var playerChoice = "";
var result = "";
let computerPoints = 0;
let playerPoints = 0;

function computerPlay() {
  var options = ["Rock", "Paper", "Scissors"];
  var choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  document.getElementById("computersChoice").innerHTML = choice;

  conditions(playerChoice, choice);
}

function clicked(id) {
  playerChoice = id;
  var elements = document.getElementsByClassName("selected");
  while (elements.length > 0) {
    elements[0].classList.remove("selected");
  }

  console.log(id);
  const elem = document.getElementById(id);
  elem.classList.add("selected");
}

function conditions(playerChoice, computerChoice) {
  let rewrite = document.getElementById("result");

  if (playerChoice === computerChoice) {
    result = "This is a draw";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    computerPoints++;
    result = "Computer wins";
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    playerPoints++;
    result = "player wins";
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    computerPoints++;
    result = "Computer wins";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    playerPoints++;
    result = "player wins";
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    computerPoints++;
    result = "Computer wins";
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    playerPoints++;
    result = "player wins";
  }
  rewrite.innerHTML =
    result +
    ". " +
    `Player Score: ${playerPoints}. Computer Score: ${computerPoints}`;
  // game();
}

function game() {
  for (let i = 0; i < 5; i++) {
    if (result == "player wins") {
      playerPoints++;
      document.write("Player wins--> player has one point");
      document.write(playerPoints);
    } else if (result == "Computer wins") {
      computerPoints++;
      document.write("Computer wins--> computer has one point");
      document.write(computerPoints);
    } else if (result == "This is a draw") {
      document.write("This is a draw. No one has any point");
    }
  }
}
