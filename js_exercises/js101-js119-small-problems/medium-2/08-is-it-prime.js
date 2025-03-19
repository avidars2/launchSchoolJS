/**
 * Definitions
 * Prime number is a positive number that is evenly divisible only by itself and 1
 * 23 prime because only divisors are 1 and 23
 * 1 is not prime
 */

/**
 * I: Number
 * O: Boolean based on if number is prime
 * 
 * Explicits:
 * 1. Positive integer argument
 * 2. Return true if number is prime
 * 3. False if it is not prime
 * 4. 1 is not prime
 * 
 * Implicits:
 * 1. 2 is the only even prime number
 * 2. From test cases, input can be a positive integer with extra details attached '3_297_061'
 * 
 * CQ:
 * 1. What about 0? //Not prime because not divisible by 1 evenly
 * 2. Only Number arguments
 * 
 * 
 * 5 --> true
 * 2 --> true
 * 1 --> false
 * 
 * 
 * 
 */

/**
 * Data structures:
 * Numbers
 * 
 * Algorithm:
 * How do we figure out if a number is prime?
 * 
 * 7 / 2 ? --> not integer
 * 7 / 3 ? --> not integer
 * 7 / 4 ? --> not integer
 * 7 / 5 ? --> not integer
 * 7 / 6 ? --> not integer
 * 7 / 7 ? --> integer 1
 * 
 * Possible idea:
 * 1. Because we know 2 is only even prime
 * 2. Iterate up to 1/3 of number
 * 3. For each iteration, check if number % iteration === 0
 * 4. If found, number is not prime
 * 5. If not found, number is prime
 *
 * Algorithm:
 * 1. Take Number
 * 2. Create a loop
 * 3. Loop from 3 up to 1/3 of number
 * 4. For each iteration, check if number % iteration count === 0
 * 5. If so, break and return false
 * 6. Else return true
 * 7. Edge cases: If # is 2, return true 
 */

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let test = 3; test <= (num / 3); test++) {
    if (num % test === 0) return false;
  }
  return true;
}


console.log(isPrime(1) === false)            // true
console.log(isPrime(2) === true)             // true
console.log(isPrime(3) === true)             // true
console.log(isPrime(4) === false)            // true
console.log(isPrime(5) === true)             // true
console.log(isPrime(6) === false)            // true
console.log(isPrime(7) === true)             // true
console.log(isPrime(8) === false)            // true
console.log(isPrime(9) === false)            // true
console.log(isPrime(10) === false)           // true
console.log(isPrime(23) === true)            // true
console.log(isPrime(24) === false)           // true
console.log(isPrime(997) === true)           // true
console.log(isPrime(998) === false)          // true
console.log(isPrime(3_297_061) === true)     // true
console.log(isPrime(23_297_061) === false)   // true
