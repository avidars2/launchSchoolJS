/**
Create a function that takes an array of integers as an argument. 
Determine and return the index N for which all numbers with an index less than N sum 
to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.
 */

/**
 * I: Array of integers
 * O: Number representing index N for which all numbers with an index less than N
 * sum to the same value as the numbers with an index greater than N. If no index makes this happen
 * return -1
 *
 * Explicits: 
 * 1. If array has multiple answers, return index with smallest value
 * 2. Sum of numbers left of index 0 is 0, sum of numbers right of last element is 0
 * 
 * Implciits:
 * 1.The first element and last element can be skipped, unless all #'s are 0 ?
 * 2. The index found is not counted for the sum
 * 
 * Returning a Number, which will be the index where all values with an
 * index less than N, sum to the same value as the numbers with an index greater than N
 * 
 * I'm essentially looking for the 'halfway' point between the sums of integers to the left
 * and the right of my current index
 * 
 * [1, 2, 4, 4, 2, 3, 2]
 * 
 * Starting at 1, does 0 == sum of 2, 4, 4, 2, 3, 2? No
 * 2, does 1 === sum of 4, 4, 2, 3, 2 ? No
 * 4, does 3 === sum of 4, 2, 3, 2 ? No
 * 4, does 7 === sum of 2, 3, 2 ? Yes
 * 
 * Iterating through an array
 * For each element, evaluate the sum of the elements to the left and right of it
 * If they are equal, return the index of that element
 * Otherwise, if no options are valid, return -1
 * 
 * First element, the total of elements left of index 0 is 0, and right of last element is 0
 * 
 * Data structures:
 * 1. Array
 * 2. Numbers
 * 
 * Algorithm:
 * 1. Iterate through an array [1, 2, 4, 4, 2, 3, 2]
 * 2. For each element, evaluate if the total of the slice from 0, to current array index //[1 (Index is 0, so skip)]
 * //2, 0, 1 --> 1 | 2, end of array --> 15, does the sum of both equal each other? No
 * is equal to the total of the slice from current array index + 1, to the end of the array
 * --If array index === 0, skip, && if array index === last index, skip
 * --IF equal, return index #
 * --If no matches, return -1
 * ///Idea - findIndex
 * 3. 
 *
 */

function equalSumIndex(arr) {
    return arr.findIndex((el, idx) => {
        if (idx === 0) {
            return (0 === sumOfSlice(arr.slice(idx + 1)));
        } else if (idx === (arr.length - 1)) {
            return (0 === sumOfSlice(arr.slice(0, idx + 1)));
        }
        if (sumOfSlice(arr.slice(0, idx)) === sumOfSlice(arr.slice(idx + 1))) {
            return true;
        }
    })
}

function sumOfSlice(arr) {
    return (arr.reduce((acc, el) => acc + el));
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);

//Solve time 15.5 minutes