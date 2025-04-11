/**
 * Create a function that takes a single integer argument and returns the sum of all the 
 * multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.
 */

/**
 * I: Single integer
 * O: Sum of all multiples of 7 or 11 that are less than the argument
 * If a number is a multiple of both 7 and 11, count it just once
 * 
 * Explicits:
 * 1. If argument is negative, return 0
 * 2. Multiple must be less than the argument (So for 49, 42 would be the highest for 7, 44 for 11)
 * 25
 * 7, 11, 14, 21, 22 === 75
 * 
 * 7, 14, 21 [7, 14, 21]
 * 
 * 11 [7, 14, 21, 11]
 * 22 [7, 14, 21, 11, 22]
 * 
 * 1, current number % 7 === 0 ? If so && not in array, push
 * 
 * 25
 * 1, 2, 3, 4, 5, 6, 7!!, 8, 9, 10, 11!!, 12, 13, 14!!
 * [7, 11, 14]
 * 
 * Data structures:
 * 1. Array to hold found values
 * 2. Numbers
 * 
 * Algorithm:
 * 1. Loop up to input #
 * 2. For each increment of 1,
 * --Check if value % 7 === 0
 * --If so, push to array
 * --Check if value % 11 === 0
 * --If not in array already, push to array
 * 3. With the array of numbers, sum the total and return the total
 * 
 */

function sevenEleven(num) {
    let foundNumbers = [];

    if (num <= 0) return 0;

    for (let currentNum = 0; currentNum < num; currentNum++) {
        if (currentNum % 7 === 0) foundNumbers.push(currentNum);
        if (!foundNumbers.includes(currentNum) && (currentNum % 11 === 0)) foundNumbers.push(currentNum);
    }

    return foundNumbers.reduce((acc, el) => {return acc + el});
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);

//Solved in 9.75 minutes