/**
Create a function that takes an array of integers as an argument. 
The function should determine the minimum integer value that can be appended to the array 
so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. 
For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

 */

/**
 * I: Array of integers
 * O: Minimum number that can be added to array, so that the closest prime number > current sum of array is evaluated
 * 
 * [1, 2, 3] totals to 6
 * Add 1 to get 7 which is a prime #
 * 
 * How to calculate if a number is prime
 * The sum of the array
 * The next prime number after the sum of the array
 * The difference between the next prime number and the sum of the array
 * 
 * [1, 2, 3] --> iterate over, calculate sum
 * 
 * What is a prime # ?
 * --WHich is only divisible by itself and 1 with no remainder
 * Test the number against every number between 1 (exclusive) and itself (exclusive)
 * --If the current number % curren testing number === 0, the number is not prime
 * 
 * DS:
 * 1. Array
 * 2. Numbers
 * 
 * Algorithm:
 * 1. Get the sum of the array
 * 2. Determine the next prime # after that sum
 * 3. Get the difference between the next prime number and that sum, return that
 * 
 * Finding next prime:
 * Increment all numbers, or all odd numbers after the sum
 * For each number, determine if it is prime
 * --If so, return that number
 * --If not, keep incrementing
 */

function nearestPrimeSum(arrOfNums) {
    let arrSum = arrOfNums.reduce((el, acc) => el + acc);
    console.log(arrSum);

    let nextPrimeNum;

    for (let startingNumber = arrSum + 1; startingNumber < Infinity; startingNumber++) {
        if (isPrime(startingNumber)) {
            nextPrimeNum = startingNumber;
            break;
        }
    }

    return nextPrimeNum - arrSum;
}

function isPrime(startNum) {
    for (let i = 2 ; i < startNum; i++) {
        if (startNum % i === 0) {
            return false;
        }
    }
    return true;

}

// console.log(isPrime(12))

// console.log(isPrime(6));
const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

//Solved in 11 minutes