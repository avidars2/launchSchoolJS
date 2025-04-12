/**
P: A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. 
For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

 */
/**
 * I: Integer
 * O: Next featured number greater than the integer or error message if no next featured number
 * 
 * Explicits:
 * 1. Featured #
 * --Odd
 * --Multiple of 7
 * --Each digit occurs exactly once each
 * 
 * Implicits:
 * 1. A number with every number below 10 is the max featured number
 * 9876543201
 * 
 * 49
 * --odd
 * ---49 % 2 === 1
 * --Multiple of 7
 * ----49 % 7 === 0
 * 1 4, 1 9
 * 
 * 133
 * 1 - 1
 * 3 - 1
 * 3 - 2
 * 
 * Given an input #, starting 1 # higher, find the next highest featured #
 * By evaluating if the increments are odd, a multiple of 7, and has unique digits
 * 
 * Data structures:
 * 1. Array/strings
 * --To check if # is featured by chcecking repeats
 * 2. Numbers
 * 
 * Algorithm:
 * 1. Take input #
 * 2. Increment through odd #'s starting 1 higher than input
 * ---Input # if odd start + 2, if even start + 1
 * --Increment by 2
 * --Max # 9876543201 (while less than)
 * 3. Evaluate each increment for the following
 * --Odd (num % 2 === 1)
 * --Multiple of 7 (num % 7 === 0)
 * --Unique digits
 * 4. If matches criteria, return #
 * 5. If no number matches criteria, return Error message
 * 
 * 
 * UD
 * 1. Convert number into string
 * 2. Break string into individual characters
 * 3. Count occurrence of each character
 * 4. If any character occurs more than once, return false
 * 5. If all characters occur once, return true
 * 
 */

function featured(num) {
    let startNum = (num % 2 === 0) ? 1 : 2;
    const MAX = 9876543201;

    for (let start = num + startNum; num < MAX; start+=2) {
        if (start % 2 === 0) continue;
        if (!(start % 7 === 0)) continue;
        // console.log(start)
        if (uniqueDigits(start)) {
        return start;
        }
    }

    return 'No next featured number'
}

function uniqueDigits(num) {
    let numStrArr = `${num}`.split('');
    let moreThan1 = Object.values(numStrArr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})).filter(el => el > 1);
    // console.log(moreThan1)

    return moreThan1.length === 0;
}

// uniqueDigits(35)

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

//Solved in 17.45 minutes