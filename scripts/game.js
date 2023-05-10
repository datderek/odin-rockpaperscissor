// Track the rock paper scissor game for five rounds
let playerScore;
let computerScore;

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i + "...")
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(singleRound(computerSelection, playerSelection));
    }
    (playerScore > computerScore) ? console.log("You beat the computer!") : console.log("You lost to the computer!");
    
}
// Play a round of rock paper scissors

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
            return "It's a tie!";
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
            return "It's a tie!";
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
            return "It's a tie!";
        }
    }


}
// Prompt the player to choose
//     Ensure that input is case-insensitive
// Return a string of who wins the round
//     Generate the win message
// Start the next round
