function computerPlay() {
    let computerArray = ['Rock', 'Paper','Scissors'];
    let computerPick = Math.floor(Math.random() * computerArray.length);
    let item = computerArray[computerPick];
    return item;
}

function playRound(playerSelection, computerSelection) {
    // Takes player input, makes case insensitive
    let firstLetter = playerSelection[0].toUpperCase() ;
    let otherLetters = playerSelection.slice(1).toLowerCase();
    playerSelection = firstLetter + otherLetters;

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Rock') {
            return 'Draw!';
        } else if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors";     
        } else {
            return "Please select Rock, Paper, or Scissors";
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection == 'Paper') {
            return 'Draw!';
        } else if (computerSelection == 'Scissors') {
            return "You Lose! Scissors beats Paper";     
        } else {
            return "Please select Rock, Paper, or Scissors";
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection == 'Paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection == 'Scissors') {
            return "Draw!";     
        } else {
            return "Please select Rock, Paper, or Scissors";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
  for (let i=0; i<5; i++) {
    let playerPick = window.prompt("Please pick: Rock, Paper, or Scissors");
    let computerPick = computerPlay();
    let gameResults = playRound(playerPick,computerPick);
    console.log('Round '+(i+1)+' -- Player: '+playerPick+', PC: '+computerPick);
    
    if (gameResults.includes('You Win')) {
      playerScore++;
      console.log('You Won that round!');
    } else if (gameResults.includes('You Lose')) {
        computerScore++;
        console.log('You Lost that round!');
    } else {
        console.log('Its a draw')
        continue;
    }
  }
  
  if (playerScore > computerScore) {
    console.log('Winner: Player with '+playerScore+' wins!');  
    return "Congrats!";
  } else if (playerScore < computerScore) {
      console.log('Winner: Computer with '+computerScore+' wins!');
    return "Try again next time";
  } else {
    console.log('Its a draw at '+playerScore+' wins each');
    return "Draw - try again!";
  }
}
