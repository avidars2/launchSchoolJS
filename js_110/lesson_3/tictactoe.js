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
  let setup = gameSetup();
  while (askToPlay()) {
    resetGame();
    displayBoard();
    gameLoop(setup);
    
    let matchWinner = checkMatchWin(setup);
    if (matchWinner) {
      updateScore(matchWinner, setup);
      resetMatch(setup);
      declareWinner(matchWinner, setup.matchesWonHuman, setup.matchesWonComp);
    }
  }
  console.log('Goodbye!');
  console.log(`Final Score: Player (${HUMAN_MARKER}): ${setup.human} | Computer (${COMPUTER_MARKER}): ${setup.computer}`);
  console.log(`Player Match Wins: ${setup.matchesWonHuman} | Computer Match Wins: ${setup.matchesWonComp}`);
}

function gameSetup() {
  //Ask player questions for how to setup match
  //Such as amount of games to win a match
  const setup = {human: 0, computer: 0, matchesWonHuman: 0, matchesWonComp: 0, winLimit: 5, firstMove: 0};
  
  let customSettings = rlSync.question('Custom settings or Default? [Enter c or d]: ');
  while (customSettings.toLowerCase() !== 'c' && customSettings.toLowerCase() !== 'd') {
    console.log('Invalid input.');
    console.log(customSettings)
    customSettings = rlSync.question('Custom settings or Default? [Enter c or d]: ');
  }

  if (customSettings.toLowerCase() === 'd') return setup;
  
  let gamesToWin = rlSync.question('How many games to win match? (Default 5) Enter [1-9]: ');

  while (!(gamesToWin >= '1' && gamesToWin <= '9')) {
    console.log('Invalid input.');
    gamesToWin = rlSync.question('How many games to win match? (Default 5) Enter [1-9]: ');
  }
  setup.winLimit = gamesToWin;

  let firstPlayer = rlSync.question('Who makes first move? \nEnter p for player, c for computer, r for random [p, c, r]: ');
  while (firstPlayer !== 'p' && firstPlayer !== 'c' && firstPlayer !== 'r') {
    console.log('Invalid choice');
    firstPlayer = rlSync.question('Who makes first move? \nEnter p for player, c for computer, r for random [p, c, r]: ');
  }

  switch (firstPlayer) {
    case 'p': 
      setup.firstMove = 0;
      break;
    case 'c':
      setup.firstMove = 1;
      break;
    case 'r':
      setup.firstMove = Math.round(Math.random());
      break;
    default:
      setup.firstMove = 0;
  }



  return setup;


  /** Keep Score
 * 
 * Explicits:
 * 1. Keep track of how many times the player and computer each win
 * 2. Report score after each game
 * 3. First to win x amount of games wins the overall match
 * 4. After a match, score should reset to 0
 * 
 * Implicits:
 * 1. A match will be first to x wins
 * 
 * 
 * Player wins 4 times, computer wins 4
 * Score: 4 | 4
 * 
 * Player wins 5th time
 * 
 * Score: 5 | 4 - Player wins match!
 * Matches Won: 1 (Player) | 0 (Computer)
 * Score is reset to 0
 * 
 * 1. Score is tracked
 * 2. Check score object
 * 3. See if computer or human score >= win limit
 * 4. If not, continue loop
 * 5. If so, announce winner & reset score back to zero
 */
}

function gameLoop(gameData) {
  let gameEndCondition = false

  let validMoves = ['1', '2', '3', '4', '5',
    '6', '7','8', '9'
  ];
  let turn = gameData.firstMove;
  while (!gameEndCondition) {
    //If player first, run player move sequence
    //First goes on odd turns, second on even
    //

    /**Based on turn
     * activate move function
     * clean up validmoves
     * updateBoard based on player/comp
     * displayBoard
     * check for winconditions based on player/comp
     * 
     */

    console.log('Turn: ' + turn + '\n');
    let currentPlayer = turn % 2 === 0 ? 'human' : 'computer';
    let currentMarker = currentPlayer === 'human' ? HUMAN_MARKER : COMPUTER_MARKER;
    let move = chooseSquareGeneric(validMoves, currentPlayer);
    validMoves = validMoves.filter(el => el !== move);
    updateBoard(move, currentPlayer);
    displayBoard();
    let currentPlayerCondition = checkConditions(currentMarker, validMoves);
    if (currentPlayerCondition === 'draw') break;
    if (currentPlayerCondition) {
      gameData[currentPlayer] += 1;
      break;
    }
    


    // if (turn % 2 === 0) {
    //   console.log(`Valid Moves: ${joinOr(validMoves)}`)
    //   console.log(`Your token is: ${HUMAN_MARKER}`)
    //   let playerMove = chooseSquareHuman(validMoves);
    //   validMoves = validMoves.filter(el => el !== playerMove);
    //   updateBoard(playerMove, 'human');
    //   displayBoard();
    //   let playerCondition = checkConditions(HUMAN_MARKER, validMoves);
    //   if (playerCondition === 'draw') break;
    //   if (playerCondition) {
    //     gameData.human += 1;    
    //     break;
    //   }
        
    // }
    // if (turn % 2 === 1) {
    //   let computerMove = chooseSquareComputer(validMoves);
    //   validMoves = validMoves.filter(el => el !== computerMove);
    //   updateBoard(computerMove, 'computer');
    //   displayBoard();
    //   let compCondition = checkConditions(COMPUTER_MARKER, validMoves);

    //   if (compCondition === 'draw') break;
    //   if (compCondition) {
    //     gameData.computer += 1;    
    //     break;
    //   }
    // }

    turn++;
  }

  console.log(`Score: Player (${HUMAN_MARKER}): ${gameData.human}/${gameData.winLimit}` + 
    ` | Computer (${COMPUTER_MARKER}): ${gameData.computer}/${gameData.winLimit}`);
}

