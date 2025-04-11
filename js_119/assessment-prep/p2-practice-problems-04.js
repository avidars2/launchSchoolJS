/**
 * Create a function that takes an array of integers as an argument and 
 * returns an array of two numbers that are closest together in value. 
 * If there are multiple pairs that are equally close, return the pair that occurs first in the array.
 */

/**
 * I: Array of integers
 * O: An array of two numbers that are closest together in value
 * 
 * If multiple pairs are equally close, return the pair that occurs first in the array
 * 
 * Explicts:
 * 1. Return an array of two numbers that are closest together
 * 2. Return first number pair, if multiple pairs are equally close
 * 
 * Ideas:
 * 1. Represent the difference
 * 2. Current close numbers
 * 3. Evaluate if difference < current difference
 * 
 * [5, 25, 15, 11, 20] --> 15 11
 * 5, 25, 15, 11, 20 --> Absolute value difference
 * 5, 25 --> 20
 * 5, 15 --> 10 (lower than 20)
 * 5, 11 --> 6 
 * 5, 20 --> 15
 * 
 * current lowest difference pair for 5 would be 5 and 11, and the diff would be 6
 * 
 * 25, 15 --> 10
 * 25, 11 --> 14
 * 25, 20 --> 5
 * 
 * current lowest difference pair for 25, would be 25 and 20, and the diff would be 5
 * 
 * lower than 6, so new lowest is 5 for 25 and 20
 * 
 * Repeat (eventually 15, 11 takes the permanent lead)
 * 
 * Data structures:
 * 1. Array [1, 2, 3] --> evaluate one element with the remainder at a time
 * 2. 
 * 
 * One loop iterating through array to get current element
 * Second loop through same array, evaluating element by element to get difference
 * 
 * Algorithm:
 * --Have variable OuterDiff: Lowest value, and pair
 * 1. Loop through first array
 * --Have variable InnerDiff: current value, and pair
 * 2. For each element:
 * 3. Loop through array again, evaluating the difference of the current element with the current
 * element of the second loop.
 * --IF lower, than current difference value, re-assign innerDiff to new difference value and pair
 * 4. For outer loop,p if inner diff < outerDiff, re-assign outter diff and pair
 * 5. Return outer pair
 * 
 */

function closestNumbers(arr) {
    let outerDiff = Infinity;
    let outerPair = [];
    arr.forEach((el, idx) => {
        if (idx === arr.length) return;
        let innerDiff = Infinity;
        let innerPair = [];
        //el === 5

        for (let innerIdx = idx + 1; innerIdx < arr.length; innerIdx++) {
            let difference = Math.abs(el - arr[innerIdx]); //5 - 25
            if (difference < innerDiff) {
                innerDiff = difference;
                innerPair = [el, arr[innerIdx]];
            }
        }
        if (outerDiff > innerDiff) {
            outerDiff = innerDiff;
            outerPair = innerPair;
        }
    })

    console.log(outerDiff, outerPair);
    return outerPair
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));

//Solved in 13.5 minutes