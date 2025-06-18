let rlSync = require('readline-sync');
class Card {

  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.name = `${this.value} of ${this.suit}`;
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.value;
  }

  getName() {
    return this.name;
  }
}

class Deck {
  static DECK_SIZE = 52;

  static SUITS = ['Hearts', 'Diamonds', 'Spades', 'Clovers'];

  static CARD_VALUES = [...'23456789JQKA'];

  constructor() {
    this.cards = [];
    Deck.SUITS.forEach(suit => {
      Deck.CARD_VALUES.forEach(value => {
        let card = new Card(suit, value);
        this.cards.push(card);
      });
    });
    //STUB
    // What sort of state does a deck need?
    // 52 Cards?
    // obviously, we need some data structure to keep track of cards
    // array, object, something else?

    /**
     * For each suit,
     * --for each card value
     * ---create new card and add to array
     *
     */
  }

  getCard() {
    //STUB
    // does the dealer or the deck deal?
    return this.cards.pop();
  }

  shuffle() {
    this.cards.sort(() => Math.random() - Math.random());
  }

  countCards() {
    return this.cards.length;
  }
}

class Participant {
  constructor(cash) {
    //STUB
    // What sort of state does a participant need?
    // Score? Hand? Amount of money available?
    // What else goes here? all the redundant behaviors from Player and Dealer?
    this.inventory = [];
    this.cash = cash;
    this.busted = false;
  }

  addToInventory(item) {
    this.inventory.push(item);
  }

  revealInventory() {
    console.log(this.inventory);
  }

  getInventory() {
    return this.inventory;
  }

  emptyInventory() {
    this.inventory = [];
  }

  isBusted() {
    this.busted = true;
  }

  isNotBusted() {
    this.busted = false;
  }

  getBustStatus() {
    return this.busted;
  }

  getCash() {
    return this.cash;
  }

  deductCash(amt) {
    this.cash -= amt;
  }

  addCash(amt) {
    this.cash += amt;
  }

}

class Player extends Participant {
  constructor() {
    super(5);
    //STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available?
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    super(Infinity);
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
  }
}

class TwentyOneGame {
  static LOWER_CARD_LIMIT = 20;
  static MESSAGE_BOUNDARY_LENGTH = 50;
  static BET_VALUE = 1;
  static WIN_AMOUNT = 10;
  static LOSE_AMOUNT = 0;

  static joinOr(arr, delimiter = ",", conjunction = "and") {
    let arrOfNames = arr.map(cardObjects => cardObjects.getName());
    let lastIdx = arr.length - 1;
    if (arrOfNames.length <= 1) return `${arrOfNames[0] ?? ''}`;
    if (arrOfNames.length === 2) {
      return arrOfNames.join(` ${conjunction} `);

    } else {
      return arrOfNames.slice(0, lastIdx).
        join(`${delimiter} `) + `${delimiter} ${conjunction} ${arrOfNames[lastIdx]}`;
    }
  }

  static getValidInput(prompt, ...validChoices) {
    let answer = rlSync.question(prompt).toLowerCase();
    validChoices = validChoices.map(choice => choice.toLowerCase());

    while (!validChoices.includes(answer)) {
      console.log("Invalid input");
      answer = rlSync.question(prompt).toLowerCase();
    }

    return answer;
  }

  constructor() {
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
    this.deck = new Deck();
    this.dealer = new Dealer();
    this.player = new Player();
    this.gameStage = 0;
  }

  start() {
    this.displayWelcomeMessage();
    while (this.player.getCash() > TwentyOneGame.LOSE_AMOUNT &&
     this.player.getCash() < TwentyOneGame.WIN_AMOUNT) {
      this.displayDealingPhaseMessage();
      this.displayStats();
      this.prepareDeck();
      this.dealInitialCards();
      this.showCards();
      this.displayPlayerPhaseMessage();
      this.playerTurn();
      this.updateGameStage();
      if (!this.player.getBustStatus()) {
        console.log("\nDealer's turn\n");
        this.dealerTurn();
      }
      this.showCards();
      this.processResult();
      this.displayResult();
      this.resetPlayers();
      this.updateGameStage();
      if (this.startNextRound()) {
        console.log("Next round...");
      } else break;
    }

    this.displayGameResults();
    this.displayGoodbyeMessage();

  }

