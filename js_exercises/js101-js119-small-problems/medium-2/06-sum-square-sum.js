/**
 * Computes the difference
 * between the square of the sum of the first count
 * positive integers and the sum of the squares
 * of the first count positive integers
 */
/**
 * I: Number
 * O: Differnece of the
 * Sum of (first count positive integers) and 
 * (sum of the squares of the first count positive
 * integers)
 * 
 * Explicits:
 * 1. Calculate difference between:
 * [sum of the first count positive integers]
 * [sum of the squares of the first count positive int]
 * 
 * Implicits:
 * 1. countSum** - countSqSum**
 * 2. The input is inclusive in the count
 * 3. Iterate to input, and sum, then square
 * 4. For each iteration, square and sum
 * 
 * 
 * 3 --> (1 + 2 + 3) --> 6** --> 36
 *        1** + 2** + 3 ** --> 14
 * 36 - 14 = 22
 * 
 * 1 --> (0 + 1)** --> 1 - (0** + 1**) = 0
 * 
 */

/**
 * Data structures:
 * Array to keep track of iterated numbers
 * Number --> Number
 * 
 * Ideas:
 * 1. Reduce to get sum before squaring
 * 2. Reduce on array to get square of each iteration
 * 
 * Algorithm:
 * 1. digitsUpToArr
 * 2. Push each number up to and including input value into array
 * 3 --> [1, 2, 3]
 * 3. Sum elements of array then square --> save this number
 * 4. Iterate over array, square each number and sum to next --> save this #
 * 5. Subtract step 4 result from step 3 result and return
 */

function sumSquareDifference(num) {
  let digitsUpToArr = [];
  let sumSquare = 0;
  let numSquareSum = 0;
 
  for (let digit = 1; digit <= num; digit++) {
    sumSquare+= digit;
    numSquareSum+= digit**2;
  // digitsUpToArr.push(digit);
 }

 sumSquare = sumSquare**2;

//  let arrSumSquare = digitsUpToArr.reduce( (sum, num) => {
//   return sum + num;  
// })**2;
// let arrNumSquareSum = digitsUpToArr.reduce((sqSum, num) => {
//   return sqSum + num**2;
// }, 0)

// console.log(arrSumSquare - arrNumSquareSum);

// return arrSumSquare - arrNumSquareSum;
console.log(sumSquare - numSquareSum);
return sumSquare - numSquareSum;


}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150