const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MIDDLE_SQUARE = '5';

const WINNING_MATCH_SCORE = 2;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}


function askToPlay() {
  prompt('Rematch? (y or n)');
  let answer = readline.question();

  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question();
  }
  return answer;
}

function askWhoGoesFirst() {
  prompt('Who will make the first move? player (p) or computer (c) ');

  let answer = readline.question();

  while (answer !== 'p' && answer !== 'c') {
    prompt('Invalid choice. Please select p for player or c for computer.');
    answer = readline.question();
  }
  return answer;
}

function gamePlay(currentPlayer, board) {
  if (currentPlayer === 'p') {
    return playerChoosesSquare(board);
  } else {
    return computerChoosesSquare(board);
  }
}

function switchPlayer(player) {
  if (player === 'p') {
    return 'c';
  } else {
    return 'p';
  }
}

function displayGreeting(roundCount, playerScore, computerScore) {
  console.log('+----------------------------------------------+');
  console.log("|           Let's play Tic Tac Toe.            |");
  console.log(`|  The first to score ${WINNING_MATCH_SCORE} points wins the match. |`);
  console.log("| If a tie occurs, the round will be replayed. |");
  console.log('+----------------------------------------------+');
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`Round: ${roundCount} | Player Score: ${playerScore} | Computer Score: ${computerScore}`);
}

function displayBoard(board, roundCount, playerScore, computerScore) {
  console.clear();

  displayGreeting(roundCount, playerScore, computerScore);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(array, delimiter = ', ', conjunction = 'or') {
  if (array.length <= 1) {
    return array.join('');
  } else if (array.length === 2) {
    return array.join(` ${conjunction} `);
  } else {
    return array.slice(0, array.length - 1).join(delimiter) + delimiter + conjunction + " " + array[array.length - 1];
  }
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim(); // input trimmed to allow spaces

    if (emptySquares(board).includes(square)) break; // break if it's a valid square

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}


function findCriticalSquare(board, marker) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    square = findAtRiskSquare(WINNING_LINES[index], board, marker);

    if (square) return square;
  }
  return square;
}

function computerMakesOffenseMove(board) {
  return findCriticalSquare(board, COMPUTER_MARKER);
}

function computerMakesDefenseMove(board) {
  return findCriticalSquare(board, HUMAN_MARKER);
}

function computerChoosesMiddleSquare() {
  return MIDDLE_SQUARE;
}

function computerChoosesRandomSquare(board) {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  square = emptySquares(board)[randomIndex];

  return square;
}

function computerChoosesSquare(board) {
  let square = computerMakesOffenseMove(board) ||
  computerMakesDefenseMove(board) ||
  computerChoosesMiddleSquare() ||
  computerChoosesRandomSquare(board);

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonRound(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function incrementRoundAndScore(board) {
  if (detectWinner(board) === 'Player') {
    roundCount += 1;
    playerScore += 1;
  } else if (detectWinner(board) === 'Computer') {
    roundCount += 1;
    computerScore += 1;
  }
}

function displayMatchWinner(board, playerScore, computerScore) {
  if (playerScore === WINNING_MATCH_SCORE ||
    computerScore === WINNING_MATCH_SCORE) {
    console.log('+----------------------------------------------+');
    console.log(`|            ${detectWinner(board)} wins the match           |`);
    console.log('+----------------------------------------------+');
  }
}

function someoneWonOverall(playerScore, computerScore) {
  return playerScore === WINNING_MATCH_SCORE ||
  computerScore === WINNING_MATCH_SCORE;
}

function resetRoundAndScore() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
}

while (true) {
  let board = initializeBoard();
  let currentPlayer = askWhoGoesFirst();

  while (true) {
    displayBoard(board, roundCount, playerScore, computerScore);
    gamePlay(currentPlayer, board);
    if (someoneWonRound(board) || boardFull(board)) break; // check for winner each turn
    currentPlayer = switchPlayer(currentPlayer); // if no winner, switch to next player
  }

  if (someoneWonRound(board)) {
    incrementRoundAndScore(board);
    displayBoard(board, roundCount, playerScore, computerScore);
    console.log(`${detectWinner(board)} won!`);
  } else {
    displayBoard(board, roundCount, playerScore, computerScore);
    console.log("It's a tie!");
  }

  displayMatchWinner(board, playerScore, computerScore);

  if (someoneWonOverall(playerScore, computerScore)) {
    let replayAnswer = askToPlay();
    if (replayAnswer === 'n') {
      break;
    } else {
      resetRoundAndScore();
    }
  } else {
    console.log('Winner cannot be determined yet. Press y to continue the next round or n to exit the match early.');
    let answer = askToPlay();
    if (answer === 'n') break;
  }

}

prompt('Thanks for playing Tic Tac Toe!');
