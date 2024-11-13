/** Problem
 * Fibonacci Number Location
 * 
 */

/** P
 * 
 * Inputs: Number (representing number of digits)
 * Outputs: Number (representing index of first fibonacci #
 * that has the # of digits from input)
 * 
 * Fibonacci series is a series of numbers
 * 1, 1, 2, 3, 5, 8, 13, 21, ...
 * each subsequent number is the sum of the two
 * previous numbers
 * 
 * Index of first 1 is 1
 * Index of 13 is 7
 * 
 * We are using bigInt
 * 
 * Mental model:
 * 
 * Given a BigInt integer 2 or higher, create a function that outputs
 * the index of the first number in the fibonacci sequence
 * that has the amount of digits of the inputted number.
 */

/**E
 * 
 * Input: 2n
 * Output: 7n
 * Because sequence is 1 1 2 3 5 8 13 (13 is 7th number)
 * 
 * Input: 3n
 * Output: 12n
 */

/** DA
 * Data structure: BigInt Numbers input and output
 * 
 * Algorithm:
 * 1. Create a function that takes 1 argument
 * 2. Run fibonacci calculation loop
 * 3. For each iteration, convert to string and check length
 * 4. global iteration counter += BigInt(1)
 * 5. IF Length == argument, return global iteraton counter value
 * 
 * fibonacci calculation loop algorithm:
 * 1. WHILE true
 * 2. let index = 1
 * 3. let prevNum = 1
 * 4. let currentNum = 1
 * 5. newNumber = prevNum + currentNum
 * 6. prevNum = currentNum
 * 7. currentNum = newNumber
 * 4. iteration += 1;
 * 
 * 
 * nn 2, p = 1, c = 2
 * nn = 3, p = 2, c = 3
 */

function findFibonacciIndexByLength(numLength) {
  let index = 2n;
  let prevNum = 1n;
  let currentNum = 1n;
  let newNumber;

  while (true) {
    newNumber = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = newNumber;
    index += 1n;

    if (String(currentNum).length === Number(numLength)) {
      break;
    }
  }

  return index;

}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
/** 1
 * 
 */