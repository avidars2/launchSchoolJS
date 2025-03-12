/**
 * Explicits:
 * 1. Create a 21 game with a dealer and player
 * 2. Dealer follows strict rules of hitting until
 * card value >= 17
 */
let rlSync = require('readline-sync');



function getDeckOfCards() {
  let baseCardVals = '123456789JQKA'
  let deckOfCards = baseCardVals.split('').map(cardVal => {
    return ['D-' + cardVal, 'C-' + cardVal,
      'S-' + cardVal, 'H-' + cardVal];
  }).flatMap(el => el);

  return deckOfCards;
}

function sortCards(deck) {
  deck.sort((a, b) => {
    a = Math.random() * 10;
    b = Math.random() * 10;
    return a - b;
  })
}

function evaluateCards(cardArr) {
  let cardValues = cardArr.map(el => el[2]);
  // console.log(cardValues);

  let aceCount = 0;
  let tenValueCards = ['J', 'Q', 'K']

  let totalCardValue = cardValues.reduce((acc, card) => {
    if (tenValueCards.includes(card)) {
      return acc + 10;
    } else if (card === 'A') {
      aceCount++;
      return acc;
    } else {
      return acc + Number(card);
    };
  }, 0);


  //First loop:
  //Iterate through array of cards
  //Keep a total = 0
  //Keep Ace count = 0
  //Check if element is J Q or K
  //If so, add 10 to total
  //If A, increase Ace count by 1
  //Convert other values to Number form and add to total

  while ((21 - totalCardValue >= 11) && (aceCount > 0)) {
    totalCardValue += 11;
    aceCount--;
  }


  //Second loop:
  //While 21 - total >= 11 && ace count > 0, 
  //Add 11 to total
  //Subtract ace count by 1

  while (aceCount > 0) {
    totalCardValue++;
    aceCount--
  }

  //Third loop
  //while Ace count > 0
  //Add 1 to total
  //Subtract ace count by 1

  return totalCardValue;

}

// evaluateCards(['C-4', 'D-J', 'C-9', 'H-2', 'S-5', 'C-A', 'C-A'])


// evaluateCards(['C-4', 'S-5', 'C-A', 'C-A'])

function gameSetup() {
  let gameData = {
    playerScore: 0,
    dealerScore: 0,
    gamble: false,
    startingAmount: 0,
  }
  let play = rlSync.question('Play twenty-one? [y/n]');
  
  if (play.toLowerCase() === 'n') {
    console.log('Goodbye!');
    process.exit();
  }

  gameLoop(gameData);
}

function gameLoop(setup) {

  while (true) {
    let [hands, deckOfCards] = setupCards();
    console.log('Dealer Cards: ' + hands.dealer[0] + ' & ?');
    while (true) {
      console.log(`Your hand: ${hands.player.join(', ')}`);
      console.log(`Total Value: ${evaluateCards(hands.player)}`);
      let move = getPlayerMove();
      if (move === 'hit' || move === 'h') {
        hit(deckOfCards, 'player', hands);
        if (evaluateCards(hands.player) > 21) {
          roundLoss('player', hands); //Example function, I can change this
          console.log(evaluateCards(hands.player));
          break;
        }
      } else break;
    }
    break;
  }

}

function getPlayerMove() {
  let move = rlSync.question('Hit or Stay? [enter hit/stay]');
  let validChoices = ['hit', 'stay', 'h', 's'];
  while (!validChoices.includes(move.toLowerCase())) {
    console.log('Invalid option, try again.');
    move = rlSync.question('Enter hit or stay: ');
  }

  return move.toLowerCase();
}

function roundLoss(user) {

}

function setupCards() {
  let hands = {
    dealer: [],
    player: []
  }

  let deckOfCards = getDeckOfCards();
  sortCards(deckOfCards);
  dealStartingCards(deckOfCards, hands);

  console.log(hands);
  return [hands, deckOfCards];
}

function dealStartingCards(deck, hands) {
  const STARTING_HAND_COUNT = 2;
  for (let cardsDealt = 0; cardsDealt < STARTING_HAND_COUNT; cardsDealt++) {
    hands.dealer.push(deck.pop());
    hands.player.push(deck.pop());
  }

}

function hit(deck, user, hands) {
  hands[user].push(deck.pop());
}

gameSetup();