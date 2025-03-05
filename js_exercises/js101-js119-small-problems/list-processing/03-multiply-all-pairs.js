/**
 * Write a function that takes two array arguments, each containing a list of numbers, 
 * and returns a new array containing the products of all combinations of number pairs 
 * that exist between the two arrays. The returned array should be sorted in ascending 
 * numerical order.

You may assume that neither argument will be an empty array.
 */

/**P
 * I: 2 arrays
 * O: Array with products of all combinations of number pairs sorted ascending
 * 
 * Possible combinations === array length * array length * 
 * [1] [2] --> [2]
 * [2, 3] [4, 1] --> [2, 3, 8, 12]
 * 
 * Explicits:
 * 1. function takes 2 arguments
 * 2. Each argument is an array containing a list of numbers
 * 3. Arrays arguments will never be empty
 * 4. Return a new array
 * 5. New array contains products of all combinations of number pairs
 * --that exist BETWEEN the two arrays
 * 6. New array should be sorted ascending
 * Implicits:
 * 1. Possible combinations === array length * array length
 * 2. 
 * 
 * CQ: BETWEEN suggests the product combinations are only between thw two arrays? --Yes, looking at example shows this
 *   
 */

/**
 * D: Arrays
 * 
 * Alg:
 * 1. Loop through array1
 * 2. For each element in array 1, 
 * 3. Iterate through array2 and multiply each element with arr1 element
 * 4. Push product to new array
 * 5. Sort new array
 * 6. return new array
 * Ideas:
 * 2 loops
 */

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  arr1.forEach(arr1Num => {
    arr2.forEach(arr2Num => {
      newArr.push(arr1Num * arr2Num);
    })
  })

  return newArr.sort((a, b) => a - b);
}

function multiplyAllPairs(arr1, arr2) {
  let newArr = arr1.map(num1 => {
    return arr2.map(num2 => num2 * num1);
  })
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