  resetPlayers() {
    [this.player, this.dealer].forEach(participant => {
      participant.emptyInventory();
      participant.isNotBusted();
    });
  }

  startNextRound() {
    let playAgain = TwentyOneGame.getValidInput("Play again?: ", "Yes", "No", "y", "n");

    return playAgain[0] === 'y';
  }

  displayStats() {
    let cash = this.player.getCash();
    console.log(`You have ${cash} dollars!`);
  }

  prepareDeck() {
    if (this.deck.countCards() < TwentyOneGame.LOWER_CARD_LIMIT) this.getNewDeck();
    this.deck.shuffle();
  }

  dealInitialCards() {
    //STUB
    /**
     * get 4 cards from deck
     * 2 for dealer, 2 for player
     */
    for (let deals = 2; deals > 0; deals--) {
      this.dealCard(this.player);
      this.dealCard(this.dealer);
    }
  }

  getNewDeck() {
    this.deck = new Deck();
  }

  dealCard(participant) {
    /**
     * get a card and give it to the participant specified
     */
    let card = this.deck.getCard();
    participant.addToInventory(card);

  }

  showCards() {
    //STUB
    let playerCards = this.player.getInventory();
    let dealerCards = this.dealer.getInventory();
    let dealerCardsToShow = this.getGameStage() ? [dealerCards, "", "Value:"] : [[dealerCards[0]], "and ? ", "Revealed Card Value:"];
    console.log(`=`.repeat(TwentyOneGame.MESSAGE_BOUNDARY_LENGTH));
    console.log(`Dealer reveals: ${TwentyOneGame.joinOr(dealerCardsToShow[0])} ${dealerCardsToShow[1]}| ${dealerCardsToShow[2]} ${this.getHandValue(dealerCardsToShow[0])}`);
    console.log(`-`.repeat(TwentyOneGame.MESSAGE_BOUNDARY_LENGTH));
    console.log(`You have: ${TwentyOneGame.joinOr(playerCards)} | Value: ${this.getHandValue(playerCards)}`);
    console.log(`=`.repeat(TwentyOneGame.MESSAGE_BOUNDARY_LENGTH));
  }

  getGameStage() {
    return this.gameStage;
  }

  updateGameStage() {
    this.gameStage = this.getGameStage() ? 0 : 1; //If 0, set to 1, if 1 set to 0
  }

  playerTurn() {
    //STUB
    /**
     * Ask: Hit/Stay?
     * Based on response, get new card or keep as is
     * --If get new card, add it to player inventory
     * --then show new value
     *
     * if value > 21,
     * mark player as busted
     * break loop
     *
     */

    let move;

    do {
      move = TwentyOneGame.getValidInput("Hit or Stay? [Enter: Hit/Stay or h/s for short]: ", "Hit", "Stay", "h", "s")[0];
      if (move === "s") break;

      this.dealCard(this.player);
      this.displayPlayerHitMessage();
      this.showCards();

      if (this.getHandValue(this.player.getInventory()) > 21) {
        this.player.isBusted();
        this.displayBustMessage("you");
        break;
      }

    } while (move === 'h');

  }

  getHandValue(cards) {
    /**
     * Evaluate all cards in array
     * --face cards are 10, except A which is 11
     * If total > 21, look for any A and change value to 1,
     * then re-evaluate
     *
     * return final value
     */

    let cardValue = cards.reduce((total, card) => {
      let faceCards = [...'JQKA'];
      if (faceCards.includes(card.getRank())) {
        if (card.getRank() === "A") {
          return total + 11;
        } else return total + 10;
      } else return total + Number(card.getRank());
    }, 0);

    if (cardValue > 21) {
      let aces = cards.filter(card => card.getRank() === "A").length;

      while (aces > 0) {
        aces--;
        cardValue -= 10;
        if (cardValue <= 21) break;
      }
    }

    return cardValue;

  }

