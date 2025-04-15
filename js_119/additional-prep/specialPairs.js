/* 
Implement a function that finds all pairs of numbers from an array, where:
- The first number in each pair is located at an even index in the original array and has a value less than 5.
- The second number in each pair is located at an odd index in the original array and has a value greater than 5.
*/
/**
 * I: Array of numbers
 * O: Array of arrays, of pairs of numbers
 * 
 * Excplicits:
 * 1. First number in each pair is located at an even index in original array and < 5
 * 2. Second number in each pair is located at an odd index in original array and > 5
 * 
 * Implicits:
 * 1.All pairs, even if teh number is repeated
 * 2. 0 is even index
 * 3. The start number I loop on could just be the even indexes??**
 * ([2, 6, 1, 7, 4, 10])
 * [2, 6], [2, 7], [2, 10]
 * 
 * With the current number I'm on, i'm checking the remaining elements in the array
 * to see if they match the criteria and can become a Combinations, whih would get
 * pushed into a new array
 * 
 * [1, 7], [1, 10]
 * [4, 10]
 * 
 * 
 * 
 *  [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
 * 
 * I will iterate through the array, and for each number,
 * --Check if the number is valid first pair
 * --< 5 && even index
 * start a new loop, starting from the next element in the array,
 * 
 * Check if the number is valid as a second pair
 * --> 5, && odd index
 * 
 * 
 * Ideas:
 * 1. Combinations type of loop
 * 
 * DS:
 * 1. Array -- to keep track of valid pairs
 * 2. Arary iterating through
 * 3. Numbers, comparing them
 * 
 * Algorithm:
 * --validCombosArray = []
 * 1. Iterate through the number array [2, 6, 1, 7, 4, 10]
 * 2. For each number, evaluate if it is a valid first pair
 * ---Check if < 5  and if index is even
 * ----- % 2 === 0
 * 3. If false, skip
 * 4. If true
 * ---New loop from next index
 * ---Evalaute if it is a valid second pair
 * ----Check if > 5 && if index is odd
 * -----% 2 === 1
 * ---If true, create a new array out of the first valid pair and second, and push to
 * ----new array //[2, 6]
 * --If false, skip
 * 5. return the validCombosArray
 * 
 * 
 */

function findSpecialPairs(numArr) {
    let validCombosArray = [];
  
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] < 5 && (i === 0 || i % 2 === 0)) {
        for (let nextNum = i + 1; nextNum < numArr.length; nextNum++) {
          if (numArr[nextNum] > 5 && (nextNum % 2 === 1)) {
            validCombosArray.push([numArr[i], numArr[nextNum]]);
          }
        }
      } else continue;
    }
  
    return validCombosArray
  }
  
  // Test cases
  console.log(findSpecialPairs([2, 6, 1, 7, 4, 10])); // [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
  console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4])); // [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]
  console.log(findSpecialPairs([5, 12, 3, 8])); // [ [ 3, 8 ] ]
  console.log(findSpecialPairs([7, 4, 6, 5])); // []
  console.log(findSpecialPairs([1, 7, 2, 8, 3, 9])); // [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]

  //Solved in 13 minutes