function declareWinner(winner, humanWins, compWins) {
  console.log(`\n${winner === 'human' ? 'You' : 'Computer'} won the match!`);
  console.log(`Match Sore: Player ${humanWins} | Computer Wins ${compWins}`);
}

function updateScore(matchWinner, setup) {
  if (matchWinner === 'human') setup['matchesWonHuman'] += 1;
  if (matchWinner === 'computer') setup['matchesWonComp'] += 1;
}

function chooseSquareGeneric(validMoves, currentPlayer) {
  if (currentPlayer === 'human') return chooseSquareHuman(validMoves);
  if (currentPlayer === 'computer') return chooseSquareComputer(validMoves);

  console.log('Error');
}

function chooseSquareComputer(validMoves) {

  let killShot = calculateBestMove('attack');
  if (killShot) return String(killShot);

  let defensiveMove = calculateBestMove('defend');
  if (defensiveMove) return String(defensiveMove);

  if (validMoves.includes('5')) return '5';
  
  let computerMove = Math.floor(Math.random() * validMoves.length);

  return validMoves[computerMove];
}

function calculateBestMove(strategy) {
  const tokenCheck = strategy === 'attack' ? COMPUTER_MARKER : HUMAN_MARKER;
  let computerMove = null;

  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
  
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

  for (let line = 0; line < winningLines.length; line++) {
    //Iterate through winning lines
    //Check if 2 out of 3 options in line were selected by opponent
    //Check if 1 item in array has X, if so, check if another has X as well
    //If two items has X, place move
    //If selected, choose remaining in line option 
    let threatLevel = [0, 0, 0];
    for (let position = 0; position < winningLines[line].length; position++) {
      //If position in the virtual board has a human marker
      //Add 1 to the threat level for that position

      if (virtualBoard[spaceKey[winningLines[line][position]]] === tokenCheck) {
        threatLevel[position] += 1;
      }
    }

    if (threatLevel.reduce((total, num) => total + num) > 1) {
      let verb = strategy === 'attack' ? 'Killshot' : 'Threat'
      // console.log(`${verb} detected!`);
      //Check which index position of threat  level is still at 0
      //That position will be the line index computer defends
      if (virtualBoard[spaceKey[winningLines[line][threatLevel.indexOf(0)]]] === INITIAL_MARKER) {
        computerMove = winningLines[line][threatLevel.indexOf(0)];
        console.log(`Computer recognized ${verb} and will play: ` + computerMove);
        return computerMove; //Move is pre-validated by if statement. Return this move
      }
    }
  }
  
  return computerMove

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
    return 'draw';
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

function checkMatchWin(setup) {
  let maxWins = setup.winLimit
  if (setup.human >= maxWins) {
    return 'human'
  } else if (setup.computer >= maxWins) {
    return 'computer'
  }

  return null
}

function resetMatch(setup) {
  setup.human = 0;
  setup.computer = 0;
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
  let play = rlSync.question('\nWould you like to play Tic-Tac-Toe? [y/n]:\n');
  while (play.toLowerCase() !== 'n' && play.toLowerCase() !== 'y') {
    play = rlSync.question('Please enter [y/n] if you would like to play again:\n');
  }

  return (play.toLowerCase() === 'y');
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

/**Extra functions */
function joinOr(arr, delimiter=', ', conjunction='or') {

  if (arr.length <= 1) return String(arr);
  if (arr.length === 2) return `${arr[0]} ${conjunction} ${arr[1]}`;
 
  let newStr = '';
  let lastIndex = String(arr.length - 1);
  for (let choices in arr) {
   if (choices === lastIndex) {
     newStr += `${conjunction} ${arr[choices]}`;
     break;
   }
   newStr += `${arr[choices]}${delimiter}`;
  }
  return newStr;
 }

 /** Keep Score
 * 
 * Explicits:
 * 1. Keep track of how many times the player and computer each win
 * 2. Report score after each game
 * 3. First to win x amount of games wins the overall match
 * 4. After a match, score should reset to 0
 * 
 * Implicits:
 * 1. A match will be first to x wins
 * 
 * 
 * Player wins 4 times, computer wins 4
 * Score: 4 | 4
 * 
 * Player wins 5th time
 * 
 * Score: 5 | 4 - Player wins match!
 * Matches Won: 1 (Player) | 0 (Computer)
 * Score is reset to 0
 */