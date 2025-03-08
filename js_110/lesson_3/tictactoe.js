/**
 * STart
 * 
 * --Ask to play
 * 
 * Display Board
 * Display Scoreboard
 * 
 * User goes first and chooses a square to mark
 * 
 * Board is re-rendered and win/tie/loss conditions are checked
 * 
 * IF No condition is met, continue
 * 
 * Computer chooses a square to mark
 * 
 * Board is re-rendered and win/tie/loss conditions are checked
 * 
 * IF no condition is met, continue
 * 
 * Repeat above until condition is met
 * 
 * IF condition is met, display outcome
 * 
 * Ask to play again --If yes, reset board, else exit
 * 
 * functions:
 * 1. re-render
 * 2. check win/tie/loss condition
 * 3. Player move input
 * 4. Process player move input
 * 5. Computer move input and process
 * 6. Display win/tie/loss condition
 * 7. Ask to play again
 * 8. Reset board
 */

/**

1 space + 9 flat Tiles make up each roof segment
 _________ _________
|         |         |
|    X    |         |
|_________|         |

1 wall + 4 spaces + space/X/O + 4 spaces

 */

  /**
   * Ask player to choose
   * 1. rl Sync to get space  
   * 2.
   * 3.
   * 4.
   * re-render and check for win
   * 1. A win occurs when 3 tokens are in a row, horizontally, diagnoally, or vertically
   * If 1 is placed, then I can check 2 & 3, 5 & 6 and 4 & 7
   * If either of those have groups are also tokenized, then it's a win
   * 
   * Ask computer to chooose
   * 1. Computer can either choose a random piece, or an
   * intelligent piece by evaluating the board //For now, we'll go with random piece
   * 
   * re-render and check for win
   */


let rlSync = require('readline-sync');
const Scoreboard = {human: 0, computer: 0};
const separation = ' '.repeat(8);
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X'
const COMPUTER_MARKER = 'O'

let boardPieces = {
  flatTiles: '_',
  walls: '|',
}

let virtualBoard = {
  topLeft: INITIAL_MARKER,
  topMiddle: INITIAL_MARKER,
  topRight: INITIAL_MARKER,
  midLeft: INITIAL_MARKER,
  midMiddle: INITIAL_MARKER,
  midRight: INITIAL_MARKER,
  bottomLeft: INITIAL_MARKER,
  bottomMiddle: INITIAL_MARKER,
  bottomRight: INITIAL_MARKER,
}


let board = {
  roof: ((' ' + boardPieces.flatTiles.repeat(9)).repeat(3)) + (' ' + separation) + 
  ((' ' + boardPieces.flatTiles.repeat(9)).repeat(3)),
  topBox: ((boardPieces.walls + ' '.repeat(9)).repeat(3) + boardPieces.walls) + (separation) + 
  ((boardPieces.walls + ' '.repeat(9)).repeat(3) + boardPieces.walls),
  midBox: (row) => {return renderMoves(row)},
  botBox: ((boardPieces.walls + boardPieces.flatTiles.repeat(9)).repeat(3) + boardPieces.walls) + (separation) + 
  ((boardPieces.walls + boardPieces.flatTiles.repeat(9)).repeat(3) + boardPieces.walls),
}

gameStart();

function gameStart() {
  while (askToPlay()) {
    resetGame();
    displayBoard();
    gameLoop();
  }
  console.log('Goodbye!');
  console.log(`Final Score: Player (${HUMAN_MARKER}): ${Scoreboard.human} | Computer (${COMPUTER_MARKER}): ${Scoreboard.computer}`);
}

function gameLoop() {

  let gameEndCondition = false

  let validMoves = ['1', '2', '3', '4', '5',
    '6', '7','8', '9'
  ];

  while (!gameEndCondition) {
    console.log(`Valid Moves: ${validMoves.join(', ')}`)
    console.log(`Your token is: ${HUMAN_MARKER}`)
    let playerMove = chooseSquareHuman(validMoves);
    validMoves = validMoves.filter(el => el !== playerMove);
    updateBoard(playerMove, 'human');
    displayBoard();
    if (checkConditions(HUMAN_MARKER, validMoves)) {
      Scoreboard.human += 1;    
      break;
    };

    let computerMove = chooseSquareComputer(validMoves);
    validMoves = validMoves.filter(el => el !== computerMove);
    updateBoard(computerMove, 'computer');
    displayBoard();
    if (checkConditions(COMPUTER_MARKER, validMoves)) {
      Scoreboard.computer += 1;    
      break;
    };
  }

  console.log(`Score: Player (${HUMAN_MARKER}): ${Scoreboard.human} | Computer (${COMPUTER_MARKER}): ${Scoreboard.computer}`);

}

