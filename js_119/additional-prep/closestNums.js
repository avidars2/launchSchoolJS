/**
P: Create a function that takes an array of integers 
as an argument and returns an array of two numbers that 
are closest together in value. If there are multiple pairs 
that are equally close, return the pair that occurs first 
in the array.

 */

/**
 * I: Array of integers
 * O: Array of two numbers that are closest together in value
 * 
 * Explicits:
 * 1. If multiple pairs are equally close, return pair that occurs first in array
 * 2. Last # if using below looping strategy does not need to be iterated
 * 
 * Implicits:
 * 1. First in array meaning the starting # comes first
 * 
 * [12, 22, 7, 17]
 * 12 22 - 10
 * 12 7 - 5
 * 12 17 - 5
 * 
 * Distance: 5
 * Pair: [12, 7]
 * 
 * 22, 7 - 15
 * 22 17 - 5
 * 
 * Is this distance < current distance ? No
 * 
 * 7 17 10
 * 
 * 17 has nothing to eval against
 * 
 * Data structures:
 * 1. Array [1, 2, 3, 4]
 * 2. Loop through thar array, and inner loop through same array + 1 index
 * 
 * Algorithm:
 * --Distance = Infinity
 * --Pair = []
 * 1. Take the number array [12, 22, 7, 17]
 * 2. Loop through number array
 * 3. For each element, evaluate it against eaach remaining element in array [12]
 * 4--Inner loop 
 * --For each element, measure difference [12, 22] // 10, 5
 * --If difference < outside variable distance, re-assign && change pair to current elements
 * --Other wise, continue iteration
 * 
 * 
 */

function closestNumbers(arr) {
    let distance = Infinity;
    let pair = [];

    arr.forEach((el, idx) => {
        if (idx === arr.length - 1) return;
        for (let x = idx + 1; x < arr.length; x++) {
            if (Math.abs(el - arr[x]) < distance) {
                distance = Math.abs(el - arr[x]);
                pair = [el, arr[x]]
            }
        }
    })

    return pair;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));

//Solved in 9.75 minutes