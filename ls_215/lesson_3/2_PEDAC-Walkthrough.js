/**
 * 
2, 3
3, 2
4, 1
5, 0


2, 3
5, 0

6, 7
1, 2




4, 5
5, 6
6, 7


Rule:
x, y
--x + 1 and y + 1 can increment in parallel until they equal coordinate
-- x -1 and y - 1 can increment in parallel until they equal coordinate
-- x -1 and y + 1 or x + 1 and y - 1 can increment in parallel until equal coordinate


-- Coordinate set - coordinate set === even numbers then diagnol

The absolute value difference between coordinate set 1 and coordinate set 2 should be equal
If so, then they are diagnol

1, 2


4, 5
 */

/**
 * Problem/Context:
 * 1. Queen can attack pieces whicch are on the same row, column, or diagonal

_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ W _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _


* Inputs: String representation of the board with the two queens

________\n_______

 * Outputs: Boolean based on if queens can attack each other
 * 
 * Explicits
 * 1. From board above - White queen position is 2,3
 * 2. Black queen is at 5, 6
 * 3. Queens are on same diagonal and therefore can attack each other
 * 4. Write a function, which given a string representation of the board with the two queens, returnst rue or false
 * depending on whether queens can attack each other
 * 
 * 
 * Impicits
 * 1. Absolute value difference between coordinates being the same number means they are diagnol
 * 
 * CQ:
 * 1. Is the input guaranteed to be a string representation of the board?
 * 2. Can it have multiple queens or just one queen?
 * 3. Can it have 2 white queens or 2 black queens?
 * 4. What does the string representation actually look like? Will it be like the example above?
 * 5. IS W white queen? Is B black queen?
 * 6. Is first number X axis or y axis?
 * ---(2, 3) --> (y, x)
 * 7. What is a row? What is a column? What is a diagnol?'
 * 8. How consistent is inputs? will board always be same size?
 * 9. Can pieces take the same coordinate?-- No
 * Testing:
 * (y, x)
 * 
 * (6, 4) (5, 5)
 * 
 * 6 - 5, 4- 5 --> Math.abs --> 1, 1
 * 
 * (6, 4), (5, 4)
 * (0, 0), (0, 2)
 * 
 * Diagnol:
 * Absolute value difference between coordinates === same number for (y, x)
 * 
 * Row/Column:
 * One value in each set of coordinates matches either in y position or x position
 * (2, 6) (6, 2) -X (But is diagnol)
 * (2, 6) (2, 7) -Valid
 * 
 * Edge cases:
 * 1. Bad board? Non-string input ?W hat to return? --undefined
 * 2. What if multiple W's or B's, or no W' or B? --undefined
 * 
 * DS
 * [___, ___, _B__]
 * B_____ 
 * _W____
 * 
 * Does the string contain a piece? If so, find the piece
 * arr[2][1] --> B
 * 
 * - I need to get the coordinates of the pieces
 * - Pass coordinates to algorithm to see if they can attack each other
 * 
 * A:
 * High level:
 * 1. Take a string
 * 2. Verify the string is valid (72 length, is a string, contains B, W pieces)
 * ---Contains 1 and only 1 black piece and white piece
 * ---String only contains "B", "W", "_", "\n"
 * 3. Split the string into each row of a chessboard (8x8) (\n)
 * 4. Find Black queen and white queen coordinates from board
 * ----Return/mark coordinates
 * ------blackCoord = [5, 6]
 * ------whiteCoord = [2, 3]
 * 5. Test coordinates to see if queens can attack each other
 * 6. If true, return true, else return false
 * 7. If invalid board, return undefined
 * 
 * Detailed:
 * 2. Verification
 * ---Check "type of" ===  "string" ? x--> undefined
 * ---String include "B" and "W"? to lowerCase, x--> undefined
 * ---Count "B" and count "W", if !== 1 for each, x--> undefined
 * ---Check string only has _, \n, B, W, x--> undefined
 * 5. Test coordinates to see if queens can attack each other
 * [2, 3], [5, 6]
 * 2 - 5 === -3
 * 3 - 6 === 3
 * 
 * 3 === 3, valid
 * 
 * coord[0] === coord2[0] || coord[1] === coord2[1], valid
 * 
 * 
 * 
 */

