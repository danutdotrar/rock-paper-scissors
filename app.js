// Return random item - Rock / Paper / Scissors
function computerPlay() {

    let item = ["rock", "paper", "scissors"]
    return item[Math.floor(Math.random() * item.length)];
}


console.log(computerPlay())

// Play one round and show winner
