/**
P: Create a function that takes an array of integers as an argument. 
The function should return the minimum sum of 5 consecutive numbers in the array. 
If the array contains fewer than 5 elements, the function should return null.

 */

/**
 * I: Array of integers
 * O: Minimum sum of 5 consecutive integers. If array < 5 length, return null
 * 
 * Implicits:
 * 1. Conseuctuve === numbers one after another
 * [1, 2, 3, 4, 5, -5]
 * [1, 2, 3, 4, 5] --> 15
 * [2, 3, 4, 5, -5] --> 9
 * Return 9
 * 
 * Looping through an array, from starting index to starting index + 4 (inclusive)
 * Summing those elements, and checking if it is the lowest sum
 * Once the lowest sum from this process is found, return it
 * 
 * [15, 9] return minmium number from tracking array
 * 
 * DS:
 * 1.Array of numbers
 * 2. Array to track sums
 * 
 * Algorithm:
 * ---minNumArray = [];
 * 1. Check array length, if less than 5, return null  [1, 2, 3, 4, 5, -5]
 * 2. Loop through array
 * ---Starting at index 0, and stopping if current index + 4 === array length
 * 3. For each element,
 * ---Slice the current index up to current index + 4 (inclusive)
 * ---Sum the total of this slice
 * ---push to minNumberarray
 * 4. Return minimum number from array
 * 
 * 
 */

function minimumSum(numArr) {
    if (numArr.length < 5) return null;
    let minNumArray = [];

    for (let idx = 0; idx + 4 < numArr.length; idx++) {
        minNumArray.push(sumArr(numArr.slice(idx, idx + 5)));        
    }

    return Math.min(...minNumArray);
}

function sumArr(arr) {
    return (arr.reduce((acc, el) => acc + el));
}



const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

//Solved in 10 minutes