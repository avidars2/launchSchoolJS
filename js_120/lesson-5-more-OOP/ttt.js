let readline = require("readline-sync");
const lisa = require('./lisa');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    //STUB
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    //STUB - we'll talk about stubs a bit later
    // We need a way to model the 3x3 grid. Perhaps "squares"?
    // What data structure should we use? An Array? An Object? Something else?
    // What should the data structure store? Strings? Numbers? Square objects?
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }

  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  isFull() {
    let unusedSquares = this.unusedSquares();
    return unusedSquares.length === 0;
  }

  getUsedSquaresList() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => !(this.squares[key].isUnused()))
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"].toString()}  |  ${this.squares["2"].toString()}  |  ${this.squares["3"].toString()}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"].toString()}  |  ${this.squares["5"].toString()}  |  ${this.squares["6"].toString()}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"].toString()}  |  ${this.squares["8"].toString()}  |  ${this.squares["9"].toString()}`);
    console.log("     |     |");
    console.log("");
  }
  displayLisa() {
    console.log(lisa.lisa.painting);
  }
}


class Rows {
  constructor() {
    //List of valid combinations
    //
    this.winningRows = [
      [ "1", "2", "3" ],            // top row of board
      [ "4", "5", "6" ],            // center row of board
      [ "7", "8", "9" ],            // bottom row of board
      [ "1", "4", "7" ],            // left column of board
      [ "2", "5", "8" ],            // middle column of board
      [ "3", "6", "9" ],            // right column of board
      [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
      [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
    ];
  }

  getWinningRows() {
    return this.winningRows;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  static instance = 1;
  constructor() {
    super(Square.HUMAN_MARKER);
    this.id = `Human-${Human.instance}`;
    Human.instance += 1;
  }
}

class Computer extends Player {
  static instance = 1;
  constructor() {
    super(Square.COMPUTER_MARKER);
    this.id = `Computer-${Computer.instance}`;
    Computer.instance += 1;
  }
}

class ScoreBoard {
  constructor(...players) {
    this.scoreSheet = players.
    reduce((acc, player) => {
      debugger;
      acc[player.id] = 0;
      return acc;
    }, {});
  }

  updateScore(player) {
    this.scoreSheet[player.id] += 1;
  }

  getScore(player) {
    return this.scoreSheet[player.id];
  }

  displayScore() {
    let playerScores = Object.entries(this.scoreSheet).reduce((acc, playerData) => {
      acc.push(`${playerData[0]}: ${playerData[1]}`);
      return acc;

    }, []);

    console.log(playerScores.join(' | '));
  }

}

class TTTGame {
  static joinOr = function(arr, delimiter=",", conjunction="or") {
    let lastIdx = arr.length - 1;

    if (arr.length <= 1) return `${arr[0] ?? ''}`;
    if (arr.length === 2) {
      return arr.join(` ${conjunction} `);
    } else {
      return arr.slice(0, lastIdx).
      join(`${delimiter} `) + `${delimiter} ${conjunction} ${arr[lastIdx]}`;
    }
  }

  static moveLog = [];
  static MATCH_GOAL = 3;


  constructor() {
    //STUB
    // Need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.winningRows = new Rows();
    this.scoreBoard = new ScoreBoard(this.human, this.computer);
    this.round = 1;
  }

  playAgain() {
    let message = 'play again? (y/n)';
    let result = readline.question(message).toLowerCase();

    while (result !== 'y' && result !== 'n') {
      console.log("Invalid response");
      result = readline.question(message).toLowerCase();
    }

    return result === 'y';
  }

  play() {
    //SPIKE
    this.displayWelcomeMessage();

    this.board.display();
    while (true) {

      if (this.round % 2 === 0) {
        this.computerMoves();
        this.board.displayWithClear();
        if (this.roundOver()) {
          this.finishRound();
          if (this.gameOver()) break;
          if (this.playAgain()) {
            this.getNewBoard();
            this.board.displayWithClear();
            continue
          } else break;
          }
      }

      this.humanMoves();
      if (this.roundOver()) {
        this.finishRound();
        if (this.gameOver()) break;

        if (this.playAgain()) {
          this.getNewBoard();
          this.board.displayWithClear();
          continue
        } else break;
        }

      if (this.round % 2 === 1) {
        this.computerMoves();
        this.board.displayWithClear();
        if (this.roundOver()) {
          this.finishRound();
          if (this.gameOver()) break;

          if (this.playAgain()) {
            this.getNewBoard();
            this.board.displayWithClear();
            continue
          } else break;
          }
        }

    if (Math.random() * 10 > 5) this.displayBoard();

    }

    if (this.gameOver()) {
      console.log('Game over, match was won')
      this.displayMatchWinner();
    }
    this.displayGoodbyeMessage();
  }

  finishRound() {
    this.board.displayWithClear();
    this.updateScoreBoard();
    console.log(`Round ${this.round} results:`)
    this.displayResults();
    this.round += 1;
  }

  gameOver() {
    return (this.scoreBoard.getScore(this.human) >= TTTGame.MATCH_GOAL ||
    this.scoreBoard.getScore(this.computer) >= TTTGame.MATCH_GOAL
  )
  }

  displayMatchWinner() {
    if (this.matchWinner() === this.human) {
      console.clear();
      console.log(`${this.human.id} has won the Match!`);
    }
    if (this.matchWinner() === this.computer) {
      console.clear();
      console.log(`${this.computer.id} has won the Match!`);
    }

    console.log(`Final Score:`)
    this.scoreBoard.displayScore();
  }

  matchWinner() {
    return this.scoreBoard.getScore(this.human) >= TTTGame.MATCH_GOAL ? this.human : this.computer;
  }

  getNewBoard() {
    this.board = new Board();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayBoard() {
    if (Math.random() * 10 > 2) this.board.displayLisa();
    this.board.display();
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());

  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;
    let openCenterSquare = validChoices.includes('5') ? 5 : null;
    let gameSavingSquare = this.winningSquare(this.human);
    let killShotSquare = this.winningSquare(this.computer);
    let optimalSquare = killShotSquare || gameSavingSquare || openCenterSquare;
    /**
     * Evaluate if there is a threat
     * If so, choose unused square
     */

    
    if (optimalSquare) {
      choice = optimalSquare;
    } else {
      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  roundOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  updateScoreBoard() {
    if (this.isWinner(this.human)) {
      this.scoreBoard.updateScore(this.human);
    } else if (this.isWinner(this.computer)) {
      this.scoreBoard.updateScore(this.computer);
    }
  }

  displayResults() {

    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }

    this.scoreBoard.displayScore();
  }

  winningSquare(player) {
    let unusedSquares = this.board.unusedSquares();
    let threatRow = this.getThreatRow(player);
    if (threatRow) {
      return unusedSquares.find(position => this.getThreatRow(player).includes(position));
    } else return 0;
  }

  getThreatRow(player) {
    return this.winningRows.getWinningRows().find((row => {
      return this.isThreat(player, row)
    }))

    /**2 items are enemy
     * At least 1 item is unused (check unusedSquares list if it includes
     * element from this 'row' array)
     * 
     */
  }

  isThreat(player, row) {
    let unusedSquares = this.board.unusedSquares();
    let oneAway = this.board.countMarkersFor(player, row) === 2;
    let emptySlot = row.some(position => unusedSquares.includes(position));
    return (oneAway && emptySlot);

  }

  isWinner(player) {
    return this.winningRows.getWinningRows().some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}

let game = new TTTGame();
game.play();

// let [player1, player2] = [new Human, new Computer];
// let board = new ScoreBoard(player1, player2);
// console.log(board);
// console.log(board.updateScore(player1));
// console.log(board.getScore(player1));
// board.displayScore();


/**
 * Ask human if they want to play again (y/n upper or lower)
 * --If so --> Start new game
 * --If not --> End program
 * 
 * If so --> 
 * 
 * Rules:
 * 1. Don't display welcome message again
 * 2. Display results after each game ends, but before asking whether
 * human player wants to play again
 * 3. Display goodbye message when human player doesn't want to play again. Never before that
 */

/**
 * Have computer:
 * 
 * 1. Evaluate board for 2 squares in a row which have enemy markers
 * 2. If found, pick 3rd square that finishes combination
 * 3. Otherwise choose random square
 * 
 * Evaluating board:
 * 1. Get used squares
 * 2. Filter list of squares for enemy markers
 * 3. Compare enemy list to each 'winning combinations' array
 * --Evaluate enemy list to see if it has 2 items from an individual
 * winning combinations list
 * --If so, get the remaining spot that is not on the list and play
 * that
 * 
 * 
 * Board object
 * 1. Get used squares method
 * 2. getMarkersOfType method
 * 
 * Alternative:
 * 1. 
 * 
 * 
 * 
 * TTTGame
 * 1. getEnemyMarkers list
 * 2. get
 */