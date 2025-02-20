/**
 * Understand problem
 * Input/Output
 * Edge, Algo, Code
 */

/**
 * Problem in own words
 * I/O
 * Rules/Observations
 * Edge cases
 * 
 * Ideas
 * Algorithm (test edge cases here)
 * Useful methods
 * 
 * Write function, test frequently
**/

/**P: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every
 * element is distinct
 * 
 * I: Array with numbers
 * O: True if ANY value appears at least twice, false if every element is distinct
 * 
 * Observations/Rules
 * 1. 
 * 
 * Write a program that takes an array, evaluates the array for any duplicate values, and return true if that is the case, false otherwise
 * 
 * [1, 1, 2] --> True
 * [1, 2, 3] --> False
 * [1] --> False
 * [] --> False
 * 
 * Ideas:
 * 1. Push first element into new Array, then check the next element and see if it is in the new array
 * If not, add it to the new array and repeat
 * 
 * Algo:
 * 1. Write function that takes inputArray as argument
 * 2. newArray = []
 * 3. Push first element into newArray if inputArray.length > 1, else return false
 * 4. Check second element if it is included in newArray, if yes then return true, if no then push it into newArray
 * 5. If no more elements remain, return false
 * 
 * Useful methods
 * 1. Include
 * 2. forEach
 * 
 */

function checkDupes(array) {
	if (array.length <= 1) {
		return false
	}

	let newArray = [];
	let noDuplicateSpotted = false 

	array.forEach((num) => {
		if (newArray.includes(num)) {
			noDuplicateSpotted = true
		} else {
			newArray.push(num);
		}
	})

	return noDuplicateSpotted
}

// console.log(checkDupes([1, 1, 2])); //true
// console.log(checkDupes([1, 2, 3])); //false
// console.log(checkDupes([1])); //false
// console.log(checkDupes([])); //false


//Find primorial

/**
 * 2, 3, 5, 7, 11, 13
 * 
 * Number % each number below it
 * 3
 * 
 * A prime # is a number that is not divisible by anything besides 1 and itself
 * Algo
 * 1. Check if num is prime
 * 2. num % each # below it except for 1
 * 3. Check each result for a 0
 * 4. If 0, number is not prime as it means there is no remainder
 * 5. If no 0, number is prime, push to array
 * 
 * Algo 2
 * 1. write function that takes a number to evaluate it's primorial
 * 2. Create array to hold prime #'s
 * 3. Starting at 2, pass into checkPrime function
 * 4. Increment until Array length = number
 * 
 * 41 / 2 rounded up = 21
 * 41 % 
 * 
 * We can skip even numbers from being checked for prime besides 2
 */


primorial(3);

function primorial(num) {
	let primeNumbersArray = [];
	let primeNumber = 2;
	let result = 1;

	if (num <= primeNumbersArray.length) return;

	while (primeNumbersArray.length < num) {
		//console.log(primeNumber);
		if (checkPrime(primeNumber)) {
			primeNumbersArray.push(primeNumber);
		}
		if (primeNumbersArray.length === num) break;

		primeNumber+= 1;
		if (primeNumber % 2 === 0) {
			primeNumber+= 1; //skip even numbers
		}
	}

	primeNumbersArray.forEach(prime => result*= prime);
	console.log(primeNumbersArray, result);
}

function checkPrime(num) {
	const LOWEST_PRIME = 2;
	let start = LOWEST_PRIME;
	let noRemainder = false;
	let fastNum = Math.ceil(num / 2);

	while (start < fastNum && !noRemainder) { //While start is less than fastNum since 2 is the lowest divisor
		//console.log(`Checking ${num} remainder ${start}`);
		noRemainder = ((num % start) === 0);
		start+= 1;
	}

	console.log(`${num} is ${noRemainder}`);
	return !noRemainder;
}
