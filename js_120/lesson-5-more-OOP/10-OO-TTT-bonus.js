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
  constructor() {
    super(Square.HUMAN_MARKER);
    //STUB
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
    //STUB
  }
}

class TTTGame {

  static joinOr = function(arr, delimiter=",", conjunction="or") {
  let lastIdx = arr.length - 1;
  if (arr.length <= 1) return `${arr[0] ?? ''}`
  if (arr.length === 2) {
    return arr.join(` ${conjunction} `);
  } else {
    return arr.slice(0, lastIdx).
    join(`${delimiter} `) + `${delimiter} ${conjunction} ${arr[lastIdx]}`;
  }

  }

  constructor() {
    //STUB
    // Need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.winningRows = new Rows();
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

      this.humanMoves();
      if (this.gameOver()) {
        this.board.displayWithClear();
        this.displayResults();
          if (this.playAgain()) {
            this.getNewBoard();
          } else break;
        }

      // console.clear();
      // console.log('\n')

      this.computerMoves();
      if (this.gameOver()) {
        this.board.displayWithClear();
        this.displayResults();
          if (this.playAgain()) {
            this.getNewBoard();
          } else break;
        }

      this.board.displayWithClear();

    }
    this.displayGoodbyeMessage();
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
    this.board.display();
    // this.board.displayLisa();
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

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  isWinner(player) {
    return this.winningRows.getWinningRows().some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });

  }
}

let game = new TTTGame();
game.play();

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