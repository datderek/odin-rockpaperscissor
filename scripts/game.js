// Track the rock paper scissor game for five rounds
let playerScore = 0;
let computerScore = 0;
let roundMessage = "";
let movesPlayed = "";

// Intialize reference elements for message and eventListeners
const intro = document.querySelector("#intro");
const titleWords = document.querySelectorAll(".title-word");
const message = document.querySelectorAll("#message > p");
const choiceWrapper = document.querySelector(".choices");
const choiceButtons = document.querySelectorAll(".choice");
const score = document.querySelector(".scores");
const playButton = document.querySelector(".playButton");

// Play the game once the player selects a move.
choiceButtons.forEach(choice => {
    choice.addEventListener('click', game);
});

// Runs the game and prints the round results
function game(event) {
    let computerChoice = getComputerChoice();
    let playerChoice = event.currentTarget.id;
    let result = singleRound(computerChoice, playerChoice);
    if (playerScore == 5 || computerScore == 5) {
        endGame();
        createPlayButton();
    } else {
        printResults(result, computerChoice, playerChoice);
    }
}

// Computer chooses a random move
function getComputerChoice() {
    let choice;
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        choice = "Rock";
    } else if (randNum == 2) {
        choice = "Paper";
    } else if (randNum == 3) {
        choice = "Scissors";
    }
    return choice;
}
// Simulates a single round of rock paper scissors
function singleRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
    } else if ( (playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper") ) {
        playerScore += 1;
        return 1;
    } else {
        computerScore += 1;
        return -1;
    }
}

// Prints the round message
function printResults(result, computerChoice, playerChoice) {
    const dot = document.createElement("div");
    if (result == 0) {
        roundMessage = "It's a Tie";
        movesPlayed = `You both chose ${computerChoice}`;
        dot.classList.add("dot", "tie");
    } else if (result == 1) {
        if (playerScore == 1) {
            roundMessage = "A masterful win!";
        } else if (playerScore == 2) {
            roundMessage = "It's starting to look good."
        } else if (playerScore == 3) {
            roundMessage = "One step closer to victory!";
        } else if (playerScore == 3) {
            roundMessage = "The scent of victory is in the air";
        } else if (playerScore == 4) {
            roundMessage = "Get ready to eat!";
        }
        movesPlayed = `${playerChoice} beats ${computerChoice}`;
        dot.classList.add("dot", "win");
    } else if (result == -1) {
        if (computerScore == 1) {
            roundMessage = "They just got lucky.";
        } else if (computerScore == 2) {
            roundMessage = "The pressure's on!";
        } else if (computerScore == 3) {
            roundMessage = "There's still a chance...";
        } else if (computerScore == 3) {
            roundMessage = "Better start making dinner plans.";
        } else if (computerScore == 4) {
            roundMessage = "Defeat is near...";   
        }
        movesPlayed = `${computerChoice} beats ${playerChoice}`;
        dot.classList.add("dot", "lose");
    }
    message[0].innerText = roundMessage;
    message[1].innerText = movesPlayed;
    score.appendChild(dot);
}

// Ends the game when there is a winner
function endGame() {
    choiceButtons.forEach(choice => {
        choice.removeEventListener('click', game);
    });
    message[0].innerText = (playerScore == 5) ? "You won!" : "You lost!";
    message[1].innerText = (playerScore == 5) ? "Sit back and relax. Your victory banquet awaits." : "Better figure out what's for dinner.";
}

// Generates the play again button
function createPlayButton() {
    choiceWrapper.classList.replace("show", "hide");
    playButton.classList.replace("hide", "show");
    playButton.addEventListener("click", resetGame);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    message[0].innerText = "First to five points wins";
    message[1].innerText = "Choose your move";
    score.innerHTML = "";

    choiceWrapper.classList.replace("hide", "show");
    playButton.classList.replace("show", "hide");
    choiceButtons.forEach(choice => {
        choice.addEventListener('click', game);
    });
    playButton.removeEventListener("click", resetGame);
}

// Animate the introduction sequence
intro.addEventListener("animationend", () => {
    intro.classList.replace("show", "hide");
    titleWords[0].classList.replace("hide", "show");
});

titleWords[0].addEventListener("animationend", () => {
    titleWords[0].innerText = "";
    titleWords[0].classList.replace("show", "hide");
    titleWords[1].classList.replace("hide", "show");
});

titleWords[1].addEventListener("animationend", () => {
    titleWords[1].innerText = "";
    titleWords[1].classList.replace("show", "hide");
    titleWords[2].classList.replace("hide", "show");
});

titleWords[2].addEventListener("animationend", () => {
    titleWords[2].innerText = "";
    titleWords[2].classList.replace("show", "hide");
    message[0].classList.add("show");
});

// Animate the game board sequence
message[0].addEventListener("animationend", () => {
    message[1].classList.add("show");
});

message[1].addEventListener("animationend", () => {
    choiceButtons[0].classList.add("show");
});

choiceButtons[0].addEventListener("animationend", () => {
    choiceButtons[1].classList.add("show");
});

choiceButtons[1].addEventListener("animationend", () => {
    choiceButtons[2].classList.add("show");
});