function queenAttack(board) {
  let result = verifyInput(board);
  if (result === undefined) return undefined;
  //Board should be 72 length

  let blackPiece = [];
  let whitePiece = [];
  let boardArr = board.split("\n");

  boardArr.forEach((row, idx) => {
    if (row.toLowerCase().includes("b")) {
      let xCoord = findValidCharIdx(row, "b");
      let yCoord = idx;
      blackPiece[0] = yCoord;
      blackPiece[1] = xCoord;
    }
    if (row.toLowerCase().includes("w")) {
      let xCoord = findValidCharIdx(row, "w");
      let yCoord = idx;
      whitePiece[0] = yCoord;
      whitePiece[1] = xCoord;
    }
  })
  /**
   * For each row,
   * Track current row index
   * Search each row for "B" or "W"
   * If includes B, find position of "B"
   * Split into characters, then find index
   */
  // console.log(blackPiece, whitePiece);
  return (isDiagnol(blackPiece, whitePiece) || isAcross(blackPiece, whitePiece));
}

function findValidCharIdx(row, charToFind) {
  return row.split("").findIndex(char => char.toLowerCase() === charToFind.toLowerCase());
}

function verifyInput(input) {
  if (typeof input !== "string") return undefined;
  if (input.length !== 72) return undefined;
  if (!input.toLowerCase().includes("b") || !input.toLowerCase().includes("w")) return undefined;
  //"b___w__b"
  let bCount = 0
  let wCount = 0;
  input.toLowerCase().split('').forEach(char => {
    if (char === "b") bCount++;
    if (char === "w") wCount++;
  })

  if (bCount !== 1 || wCount !== 1) return undefined;

  let validCharacters = ['b', 'w', '_', '\n'];
  let invalidFound = input.toLowerCase().split('').some(char => !validCharacters.includes(char))
  if (invalidFound) return undefined;

  return true;
}

function isDiagnol(coordinateOne, coordinatesTwo) {
  let yCoordAbs = Math.abs(coordinateOne[0] - coordinatesTwo[0]);
  let xCoordAbs = Math.abs(coordinateOne[1] - coordinatesTwo[1]);

  return yCoordAbs === xCoordAbs;
}

function isAcross(coordinateOne, coordinatesTwo) {
  return ((coordinateOne[0] === coordinatesTwo[0]) || (coordinateOne[1] === coordinatesTwo[1]))


}


let input = "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n";

let acrossAttack = "__BW____\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n";

let acrossAttackTwo = "________\n" +
            "_B______\n" +
            "________\n" +
            "_W______\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n";

let diagnolAttack = "________\n" +
            "________\n" +
            "B_______\n" +
            "_W______\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n";
let diagnolAttackTwo = "B_______\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "_______W\n";
let noAttack = "_B______\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "_______W\n";

//Edge cases
let invalidOne = "B_______\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n";

let invalidTwo= "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "_______W\n";            
let shortBoard= "________\n" +
            "________\n" +
            "________\n" +
            "__BW____\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "_______\n";            
let wrongType= ["________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "______BW\n"];            
let dontWork = "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "________\n" +
            "_____BBW\n";            



console.log(input.length);

let tests = [input, acrossAttack, acrossAttackTwo, diagnolAttack, diagnolAttackTwo, noAttack, invalidOne, invalidTwo, shortBoard, wrongType];
let outputs = [undefined, true, true, true, true, false, undefined, undefined, undefined, undefined]
tests.forEach((test, idx) => {
  console.log(queenAttack(test) === outputs[idx]);
})

console.log(queenAttack(dontWork) === undefined)