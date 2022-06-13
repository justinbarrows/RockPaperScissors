function askPlayer() {
	const input = prompt('Rock, Paper, Scissors?').toLowerCase();
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function pickRandom() {
	const randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return 'Rock';
  } else if (randomInt === 1) {
    return 'Paper';
  } else {
    return 'Scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return (`You win! ${playerSelection} beats ${computerSelection}`)
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return (`You win! ${playerSelection} beats ${computerSelection}`)
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return (`You win! ${playerSelection} beats ${computerSelection}`)
  } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    return (`You lose! ${computerSelection} beats ${playerSelection}`)
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    return (`You lose! ${computerSelection} beats ${playerSelection}`)
  } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    return (`You lose! ${computerSelection} beats ${playerSelection}`)
  } else if (playerSelection == computerSelection) {
    return (`It's a tie, Refresh to play again!`)
  } else {
    return (`Error. Only enter Rock, Paper, or Scissors`)
  }
}

alert(playRound(askPlayer(), pickRandom()));