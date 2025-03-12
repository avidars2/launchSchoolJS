let rlSync = require('readline-sync');

const MAX_VALUE = [21];
const DEALER_LIMIT = [17];

function getDeckOfCards() {
  let baseCardVals = '123456789JQKA';
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
  });
}

function evaluateCards(cardArr) {
  let cardValues = cardArr.map(el => el[2]);
  let aceCount = 0;
  let tenValueCards = ['J', 'Q', 'K'];

  let totalCardValue = cardValues.reduce((acc, card) => {
    if (tenValueCards.includes(card)) {
      return acc + 10;
    } else if (card === 'A') {
      aceCount++;
      return acc;
    } else {
      return acc + Number(card);
    }
  }, 0);

  while ((MAX_VALUE[0] - totalCardValue >= 11) && (aceCount > 0)) {
    totalCardValue += 11;
    aceCount--;
  }

  while (aceCount > 0) {
    totalCardValue++;
    aceCount--;
  }

  return totalCardValue;
}

function gameSetup() {
  let gameData = {
    playerScore: 0,
    dealerScore: 0,
    gamble: false,
    startingAmount: 0,
    maxRound: 5
  };

  settings(gameData); 

  let play = yesOrNo('Play twenty-one?');
  if (play) {
    gameLoop(gameData);
  }
  console.log('Goodbye!');
}

function settings(settingObject) {
  let customOrDefault = rlSync.question('Custom or default settings? [c/d]');
  let validChoices = ['c', 'd', 'custom', 'default'];
  while (!validChoices.includes(customOrDefault.toLowerCase())) {
    console.log('Invalid Choice');
    customOrDefault = rlSync.question('Enter c or d');
  }

  if (customOrDefault === 'd') {
    settingObject.maxRound = 5;
    settingObject.gamble = false;
    MAX_VALUE[0] = 21;
    DEALER_LIMIT[0] = 17;
  } else {
    settingObject.maxRound = Number.parseInt(rlSync.question('Max rounds?: '));
    while (Number.isNaN(Number.parseInt(settingObject.maxRound))) {
      console.log('Invalid Choice');
      settingObject.maxRound = Number.parseInt(rlSync.question('Enter a number: '));
    }
    
    MAX_VALUE[0] = Number.parseInt(rlSync.question('Play to 21 or lower/higher? Enter value: '))
    while (Number.isNaN(Number.parseInt(MAX_VALUE[0]))) {
      console.log('Invalid Choice');
      MAX_VALUE[0] = Number.parseInt(rlSync.question('Enter a number: '));
    }

    DEALER_LIMIT[0] = MAX_VALUE[0] - 4;
  }

}

function playerTurn(setup, deckOfCards, hands) {
  let bust = false;
  let playerValue = evaluateCards(hands.player);
  while (true) {
    console.log(`Your hand: ${hands.player.join(', ')} | Total Value: ${playerValue}`);
    console.log('='.repeat(20));
    let move = getPlayerMove();
    if (move === 'hit' || move === 'h') {
      hit(deckOfCards, 'player', hands);
      playerValue = evaluateCards(hands.player);
      if (playerValue > MAX_VALUE[0]) {
        roundWin(setup, 'dealer', hands, 'Player Busted!', playerValue, evaluateCards(hands.dealer));
        bust = true;
        break;
      }
    } else break;
  }
  return bust;
}

function dealerTurn(setup, deckOfCards, hands) {
  let bust = false;
  console.log(DEALER_LIMIT);
  while (!bust) {
    let dealerValue = evaluateCards(hands.dealer);
    console.log('~'.repeat(30) + `\nDealer's turn!`);
    console.log(`Dealer Cards: ${hands.dealer.join(', ')} | Total Value: ${dealerValue}`);
    while (dealerValue < DEALER_LIMIT[0]) {
      dealerValue = evaluateCards(hands.dealer);
      hit(deckOfCards, 'dealer', hands);
      console.log('Dealer hits...');
      console.log(`Dealer Cards: ${hands.dealer.join(', ')} | Total Value: ${dealerValue}`);
    }
    if (dealerValue > MAX_VALUE[0]) {
      roundWin(setup, 'player', hands, 'Dealer Busted!', evaluateCards(hands.player), dealerValue);
      bust = true;
    }
    console.log('~'.repeat(30));
    break;
  }
  return bust;
}

function gameLoop(setup) {

  while (true) {
    console.log('-'.repeat(30));
    console.log(`Score: Player: ${setup.playerScore} | Dealer: ${setup.dealerScore}`);
    console.log('-'.repeat(30));
    let [hands, deckOfCards] = setupCards();
    let bust = false;
    console.log('Dealer Cards: ' + hands.dealer[0] + ' & ?');
    bust = playerTurn(setup, deckOfCards, hands);
    if (!bust) {
      bust = dealerTurn(setup, deckOfCards, hands);
    }
    let [playerValue, dealerValue] = [
      evaluateCards(hands.player),
      evaluateCards(hands.dealer)];

    if (!bust) {
      if (playerValue > dealerValue) {
        roundWin(setup, 'player', hands, 'Player cards are higher than dealer!', playerValue, dealerValue);
      } else if (dealerValue > playerValue) {
        roundWin(setup, 'dealer', hands, 'Dealer cards are higher than player!', playerValue, dealerValue);
      } else roundDraw(setup);
    }
    
    let result = checkGameWinner(setup);
    if (result) {
      declareWinner(setup, result);
      break;
    }

    let playNextRound = yesOrNo('Play next round?');
    if (playNextRound) {
      continue;
    } else break;
  }
}

function checkGameWinner(setup) {
  //Check scores of both players
  //If player or dealer has 3 points, declare winner
  let scoreToWin = Math.ceil(setup.maxRound / 2);

  if (setup.playerScore >= scoreToWin) {
    return 'Player';
  } else if (setup.dealerScore >= scoreToWin) {
    return 'Dealer';
  } else if (
    setup.playerScore + setup.dealerScore === setup.maxRound
  ) {
    return 'Draw! Nobody';
  }

  return '';
}

function declareWinner(setup, result) {
  console.log(`${result} has won the game!`);
  console.log(`Final score: ${setup.playerScore} | ${setup.dealerScore}`);
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

function yesOrNo(message) {
  let yesNo = rlSync.question(message + ' [y/n]: ');
  let validChoices = ['yes', 'no', 'y', 'n'];
  while (!validChoices.includes(yesNo.toLowerCase())) {
    console.log('Invalid option, try again.');
    yesNo = rlSync.question('Enter yes or no: ');
  }

  return yesNo[0].toLowerCase() === 'y';
}

function roundWin(setup, user, hands, reason, playerValue, dealerValue) {
  let userScoreToUpdate = user + 'Score';
  setup[userScoreToUpdate] += 1;

  console.log(`Final hands: \nPlayer: ${hands.player.join(', ')} Value: ${playerValue}\n` +
  `Dealer: ${hands.dealer.join(', ')} Value: ${dealerValue}`);
  console.log(`${user === 'player' ? 'Player' : 'Dealer'} wins! ${reason}`);
  console.log(`Score: Player: ${setup.playerScore} | Dealer: ${setup.dealerScore}`);
}

function roundDraw(setup) {
  console.log('Player and Dealer cards are equal!');
  console.log('Draw!');
  console.log(`Score: Player: ${setup.playerScore} | Dealer: ${setup.dealerScore}`);
}

function setupCards() {
  let hands = {
    dealer: [],
    player: []
  };

  let deckOfCards = getDeckOfCards();
  sortCards(deckOfCards);
  dealStartingCards(deckOfCards, hands);

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