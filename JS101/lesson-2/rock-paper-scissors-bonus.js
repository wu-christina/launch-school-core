const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'l', 'sp']; // r for rock, p for paper, s for scissors, l for lizard, sp for spock
const WINNING_COMBOS = {
  r: ['s', 'l'],
  p: ['r', 'sp'],
  s: ['p', 'l'],
  l: ['p', 'sp'],
  sp: ['r', 's']
};
const WINNING_SCORE = 3;

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelcomeMessage() {
  console.log("\nLet's play Rock Paper Scissors Spock Lizard!\n");
  console.log('Rules of the game:\n\nScissors cuts Paper covers Rock crushes Lizard poisons Spock smashes Scissors decapitates Lizard eats Paper disproves Spock vaporizes Rock crushes Scissors\n');
  console.log('Good luck!');
}

function invalidPlayerChoices(choice) {
  return !VALID_CHOICES.includes(choice);
}

function askPlayerChoice() {
  prompt(`Make a choice: r for rock | p for paper | s for scissors | l for lizard | sp for spock`);
  let playerChoice = readline.question().toLowerCase();

  while (invalidPlayerChoices(playerChoice)) {
    prompt('Try again. Valid choices are: r for rock | p for paper | s for scissors | l for lizard | sp for spock');
    playerChoice = readline.question().toLowerCase();
  }

  return playerChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function playerWins(playerChoice, computerChoice) {
  return WINNING_COMBOS[playerChoice].includes(computerChoice);
}

function convertAbbreviatedChoiceToName(choice) {
  let choiceNames = {
    r: 'rock',
    p: 'paper',
    s: 'scissors',
    l: 'lizard',
    sp: 'spock'
  };

  return choiceNames[choice];
}

function displayWinner(playerChoice, computerChoice) {
  let playerChoiceName = convertAbbreviatedChoiceToName(playerChoice);
  let computerChoiceName = convertAbbreviatedChoiceToName(computerChoice);

  console.log(`You picked ${playerChoiceName} and the computer picked ${computerChoiceName}.`);

  if (playerWins(playerChoice, computerChoice)) {
    console.log('You win this round!');
  } else if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log(`Computer wins this round!`);
  }
}

function printRoundAndScore(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    roundCount += 1;
    playerScore += 1;
  } else if (playerWins(computerChoice, playerChoice)) {
    roundCount += 1;
    computerScore += 1;
  }

  console.log(`Round: ${roundCount} | Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  console.log(`-----------------------------------------------------------------------------------------`);
}

function displayGrandWinner(playerScore, computerScore) {
  if (playerScore === WINNING_SCORE) {
    console.log(`Congrats! You're the grand winner!`);
  } else if (computerScore === WINNING_SCORE) {
    console.log(`Sorry, the computer is the grand winner. Better luck next time!`);
  }
}

function askToReplay() {
  prompt('Play again?\n (y/n)');
  let answer = readline.question();

  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question();
  }
  return answer;
}

function resetRoundAndScore() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
}


// start game
displayWelcomeMessage();

while (true) {
  let playerChoice = askPlayerChoice();
  let computerChoice = getComputerChoice();
  console.clear();

  displayWinner(playerChoice, computerChoice, playerScore, computerScore);
  printRoundAndScore(playerChoice, computerChoice);

  if (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    displayGrandWinner(playerScore, computerScore);

    let answer = askToReplay();

    if (answer !== 'y') {
      console.log('\nThanks for playing!\n');
      break;
    } else {
      resetRoundAndScore();
      console.clear();
    }
  }
}
