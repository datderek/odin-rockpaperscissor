// Track the rock paper scissor game for five rounds
let playerScore = 0;
let computerScore = 0;

// Listens for player's move
const divs = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

divs.forEach(div => {
    div.addEventListener('click', e => {
        result.innerText = singleRound(getComputerChoice(), e.target.id);
        score.innerText = "Player: " + playerScore + "  Computer: " + computerScore;
    })
});

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

// Prompt the player to choose a move
function getPlayerChoice() {
    let playerChoice;
    let playerChoiceLC;
    // Prompt the player to choose a move
    do {
        playerChoice = prompt("Choose your move!");
        playerChoiceLC = playerChoice.toLowerCase();
    } while (!(playerChoiceLC == "rock" || playerChoiceLC == "paper" || playerChoiceLC == "scissor"))
    
    return playerChoiceLC;
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

