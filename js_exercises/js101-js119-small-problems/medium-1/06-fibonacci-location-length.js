/**
 * Definitions:
 * Fibonacci is a series of numbers which
 * by definition the first two are 1
 * then each subsequent number is the sum
 * of the previous two numbers
 */
/**
 * I: Number of digits
 * O: Index of first Fibonacci number that has input # of digits
 * 
 * Explicits:
 * 1. First fibonacci number has an index of 1
 * 2. Argument is always an integer greater than or equal to 2
 * 3. Use Bigint
 * 
 * Implicits:
 * 1. Zero based indexing isn't used for this
 * Which means if a list structure was used
 * The list length would be the index
 * 
 * 2n --> 7n
 * 1 + 1 === 2 (Index 1 and 2)
 * 2 + 3 === 5 (Index 3 and 4)
 * 3 + 5 === 8 (Index 5)
 * 5 + 8 === 13 (Index 6)
 * 
 * 1, 1, 2, 3, 5, 8, 13
 * 
 * 1 + 1 === 2
 * 
 * 1, 1
 * [1, 1] array.length -1) + array.length - 2
 * 
 * 
 * 
 * 
 */

/**DA
 * Data structures
 * Bigints, mutating array, strings (to measure length)
 * 
 * Prev # = 1
 * Starting # = 1
 * let newNum;
 * Position = 2
 * 
 * while (String(starting#).length < arg) {
 * newNum = Starting + prev
 * prev = Starting
 * Starting = newNum
 * position += 1
 * 
 * }
 * 
 * Algorithm:
 * 1. Take bigInt argument
 * 2. Calculate fibonacci # until we get a number of argument length
 * 2--
 * 2-1 Calculate next number in fibonacci sequence
 * 2-2 Check if length of that number === arg
 * 2-3 If yes return index, else repeat
 * 
 * 
 */

function findFibonacciIndexByLength(len) {
  let prevNum = 1n
  let startingNum = 1n
  let newNum;
  let position = 2n;

  while (String(startingNum).length < String(len)) {
    newNum = startingNum + prevNum;
    prevNum = startingNum;
    startingNum = newNum;
    position+= 1n;
  }

  // console.log(`Starting number: ${startingNum}, position: ${position}`);
  return position;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.