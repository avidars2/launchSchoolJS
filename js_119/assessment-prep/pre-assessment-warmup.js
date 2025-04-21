

/**
 * I: Array of integers
 * O: Return minimum sum of 5 consecutive integers in the array
 * 
 * Explicits:
 * 1. Return null if array contains fewert han 5 elements
 * 2. Return minimum sum of 5 consecutive elements
 * 
 * 1, 2, 3, 4, 5, -5 --> 9
 * 
 * Find lowest sum of 5 consecutive elements
 * 
 * Ideas:
 * 1. Slicing 5 at a time per iteration
 * ---<= arr length - 5
 * 
 * 1, 2, 3, 4, 5, -5
 * 
 * 1, 2, 3, 4, 5 --> 15
 * 
 * let smallestTotal = Infinity //check if new total < smallest, if so re-assign
 * 
 * 2, 3, 4, 5, -5 --> 9
 * 
 * I am iterating through an array of numbers, a slice of 5 at a time,
 * And evaluating if that slice is the lowest sum in the array
 * 
 * DS:
 * 1. Array of numbers
 * 
 * Algorithm:
 * 0. minSum = Infinity
 * 1. Iterate through the array
 * --Taking current element, up to current indx + 5 slice
 * 2. Get a slice, 5 numbers at a time (if not possible from the start, return null)
 * 3. Calculate sum of slice
 * --Sum the array slice (reduce it (acc, el) => acc + el)
 * 4. If sum < minSum, re-assign, else continue looking
 * 
 * 5. Return minSum
 */

function minimumSum(arrOfNums) {
    if (arrOfNums.length < 5) return null;
    const getTotal = arr => arr.reduce((el, acc) => el + acc);
    let minSum = Infinity;

    for (let i = 0; i <= arrOfNums.length - 5; i++) {
        let testArr = arrOfNums.slice(i, i + 5);
        // console.log(testArr)
        // console.log(getTotal(testArr))
        if (getTotal(testArr) < minSum) minSum = getTotal(testArr);
    }

    return minSum;
}




const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);