  dealerTurn() {
    /**
     * Dealer
     *
     * evaluate hand total
     * if <= 17 hit, otherwise stay
     *
     * if >= 21, update bust status
     */

    while (this.getHandValue(this.dealer.getInventory()) < 17) {
      console.log(`Dealer draws a card...\n`);
      this.dealCard(this.dealer);
      if (this.dealer.getInventory() < 17) this.showCards();

      if (this.getHandValue(this.dealer.getInventory()) > 21) {
        this.dealer.isBusted();
        this.displayBustMessage("dealer");
        console.log(this.dealer.getBustStatus());
        break;
      }

      this.showCards();
    }
  }

  displayWelcomeMessage() {
    console.log(`---------------`);
    console.log(`Welcome to 21!`);
    console.log(`---------------\n`);
  }

  displayDealingPhaseMessage() {
    console.log(`===============`);
    console.log(`Dealing Phase!`);
    console.log(`===============`);
  }

  displayPlayerPhaseMessage() {
    console.log(`===============`);
    console.log(`Player turn Phase!`);
    console.log(`===============\n`);
  }

  displayPlayerHitMessage() {
    // console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`You tap the board and get dealt a card...`);
    // console.log(`~~~~~~~~~~~~~~~~~\n`);

  }

  displayBustMessage(participant) {
    console.log(`Uh oh, ${participant} busted!`);
  }

  displayGameResults() {
    let result = this.player.getCash() === 10 ? 'Won' : 'Lost';
    console.log(`You have ${result} the game!`);
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing!");
  }

  determineResult() {
    /**
     * Check if player busted
     * --If so, determine player loss
     * Check if dealer busted
     * --If so, determine player win
     *
     * Check if player card value === dealer
     * --If so, determine 'draw'
     * Check if player card value > dealer
     * --If so, determine player win
     * --If not, determine player loss
     */

    if (this.player.getBustStatus()) {
      return 'loss-bust';
    }
    if (this.dealer.getBustStatus()) {
      return 'win-bust';
    }
    let playerCardValue = this.getHandValue(this.player.getInventory());
    let dealerCardValue = this.getHandValue(this.dealer.getInventory());
    if (playerCardValue === dealerCardValue) {
      return 'draw';
    }
    if (playerCardValue > dealerCardValue) {
      return 'win';
    } else return 'loss';

  }

  displayResult() {
    let result = this.determineResult();
    if (result === 'draw') {
      console.log('Draw! Neither Dealer nor Player wins.');
      console.log('No money lost.');
    } else if (result === 'win') {
      console.log('Your hand is greater! You Win!');
      console.log(`You get ${TwentyOneGame.BET_VALUE} dollar!`);
    } else if (result === 'loss') {
      console.log('Your hand is lesser! You Lose!');
      console.log(`You lose ${TwentyOneGame.BET_VALUE} dollar!`);
    } else if (result === 'win-bust') {
      console.log('Dealer Busted! You Win!');
      console.log(`You get ${TwentyOneGame.BET_VALUE} dollar!`);
    } else if (result === 'loss-bust') {
      console.log('You Busted! You Lose!');
      console.log(`You lose ${TwentyOneGame.BET_VALUE} dollar!`);
    }
  }

  processResult() {
    let result = this.determineResult();
    if (result.slice(0, 3) === 'win') {
      this.player.addCash(TwentyOneGame.BET_VALUE);
    } else if (result.slice(0, 4) === 'loss') {
      this.player.deductCash(TwentyOneGame.BET_VALUE);
    }

  }
}

let game = new TwentyOneGame();
game.start();