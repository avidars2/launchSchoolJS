function solution1() {
/**
 * Create a function that takes an array of integers as an argument. 
 * The function should return the minimum sum of 5 consecutive numbers in the array. 
 * If the array contains fewer than 5 elements, the function should return null.

I: Array of integers
O: Minimum sum of 5 consecutive integers in the array

Explicts:
1. If array contains less than 5 elements, return null
2. Sum will be of CONSECUTIVE integers (1, 2, 3) or (-1, 0, 1) or ()

Implicits:
1. Array is all integers so it can be sorted and checked if length is 5

[1, 2, 3, 4]

-4, -3, -2, -1, 0 --> -10

1, 2, 2, 3, 5, 5, 6, 9, 55, 100 -->
1 + 2 + 3 + 5 + 6 = 16



Sort Number in ascending order
Evaluate if numbers are consecutive

CQ: What is meant by consecutive?
--Consecutive is the order they appear in the array
--This means sort can't be used
1 ,2 ,3 , 4, 5 === 15
2, 3, 4, 5, -15 === 9

[1, 2, 3, 4, 5, -5]

Loop through array, capturing one element up to a fifth element.
Evaluate total and save
total === 15

Iterate by 1, checking if 5th element is === length of array. If so, break and return total
If not,
check if new total < current total. If so, re-assign total
total === 9

DS:
1. Array
2. Numbers
Algorithm:
1.Iterate through array
--Check if fifth index element is out of bounds, if so break and return current total
2. Evaluate total of current index up to fifth index element of array
3. If less than current total, re-assign current total
4. If not, keep iterating
5. Return current total

 */


function minimumSum(arr) {
    if (arr.length < 5) return null;
    let total = Infinity;
    arr.forEach((el, idx) => {
        if (arr[idx + 4] === undefined) return;
        let currentTotal = 0;
        for (let i = 0; i < 5; i++) {
            currentTotal += arr[idx + i];
        }
        // console.log(currentTotal)

        if (currentTotal < total) {
            total = currentTotal;
        }
    })

    return total


}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9); //2, 3, 4, 5, -5 === 9
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15); //1, 2, 3, 4, 5 === 15
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16); //2, 6, 5, 1, 2 === 16
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10); //-3, 0, -1, 2, -4 === -10
}
//Time to solve 21.5 minutes
//Sticking point: Took me some time to understand what 'consecutive' meant

/**
 *  * Create a function that takes an array of integers as an argument. 
 * The function should return the minimum sum of 5 consecutive numbers in the array. 
 * If the array contains fewer than 5 elements, the function should return null.
 */

/**
 * I: Array of integers
 * O: Minimum sum of 5 consecutive numbers in the array
 * 
 * Explicits:
 * 1. If array contains fewer than 5 elements, return null
 * 
 * Implicits:
 * 1. Consecutive means any element that is right after each other
 * 
 * [1, 2, 3, 4] --> Less than 5 elements, return null
 * 
 * [1, 2, 3, 4, 5, -5]
 * 1, 2, 3, 4, 5 --> sum = 15
 * 2, 3, 4, 5, -5 --> sum = 9
 * 3, 4, 5, -5, undefined //End before this
 * 
 * Iterate through the array
 * Get the first element up to the 5th element
 * If fifth element index >= array length, break loop
 * Get sum of first element up to 5th, compareNum = that result
 * Slide one over 2nd element up to 6th, num = that result; if num < compareNum, reassign compareNum
 * 
 * Iterate through an array, getting the element of the index at the current iteration
 * Up to the elements at the index 4 higher //0, 1, 2, 3, 4
 * Evaluate the sum of those elements and assign it to a variable compareNum IF the value
 * is less than compareNum
 * 
 * Data structures:
 * 1. Array
 * 2. Variable to hold values
 * 3. Numbers
 * 
 * Algorithm:
 * 1. Loop through an array [1, 2, 3, 4, 5, -5]
 * --IF array length < 5, return null
 * --lowestNum = Infinity
 * 2. For each element, 
 * --If current index + 4 >= length of array break loop //Index 1, 2, 3, 4, 5 (2, 3, 4, 5, -5) --> 9 //2, 3, 4, 5, 6
 * get element at current index up to element of current index + 4 //1, 2, 3, 4, 5
 * 3. Evaluate sum of those numbers, if less than lowestNum, reassign //15 which is lower, so lowestNum === 15
 * --Otherwise continue to next iteration
 * --REPEAT 2-3 until end
 * 4. Return lowest num
 * 
 * 
 */

function minimumSum(arr) {
    let lowestNum = Infinity;
    if (arr.length < 5) return null;

    for (let idx = 0; idx < arr.length; idx++) {
        if (idx + 4 >= arr.length) break;
        let currentTotal = arr.slice(idx, idx + 5).reduce((acc, el) => acc + el);
        if (currentTotal < lowestNum) {
            lowestNum = currentTotal;
        }
    }

    // console.log(lowestNum)

    return lowestNum
}


const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9); //2, 3, 4, 5, -5 === 9
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15); //1, 2, 3, 4, 5 === 15
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16); //2, 6, 5, 1, 2 === 16
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10); //-3, 0, -1, 2, -4 === -10

//Re-solved in 14.5 minutes