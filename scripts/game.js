// Track the rock paper scissor game for five rounds
// Play a round of rock paper scissors

let computerChoice;


// Computer chooses a random choice
function getComputerChoice() {
    let choice;
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        choice = "Rock";
    } else if (randNum == 2) {
        choice = "Paper";
    } else if (randNum == 3) {
        choice = "Scissor";
    }
    return choice;
}
// Prompt the player to choose
//     Ensure that input is case-insensitive
// Return a string of who wins the round
//     Generate the win message
// Start the next round
