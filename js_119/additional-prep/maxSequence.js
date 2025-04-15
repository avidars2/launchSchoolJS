/**
P:The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:
 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
 If the array is made up of only negative numbers, return 0 instead.
 */

 function solution1() {
 /**
I: Array of integers
O: Maximum sum of contiguous subsequence of integers

Explicits:
If the array is made up of only negative numbers, return 0 instead

Implicits:
1. The sequence has to be in order, [num1, num2, num3, num4]
---IT would be num1 - to num3, but it can't be num1, num2, num4 (skipping 3) for the total

Filter out negative numbers from array and check if length > 0, if not return 0;

[-2, 1, -3, 4, -1, 2, 1, -5, 4]
-2, 1 [- 1]
-2, 1, -3 [-4]
[Array of sums] starting at -2
--[-2, 1, -3, 4] --> [[combination, total]]

1, -3 [- 2]
1, -3, 4 [2]
s[1, -3, 4, -1, 2, 1] --> [combination, total] --> push into combination array

[[combniations, total], [combination, total]] --> I can get the highest total from that array

[-2, 1]
tempArray = [-2, 1], [-2, 1, -3], I get the max total out of this temp array

DS:
1. Arrays 
[combinations, and totals], as well
[current combinations from slice [0, 1], [0, 2]] and so on to the end

Algorithm:
1. combinationsArray = [];
--A filter, which evaluates all numbers and returns true for numbers > 0, if final filter is 0 return 0
2. Loop through array of numbers [-2, 1, -3, 4, -1, 2, 1, -5, 4]
3. For each number, 
--Loop again
-----slice from starting index, up 1 increment [-2, 1], [-2, 1, -3]
-----Push that slice into a temporary array
-----Repeat until I have an array of all consecutive combinations starting from that that #
4. Evaluate temporary array for highest value
5. Take highest value combination, put it in combinations array
6. Repeat for all numbers in array
7. Evaluate combination array for highest value array, and return that highest value #

  */

function maxSequence(arrOfNums) {
    if (arrOfNums.filter(el => el > 0).length === 0) return 0;
    let combinationArray = [];

    arrOfNums.forEach((num, idx) => {
        let currentCombinations = [];
        // console.log('current index:', idx)
        for (let inNum = idx; inNum < arrOfNums.length; inNum++) {
            let additionalNum = inNum + 1;
            // console.log(`idx:`, idx, `inNum`, inNum)
            currentCombinations.push(arrOfNums.slice(idx, additionalNum));
        }
        let totals = currentCombinations.map(nestedArray => {
            return arrayTotal(nestedArray);
        })
        combinationArray.push(Math.max(...totals));
    })

    // console.log(combinationArray);
    return Math.max(...combinationArray);
}

function arrayTotal(arr) {
    let total = 0;
    arr.forEach(el => {
        total += el;
    })
    return total;
}

maxSequence([1, 2, 3])

 // // Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

//Solved in 24.6 minutes

 }



/**
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:
 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
 If the array is made up of only negative numbers, return 0 instead.
 */

/**
 * I: Array of integers
 * O: Highest sum of a contiguous subsequence
 * 
 * Explicits:
 * 1. If the array is made up of only negative numbers, return 0 instead
 * Implicits:
 * 1. If array is empty, return 0
 * 
 * [11] --> 1
 * [-2, 1, -7, 4, -10, 2, 1, 5, 4]
 * -2, 1 --> -1
 * -2, 1, -7 -- -8
 * 
 * 1, -7, 4, - 10
 * 
 * Iterate through an array of integers
 * For each number, check sum of each combination of array
 * lengths from current iteration, and return the highest evaluation
 * 
 * Data structures:
 * 1. Array
 * 2. Array [highest sums I find]
 * 3. Same collection iteration, expanding array
 * 
 * Algorithm:
 * --Highest numbers found [] [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * --If all numbers in array are negative && if array is emptpy, return 0
 * ---Filter array out of negative numbers and return 0 if length is 0
 * 1. For each number in array
 * 2. Start a new loop from that number through the remaining elements in the array [-2]
 * - On each iteration, evaluate the sum of the starting number, up to the next element
 * --Push that sum in a temporaray array/ assign it to a variable (If new sum > current, re-assign)
 * --Repeat until end
 * 3. Return the highest sum found
 */

function maxSequence(intArray) {
    if (intArray.filter(el => el > 1).length === 0 ) return 0;
    let highestValueFound = -Infinity;

    intArray.forEach((num, idx) => {
        for (let x = idx; x < intArray.length; x++) {
            let currentSlice = intArray.slice(idx, x + 1);
            // console.log(currentSlice);
            let total = getSumOfArray(currentSlice);
            if (total > highestValueFound) {
                highestValueFound = total;
            }
        }
    })
    
    return highestValueFound;

}

function getSumOfArray(arr) {
    // console.log(arr);
    return arr.reduce((acc, el) => acc + el);
}


  // // Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true


//Solved in 18.5 minutes