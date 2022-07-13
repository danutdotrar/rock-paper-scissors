const item = ["rock", "paper", "scissors"]

var tie = 0;
var player = 0;
var computer = 0;

// Return random computer item - Rock / Paper / Scissors
function computerPlay() {
    return item[Math.floor(Math.random() * item.length)];
}

// Takes a valid input from the user
let playerSelection = prompt("Type in your figher: rock, paper or scissors").toLowerCase();

// Play round and count them
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tie++;
        return console.log("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        player++;
        return console.log("Player wins! Rock beats scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        player++;
        return console.log("Player wins! Paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        player++;
        return console.log("Player wins! Scissors beats paper!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computer++;
        return console.log("Computer wins! Rock beats scissors!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computer++;
        return console.log("Computer wins! Paper beats rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computer++;
        return console.log("Computer wins! Scissors beat paper");
    } else {
        console.log("You need to choose from rock, paper or scissors");
    }
}

// Final result comparision
function result(){
    if ((tie > player) && (tie > computer)){
        console.log("Final result - It's a tie!")
    } else if (player > computer){
        console.log("Final result - Player win! :)")
    } else {
        console.log("Final result - Player lose! :(")
    }
}

// Play the game for 5 rounds
for (let count = 0; count < 5; count++) {
    let computerSelection = computerPlay();
    console.log("Computer plays:" + computerSelection);
    
    // Call function to play round of game
    playRound(playerSelection, computerSelection);
}

result();