function chooseSquareComputer(validMoves) {
  let computerMove = Math.floor(Math.random() * validMoves.length);

  return validMoves[computerMove];
}


function chooseSquareHuman(validMoves) {
  let playerMove = rlSync.question('Enter Number You would like to place ');
  while (!validMoves.includes(playerMove)) {
    console.log('Invalid Move');
    playerMove = rlSync.question('Enter Number you would like to place: ');
  }

  return playerMove;
}

function checkConditions(token, validMoves) {
  if (checkWin(token)) {
    console.log(`${token === HUMAN_MARKER ? 'You win!' : 'Computer win!'}`);
    return true
  };
  if (validMoves.length < 1) {
    console.log('Draw!');
    return true;
  }

  return false;
}

function checkWin(token) {
  if (virtualBoard.topLeft === token && virtualBoard.topMiddle === token && virtualBoard.topRight === token) {
    return true
  }
  if (virtualBoard.topMiddle === token && virtualBoard.midMiddle === token && virtualBoard.bottomMiddle === token) {
    return true
  }
  if (virtualBoard.topRight === token && virtualBoard.midRight === token && virtualBoard.bottomRight === token) {
    return true
  }
  if (virtualBoard.topLeft === token && virtualBoard.midLeft === token && virtualBoard.bottomLeft === token) {
    return true
  }
  if (virtualBoard.topLeft === token && virtualBoard.midMiddle === token && virtualBoard.bottomRight === token) {
    return true
  }
  if (virtualBoard.midLeft === token && virtualBoard.midMiddle === token && virtualBoard.midRight === token) {
    return true
  }
  if (virtualBoard.bottomLeft === token && virtualBoard.bottomMiddle === token && virtualBoard.bottomRight === token) {
    return true
  }
  if (virtualBoard.bottomLeft === token && virtualBoard.midMiddle === token && virtualBoard.topRight === token) {
    return true
  }

  return false
}


function updateBoard(position, player) {
  let spaceKey = {
    1: 'topLeft',
    2: 'topMiddle',
    3: 'topRight',
    4: 'midLeft',
    5: 'midMiddle',
    6: 'midRight',
    7: 'bottomLeft',
    8: 'bottomMiddle',
    9: 'bottomRight',
  }
  
  virtualBoard[spaceKey[position]] = player === 'human' ? HUMAN_MARKER : 'O';
}


function askToPlay() {
  let play = rlSync.question('Would you like to play Tic-Tac-Toe? [y/n]:\n');
  while (play !== 'n' && play !== 'y') {
    play = rlSync.question('Please enter [y/n] if you would like to play again:\n');
  }

  return play === 'y'
}

function renderMoves(row) {
  if (row === 1) {
    return `${leftMidBox(virtualBoard.topLeft)}${midAndRightMidBox(virtualBoard.topMiddle)}${midAndRightMidBox(virtualBoard.topRight)
    + (separation) + leftMidBox(1)}${midAndRightMidBox(2)}${midAndRightMidBox(3)
    }`;
  } else if (row === 2) {
    return `${leftMidBox(virtualBoard.midLeft)}${midAndRightMidBox(virtualBoard.midMiddle)}${midAndRightMidBox(virtualBoard.midRight)
    + (separation) + leftMidBox(4)}${midAndRightMidBox(5)}${midAndRightMidBox(6)
    }`;
  } else if (row === 3) {
    return `${leftMidBox(virtualBoard.bottomLeft)}${midAndRightMidBox(virtualBoard.bottomMiddle)}${midAndRightMidBox(virtualBoard.bottomRight)
    + (separation) + leftMidBox(7)}${midAndRightMidBox(8)}${midAndRightMidBox(9)
    }`;
  }
}

function leftMidBox(midPiece) {
  selectedMidBox = (boardPieces.walls + ' '.repeat(4) + midPiece + ' '.repeat(4)) + boardPieces.walls; 
  return selectedMidBox
}

function midAndRightMidBox(midPiece) {
  selectedMidBox = (' '.repeat(4) + midPiece + ' '.repeat(4)) + boardPieces.walls; 
  return selectedMidBox
}


function displayBoard() {
  topRow();
  midRow();
  botRow();
}


function topRow() {
  console.log(board.roof);
  console.log(board.topBox);
  console.log(board.midBox(1));
  console.log(board.botBox);
}

function midRow() {
  console.log(board.topBox);
  console.log(board.midBox(2));
  console.log(board.botBox);
}

function botRow() {
  console.log(board.topBox);
  console.log(board.midBox(3));
  console.log(board.botBox);
}

function resetGame() {
  Object.keys(virtualBoard).forEach(key => {
    virtualBoard[key] = INITIAL_MARKER;
  })
}

