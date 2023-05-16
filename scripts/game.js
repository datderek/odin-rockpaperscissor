// Track the rock paper scissor game for five rounds
let playerScore = 0;
let computerScore = 0;

// Select elements for message and eventListeners
const divs = document.querySelectorAll(".choice");
const score = document.querySelectorAll(".score");
const result = document.querySelector("#result");

const intro = document.querySelector(".intro");
const title = document.querySelector(".title");
const titleWords = document.querySelectorAll(".title-word");

// Animate the introduction sequence
intro.addEventListener("animationend", () => {
    intro.classList.add("hide")
    titleWords[0].classList.remove("hide")
    titleWords[0].classList.add("show");
});

titleWords[0].addEventListener("animationend", () => {
    titleWords[0].innerText = "";
    titleWords[1].classList.remove("hide")
    titleWords[1].classList.add("show");
});
titleWords[1].addEventListener("animationend", () => {
    titleWords[1].innerText = "";
    titleWords[2].classList.remove("hide")
    titleWords[2].classList.add("show");
});

titleWords[2].addEventListener("animationend", () => {
    titleWords[2].innerText = "";
    title.classList.add("hide");
});


// Play the game once the player selects a move.
divs.forEach(div => {
    div.addEventListener('click', game);
});

// Runs the game and prints the round results
function game(event) {
    let roundMessage = singleRound(getComputerChoice(), event.target.id);
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    } else {
        printRound(roundMessage);
    }
}

// Ends the game when there is a winner
function endGame() {
    divs.forEach(div => {
        div.removeEventListener('click', game);
    });

    playerScore = 0;
    computerScore = 0;
    score[0].innerText = "";
    score[1].innerText = "";
    result.innerText = (playerScore == 5) ? "You beat the Computer!" : "You lost to the Computer!";
}

// Prints the round message
function printRound(roundMessage) {
    score[0].innerText = "Player: " + playerScore;
    score[1].innerText = "Computer: " + computerScore;
    result.innerText = roundMessage;
}

// Computer chooses a random move
function getComputerChoice() {
    let choice;
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        choice = "rock";
    } else if (randNum == 2) {
        choice = "paper";
    } else if (randNum == 3) {
        choice = "scissor";
    }
    return choice;
}

// Simulates a single round of rock paper scissors
function singleRound(computerSelection, playerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a Tie!";
        } else if (computerSelection == "paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock.";
        } else {
            playerScore += 1;
            return "You Won! Rock beats Scissor.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore += 1;
            return "You Won! Paper beats Rock";
        } else if (computerSelection == "paper") {
            return "It's a Tie!";
        } else {
            computerScore += 1;
            return "You Lose! Scissor beats Paper.";
        }
    } else {
        if (computerSelection == "rock") {
            computerScore += 1;
            return "You Lose! Rock beats Scissor.";
        } else if (computerSelection == "paper") {
            playerScore += 1;
            return "You Won! Scissor beats Paper.";
        } else {
            return "It's a Tie!";
        }
    }
}

