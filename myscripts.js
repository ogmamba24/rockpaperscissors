function computerPlay() {
    let computerArray = ['Rock', 'Paper','Scissors'];
    
    let computerPick = Math.floor(Math.random() * computerArray.length);
    let item = computerArray[computerPick];

    return item;
}

function playRound(playerSelection, computerSelection) {
    // Takes player input, makes case insensitive
    let firstLetter = playerSelection[0].toUpperCase() 
    let otherLetters = playerSelection.slice(1).toLowerCase()
    playerSelection = firstLetter + otherLetters
    console.log(playerSelection)

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Rock') {
            return 'Draw!';
        } else if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors";     
        } else {
            return "Please select Rock, Paper, or Scissors"
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection == 'Paper') {
            return 'Draw!';
        } else if (computerSelection == 'Scissors') {
            return "You Lose! Scissors beats Paper";     
        } else {
            return "Please select Rock, Paper, or Scissors"
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection == 'Paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection == 'Scissors') {
            return "Draw!";     
        } else {
            return "Please select Rock, Paper, or Scissors"
        }
    }
    
}