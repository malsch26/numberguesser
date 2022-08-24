let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
return Math.floor(Math.random() * 10)
};

const compareGuesses = (humanGuess,computerGuess,secretNumber) => {
  const humanDifference = Math.abs(secretNumber - humanGuess);
  const computerDifference = Math.abs(secretNumber - computerGuess);

  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
if (winner === 'human') {
  humanScore++; 
} else if (winner === 'computer'){
  computerScore++;
}
};

const advanceRound = () => currentRoundNumber++;
