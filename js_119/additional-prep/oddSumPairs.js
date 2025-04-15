/**
P: Given an array of numbers, return all pairs whose sum is odd. Return an empty array if no such pairs exist.

 */

/**
 * I: Array of numbers
 * O: Array of arrays of number pairs with odd sums or empty array if no pair exists
 * 
 * Explicits:
 * 1. Return all pairs whose sum is odd
 * 
 * Implicits:
 * 1. All combinations
 * 
 * Ideas:
 * 1. Combinations loop
 * 
 * [1, 2, 3, 4]
 * 1
 * 1, 2 --> odd [[1,2]]
 * 1, 3 -- even
 * 1, 4 --> odd [[1,2], [1,4]]
 * 
 * DS:
 * 1. Array to iterate
 * 2. Array to hold array pairs [[]]
 * 3. Double loop to crawl through array
 * 
 * Algorithm:
 * 1. Iterate through array
 * 2. For each element, start a new loop
 * 3. Iterate through each element after current element
 * 4. For each new element, evaluate if that element + 'current' element is odd
 * 5. If so, add as array pair to newPairArray
 * 6. If not, skip
 * 7. Return array of arrays
 */

function oddSumPairs(numArr) {
    let arrayPairs = [];

    for (let numIdx = 0; numIdx < numArr.length; numIdx++) {
        // console.log(numArr[numIdx])
        for (let inNumIdx = numIdx + 1; inNumIdx <numArr.length; inNumIdx++) {
            // console.log(numArr[inNumIdx] + numArr[numIdx])
            if ((numArr[numIdx] + numArr[inNumIdx]) % 2 === 1) {
                arrayPairs.push([numArr[numIdx], numArr[inNumIdx]]);
            }
        }
    }

    // console.log(arrayPairs);
    return arrayPairs;
}

// Test cases
console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
console.log(oddSumPairs([2, 4, 6, 8])); // []
console.log(oddSumPairs([1, 3, 5])); // []
console.log(oddSumPairs([10, 11])); // [[10, 11]]

//Solved in 8.5 minutes