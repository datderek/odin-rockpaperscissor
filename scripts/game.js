// Track the rock paper scissor game for five rounds
let playerScore = 0;
let computerScore = 0;
let roundMessage = "";
let movesPlayed = "";

// Select elements for message and eventListeners
const choices = document.querySelectorAll(".choice");
const score = document.querySelector(".scores");
const result = document.querySelector(".game-result");
const moves = document.querySelector(".game-message");
const intro = document.querySelector(".intro");
const title = document.querySelector(".title");
const titleWords = document.querySelectorAll(".title-word");

const message = document.querySelectorAll("#message > p");

// Animate the introduction sequence
intro.addEventListener("animationend", () => {
    intro.classList.add("hide");
    titleWords[0].classList.remove("hide");
    titleWords[0].classList.add("show");
});

titleWords[0].addEventListener("animationend", () => {
    titleWords[0].innerText = "";
    titleWords[1].classList.remove("hide");
    titleWords[1].classList.add("show");
});

titleWords[1].addEventListener("animationend", () => {
    titleWords[1].innerText = "";
    titleWords[2].classList.remove("hide");
    titleWords[2].classList.add("show");
});

titleWords[2].addEventListener("animationend", () => {
    titleWords[2].innerText = "";
    title.classList.add("hide");
    message[0].classList.add("show");
});

// Animate the game board sequence
message[0].addEventListener("animationend", () => {
    message[1].classList.add("show");
});

message[1].addEventListener("animationend", () => {
    divs[0].classList.add("show");
});
divs[0].addEventListener("animationend", () => {
    divs[1].classList.add("show");
});

divs[1].addEventListener("animationend", () => {
    divs[2].classList.add("show");
});

// Play the game once the player selects a move.
choices.forEach(choice => {
    choice.addEventListener('click', game);
});

// Runs the game and prints the round results
function game(event) {
    singleRound(getComputerChoice(), event.currentTarget.id);
    if (playerScore == 5 || computerScore == 5) {
        endGame();
        playAgain();
    } else {
        printResults();
    }
}

// Ends the game when there is a winner
function endGame() {
    divs.forEach(div => {
        div.removeEventListener('click', game);
    });
    result.innerText = (playerScore == 5) ? "You won!" : "You lost!";
    moves.innerText = (playerScore == 5) ? "Sit back and relax." : "Better figure out what's for dinner.";
    playerScore = 0;
    computerScore = 0;
}

// Generates the play again button
function playAgain() {

}

// Prints the round message
function printResults() {
    result.innerText = roundMessage;
    moves.innerText = movesPlayed;
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
    const dot = document.createElement("div");
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            roundMessage = "It's a Tie!";
            movesPlayed = "You both chose Rock";
            dot.classList.add("dot", "tie");
        } else if (computerSelection == "paper") {
            computerScore += 1;
            roundMessage = "You Lose!";
            movesPlayed = "Paper beats Rock";
            dot.classList.add("dot", "lose");
        } else {
            playerScore += 1;
            roundMessage = "You Won!";
            movesPlayed = "Rock beats Scissors";
            dot.classList.add("dot", "win");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore += 1;
            roundMessage = "You Won!";
            movesPlayed = "Paper beats Rock";
            dot.classList.add("dot", "win");
        } else if (computerSelection == "paper") {
            roundMessage = "It's a Tie!";
            movesPlayed = "You both chose Paper";
            dot.classList.add("dot", "tie");
        } else {
            computerScore += 1;
            roundMessage = "You Lose!";
            movesPlayed = "Scissors beats Paper";
            dot.classList.add("dot", "lose");
        }
    } else {
        if (computerSelection == "rock") {
            computerScore += 1;
            roundMessage = "You Lose!";
            movesPlayed = "Rock beats Scissors";
            dot.classList.add("dot", "lose");
        } else if (computerSelection == "paper") {
            playerScore += 1;
            roundMessage = "You Won!";
            movesPlayed = "Scissors beats Paper";
            dot.classList.add("dot", "win");
        } else {
            roundMessage = "It's a Tie!";
            movesPlayed = "You both chose Scissors";
            dot.classList.add("dot", "tie");
        }
    }
    score.appendChild(dot);
}

