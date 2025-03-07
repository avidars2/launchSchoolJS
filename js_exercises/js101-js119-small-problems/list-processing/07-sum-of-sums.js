/**
 * Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
 * Examine the examples to see what we mean. You may assume that the array always contains at least one number.
 */
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/**
 * Input: Array of numbers
 * Output: Sum of the sums of each leading subsequence in the array
 * 
 * 1 + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 4 + 5) = 35
 * 
 * For each number in the array, take a number and add it to the sum of the sum of the preceding numbers in the array
 * [1, 2] --> 1 + (1 + 2)
 * 
 * Explicits:
 * 1. Array of numbers input
 * 2. Array will always contain atleast one number
 * 3. Function returns the sum of the sums of each leading subsequence in that array
 * 
 * Implicits:
 * 1. The first number in the array is included in the sum
 * 2. Every number preceding the the current number being iterated will be added to it
 * 
 * CQ:
 * 
 * 
 */

/**
 * Data structures:
 * Array input --> Iterate through
 * 
 * Algorithm:
 * 1. Take an array
 * 2. Iterate through array
 * 3. Assign variable total = 0 and sumTotal = 0
 * 4. For each number, add it to sumTotal, then add sumTotal to total
 * 5. Return total
 */

function sumOfSums(arr) {
  let total = 0;
  let sumTotal = 0;

  let totalOfSums =  arr.reduce((acc, num) => {
    acc[1] += num; //10
    acc[0] += acc[1]; //3 + 8 = 11 + 10
    console.log(acc[0]);
    return acc;
  }, [0, 0]) //[current total, sumTotal]
  /** Reduce will return a singular Number
   * 
   * One loop on the outside to iterate through array
   * Second loop on inside that adapts the starting position
   * 
   * Reduce to return a Number
   * Second loop to add current number to previous number
   * 
   */

  console.log(totalOfSums[0]);
  return totalOfSums[0];
}

function sumOfSums(arr) {
  return arr.reduce((sumAndTotalArr, currentNum) => {
    sumAndTotalArr[1] += currentNum;
    sumAndTotalArr[0] += sumAndTotalArr[1];
    return sumAndTotalArr;
  }, [0, 0])[0]
}

//Array methods that might make this easier
//Reduce?
//2 loops