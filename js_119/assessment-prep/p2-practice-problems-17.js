/**
Create a function that takes an array of integers as an argument. 
The function should determine the minimum integer value that can be 
appended to the array so the sum of all the elements equal the closest 
prime number that is greater than the current sum of the numbers. For 
example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.
 */

/**
 * I: Array of integers
 * O: Number that needs to be added to the array, so that the total of the array elements equals
 * the next greatest prime number
 * 
 * Explicits:
 * 1. Array will always contain at least 2 integers
 * 2. All values in the array must be positive
 * 3. There may be multiple occurences of the various numbers in the array
 * 
 * Implicits:
 * 1. Array can be 2 elements long up to much higher
 * 2. I need to find the prime numbers
 * 3. How far the current sum is from a prime number
 * 
 * What is a prime #?
 * 1. A # only divisible integers are itself and 1
 * 
 * 6
 * 
 * How to find the prime # greater than the sum of the array?
 * I: Number
 * O: Prime # greater than that number
 * 
 * 6, 2, 3, 1
 * 7, 1, 2, 3, 4
 * 
 * 7 % 2 !== 0
 * 7 % 3
 * 7 % 4
 * 
 * Check if any right operand evaluates to a remainder 0 other than
 * 1 and the original number
 * 
 * 10
 * 11
 * 11 % 1 === 0
 * 11 % 2 != 0
 * nor 3, 4, 5, 6, etc.
 * 
 * Algorithm:
 * 1. Iterate over numbers greater than the input until I find a number which is prime
 * 2. Evaluate each increment with another loop
 * --Evaluate if the increment, starting at 2 up to but not including the current number being evaluated
 * --For a number where the evaluation # modulo each increment is 0 in all cases
 * 
 * --I will have an outer loop which will increment integer by 1 from the input #
 * --I will evaluate that increment (evlauation #), 
 *--Is From 2 up to but not including the evaluation #, does any modulo operation
 -----result in 0
 ----If so, it is not prime
 ----If not, it is prime
 -----I am checking if all modulo operations evaluate not to 0

 * 
 * 
 */

 function nearestPrimeSum(arr) {
    //Get total of array
    //That total will be the starting #
    //New loop, starting 1 above starting #
    //Increment by 1 and evaluate isPrime until a prime # is found

    let arrTotal = arr.reduce((acc, el) => acc + el)
    // console.log(arrTotal);

    let evalNum = arrTotal + 1;
    while (true) {
        if (isPrime(evalNum)) {
            break;
        }
        evalNum++;
    }

    console.log(evalNum);

    //The difference between this prime number and the total of the array needs to be returned

    return  evalNum - arrTotal;
 }

 function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
 }

// console.log(isPrime(11))

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

//Solve time 15.5 minutes