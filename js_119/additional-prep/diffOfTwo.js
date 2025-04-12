/**
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.
 */

/**
 * I: Array of numbers
 * O: Array of arrays, each inner array containing pair of numbers that
 * have a difference of two
 * 
 * Explicits:
 * 1. No duplicate numbers in the array
 * 2. Order ofnumbers in the input array should not matter
 * 
 * [1, 2, 3, 4]
 * 1 - 2 -- 1
 * 1 - 3 -- 2 [1, 3]
 * 1 - 4 -- 3
 * 
 * 2 - 3 -- 1
 * 2 - 4 -- 2 [2, 4]
 * 3 - 4 -- 1
 * 4
 * 
 * Iterate through an array
 * For each element,
 * Evaluate against remaining elements in array
 * Checking for the difference between the 2 numbers
 * If the difference === 2, push into an array, a nested array containing both numbers
 * If difference !== 2, ignore/skip
 * 
 * Data structures:
 * 1. Outer array to hold inner arrays
 * 2. Numbers, evaluate #'s
 * 
 * Algorithm:
 * 1. Iterate through an array [1, 2, 3, 4]
 * 2. For each element, evaluate against remaining elements in array [1]
 * --Inner loop from outer element starting index + 1 [2]
 * 3. Evaluate if outer element - inner element, absolute value === 2 [1 -3 === 2]
 * --If so, push an array containing both elements into outer array [1, 3]
 * --If not 2, continue iteration
 * 4. Return the outer array
 * 
 */
function differenceOfTwo(arr) {
    let pairsOfTwo = [];
    arr.forEach((el, idx) => {
        for (let inner = idx + 1; inner < arr.length; inner++) {
            let absoluteDifference = Math.abs(el - arr[inner]);
            if (absoluteDifference === 2) pairsOfTwo.push([el, arr[inner]].sort((a, b) => a - b));
        }
    })
    pairsOfTwo.sort();

    // console.log(pairsOfTwo);
    return pairsOfTwo;
}


// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// // // // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// // // //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // // // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// // // // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// // []

//Solved in 9.25 minutes