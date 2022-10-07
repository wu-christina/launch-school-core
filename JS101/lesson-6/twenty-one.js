// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//  - repeat until bust or stay
// 4. If player bust, dealer wins
// 5. Dealer turn: hit or stay
//  - repeat until total >= 17
// 6. If dealer busts, player wins
// 7. Compare cards and declare winner

const readline = require('readline-sync');

const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const CARD_SUITS = ['D', 'C', 'H', 'S'];
const MAX_VALUE = 21;
const MAX_DEALER_HIT_VALUE = 17;

// shuffle an array
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

// initialize the deck
function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < CARD_SUITS.length; suitIndex++) {
    let suit = CARD_SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < CARD_VALUES.length; valueIndex++) {
      let value = CARD_VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }
  return shuffle(deck);
}


// calculate total value of cards
function calculateTotalValue(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]

  let values = cards.map(value => value[1]);

  let totalValue = 0;
  for (let index = 0; index < values.length; index++) {
    let value = values[index];
    if (value === 'A') {
      totalValue += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      totalValue += 10;
    } else {
      totalValue += Number(value);
    }
  }

  let aceArray = values.filter(value => value === 'A');

  for (let index = 0; index < aceArray.length; index++) {
    if (totalValue > 21) totalValue -= 10;
  }

  return totalValue;
}

// checks if busted
function busted(cards) {
  return calculateTotalValue(cards) > MAX_VALUE;
}

function detectResult(playerCards, dealerCards) {
  let playerTotal = calculateTotalValue(playerCards);
  let dealerTotal = calculateTotalValue(dealerCards);

  if (playerTotal > MAX_VALUE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_VALUE) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResult(playerCards, dealerCards) {
  let result = detectResult(playerCards, dealerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      console.log('You busted. Dealer wins.');
      break;
    case 'DEALER_BUSTED':
      console.log('Dealer busted. You win.');
      break;
    case 'PLAYER':
      console.log('You win.');
      break;
    case 'DEALER':
      console.log('Dealer wins.');
      break;
    case 'TIE':
      console.log("It's a tie.");
  }
}


function playAgain() {
  console.log('-------------');
  console.log('Do you want to play again? (y or n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

// game play

while (true) {
  console.log('Welcome to Twenty-One');

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];


  // initial deal
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  console.log(`Dealer has ${dealerCards[0]} and ?`);
  console.log(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${calculateTotalValue(playerCards)}.`);


  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      console.log('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, you must enter 'h' or 's'.");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      console.log('You chose to hit!');
      console.log(`Your cards are now: ${hand(playerCards)}.`);
      console.log(`Your total is now: ${calculateTotalValue(playerCards)}.`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResult(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    console.log(`You stayed at ${calculateTotalValue(playerCards)}.`);
  }

  // dealer turn
  console.log("Dealer's turn.");

  while (calculateTotalValue(dealerCards) < MAX_DEALER_HIT_VALUE) {
    console.log('Dealer hits.');
    dealerCards.push(deck.pop());
    console.log(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    console.log(`Dealer total is now: ${calculateTotalValue(dealerCards)}`);
    displayResult(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    console.log(`Dealer stays at ${calculateTotalValue(dealerCards)}`);
  }

  // both player and dealer stays - compare cards!
  console.log('==============');
  console.log(`Dealer has ${dealerCards}, for a total of: ${calculateTotalValue(dealerCards)}`);
  console.log(`Player has ${playerCards}, for a total of: ${calculateTotalValue(playerCards)}`);
  console.log('==============');

  displayResult(playerCards, dealerCards);

  if (!playAgain()) {
    console.clear();
    break;
  }

}
