let playerScore = 0;
let computerScore = 0;
let playerChoice = "?";
let computerChoice = "?";

const buttons = document.querySelectorAll('#button');



// Return random computer item - Rock / Paper / Scissors
function computerPlay() {
    let item = ["Rock", "Paper", "Scissors"]
    return item[Math.floor(Math.random() * item.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// Play round and count them
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = ""
    let playerScoreView = ""
    let computerScoreView = ""
    let finalResult = ""
    let playerChoice = "?"
    let computerChoice = "?"
    
    //Player wins
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
       (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
       (playerSelection == 'Paper' && computerSelection =='Rock')) {

        playerScore += 1
        result = ('Player win! ' + playerSelection + ' beats ' + computerSelection)

        if (playerScore == 5) {
            finalResult = ("Player wins the game! Press Restart to play again.")
            disableButtons();
            restart.style.display = '';
        }
    }

    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie! You both chose ' + playerSelection)
    }

    else {
        computerScore += 1
        result = ('Player lose! ' + computerSelection + ' beats ' + playerSelection)

        if (computerScore == 5) {
            finalResult = ("Computer wins the game! Press Restart to play again.")
            disableButtons();
            restart.style.display = '';
        }
    }

    playerScoreView = (playerScore)
    computerScoreView = (computerScore)

    playerChoice = (playerSelection)
    computerChoice = (computerSelection)

    document.querySelector('.result').textContent = result
    document.querySelector('.player-score').textContent = playerScoreView
    document.querySelector('.computer-score').textContent = computerScoreView
    document.querySelector('.final-result').textContent = finalResult
    document.querySelector('.player-choice').textContent = playerChoice
    document.querySelector('.computer-choice').textContent = computerChoice
    return
}

// Show current score
document.querySelector(".player-score").innerHTML = `${playerScore}`;
document.querySelector(".computer-score").innerHTML = `${playerScore}`;

// Show current choice
document.querySelector(".player-choice").innerHTML = `${playerChoice}`;
document.querySelector(".computer-choice").innerHTML = `${computerChoice}`;



buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

// Select the restart button and add event to it
const restart = document.querySelector('.restart');
restart.addEventListener('click', restartGame);

// hide the Restart button
restart.style.display = 'none';


function restartGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.player-score').innerHTML = `${playerScore}`;
    document.querySelector('.computer-score').innerHTML = `${playerScore}`;
    document.querySelector('.player-choice').innerHTML = "?";
    document.querySelector('.computer-choice').innerHTML = "?";
    document.querySelector('.result').innerHTML = "Choose your weapon!";
    document.querySelector('.final-result').innerHTML = "";
    restart.style.display = 'none';

    buttons.forEach(elem => {
        elem.disabled = false
    })

}








