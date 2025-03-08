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

let rlSync = require('readline-sync');

let boardPieces = {
  flatTiles: '_',
  walls: '|',
}

let virtualBoard = {
  topLeft: ' ',
  topMiddle: ' ',
  topRight: ' ',
  midLeft: ' ',
  midMiddle: ' ',
  midRight: ' ',
  bottomLeft: ' ',
  bottomMiddle: ' ',
  bottomRight: ' ',
}

const separation = ' '.repeat(8);

let board = {
  roof: ((' ' + boardPieces.flatTiles.repeat(9)).repeat(3)) + (' ' + separation) + 
  ((' ' + boardPieces.flatTiles.repeat(9)).repeat(3)),
  topBox: ((boardPieces.walls + ' '.repeat(9)).repeat(3) + boardPieces.walls) + (separation) + 
  ((boardPieces.walls + ' '.repeat(9)).repeat(3) + boardPieces.walls),
  midBox: (row) => {return renderMoves(row)},
  botBox: ((boardPieces.walls + boardPieces.flatTiles.repeat(9)).repeat(3) + boardPieces.walls) + (separation) + 
  ((boardPieces.walls + boardPieces.flatTiles.repeat(9)).repeat(3) + boardPieces.walls),
}

const Scoreboard = {player: 0, computer: 0};

gameStart();

function gameStart() {
  resetGame();
  displayBoard();
  if (!askToPlay()) {
    console.log('Goodbye!');
    console.log(`Final Score: ${''}`)
    return
  };
  
  gameLoop();
}

function gameLoop() {
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

  let gameEndCondition = false

  let validMoves = ['1', '2', '3', '4', '5',
    '6', '7',' 8', '9'
  ];

  while (!gameEndCondition) {
    let playerMove = rlSync.question('Enter Number You would like to place ');
    while (!validMoves.includes(playerMove)) {
      console.log('Invalid Move');
      playerMove = rlSync.question('Enter Number you would like to place: ');
    }
    validMoves = validMoves.filter(el => el !== playerMove);
    updateBoard(playerMove, 'player');
    if (checkConditions('X', validMoves)) {
      Scoreboard.player += 1;    
      break;
    };

    displayBoard();
  }


}

function checkConditions(token, validMoves) {
  if (checkWin(token)) {
    console.log(`${token === 'X' ? 'You win!' : 'Computer win!'}`);
    return true
  };
  if (validMoves.length < 1) {
    console.log('Draw!');
    return true;
  }

  return false;
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
  

  console.log(player === 'player' ? 'X' : 'O');
  virtualBoard[spaceKey[position]] = player === 'player' ? 'X' : 'O';
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
  console.log('No win conditions met');

  return false
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

/**

1 space + 9 flat Tiles make up each roof segment
 _________ _________
|         |         |
|    X    |         |
|_________|         |

1 wall + 4 spaces + space/X/O + 4 spaces

 */
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
  virtualBoard = {
    topLeft: ' ',
    topMiddle: ' ',
    topRight: ' ',
    midLeft: ' ',
    midMiddle: ' ',
    midRight: ' ',
    bottomLeft: ' ',
    bottomMiddle: ' ',
    bottomRight: ' ',
  }  
}

