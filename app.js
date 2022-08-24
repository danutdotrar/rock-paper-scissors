let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('#button');



// Return random computer item - Rock / Paper / Scissors
function computerPlay() {
    let item = ["rock", "paper", "scissors"]
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
    
    //Player wins
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection =='rock')) {

        playerScore += 1

        result = ('Player win! ' + playerSelection + ' beats ' + computerSelection)

        if (playerScore == 5) {
            finalResult = ("Player wins the game! Reload the page to play again.")
            disableButtons();
            restart.style.display = '';
        }
    }

    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie! You both choose ' + playerSelection)
    }

    else {
        computerScore += 1
        result = ('Player lose! ' + computerSelection + ' beats ' + playerSelection)

        if (computerScore == 5) {
            finalResult = ("Computer wins the game! Reload the page to play again")
            disableButtons();
            restart.style.display = '';
        }
    }

    playerScoreView = ("Player Score: " + playerScore)
    computerScoreView = ("Computer score: " + computerScore)

    document.querySelector('.result').textContent = result
    document.querySelector('.player-score').textContent = playerScoreView
    document.querySelector('.computer-score').textContent = computerScoreView
    document.querySelector('.final-result').textContent = finalResult
    return
}

document.querySelector(".player-score").innerHTML = `Player Score: ${playerScore}`;
document.querySelector(".computer-score").innerHTML = `Computer Score: ${playerScore}`;

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
    document.querySelector('.player-score').textContent = `Player Score: ${playerScore}`;
    document.querySelector('.computer-score').textContent = `Computer Score: ${playerScore}`;
    document.querySelector('.result').innerHTML = "";
    document.querySelector('.final-result').innerHTML = "";
    restart.style.display = 'none';

    buttons.forEach(elem => {
        elem.disabled = false
    })

}








