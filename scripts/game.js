// Track the rock paper scissor game for five rounds
let playerScore = 0;
let computerScore = 0;

// Select elements for message and eventListeners
const divs = document.querySelectorAll(".choice");
const score = document.querySelectorAll(".score");
const result = document.querySelector("#result");

// Play the game once the player selects a move.
divs.forEach(div => {
    div.addEventListener('click', e => game(e));
});

function game(event) {
    let roundMessage = singleRound(getComputerChoice(), event.target.id);
    if (playerScore == 5 || computerScore == 5) {
        printWinner();
    } else {
        printRound(roundMessage);
    }
}

// Prints the win message
function printWinner() {
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

