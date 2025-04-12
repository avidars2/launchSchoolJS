/**
P: Write a function that returns the longest consecutive numbers that are factors of the given target number.

 */
/**
 * I: Array of numbers, target #
 * O: Array of longest consecutive numbers given the target #
 * 
 * Explciits:
 * 1. Each number in array must be a factor of the target #
 * Implicits:
 * 1. An array is returned
 * 
 * [1, 2, 11, 12, 5, 4]
 * 1
 * 2 --[1, 2]
 * 11 --X
 * 12
 * 5
 * 4
 * [12, 5, 4]
 * 
 * 1 [1]
 * 2 [1, 2]
 * 11 --break
 * 
 * 12
 * 5
 * 4
 * 13 [12, 5, 4]
 * Is this new array length > currentHighestArray length ? Yes, so re-assign
 * 
 * [1, 2, 3, 4, 5, 6], 12
 * 1
 * 2
 * 3
 * 4 [1, 2, 3, 4], length of 4
 * 5--
 * 6 [6]
 * 
 * Determine if it is a factor
 * --Determine if the target / an element === an integer
 * -- Target % element === 0 ?
 * 
 * Iterate through a collection of numbers
 * Evaluate how many consecutive numbers are factors of a target #
 * 
 * Data structures:
 * 1. Array  [keep track of current factors]
 * 2. Numbers
 * 
 * Algorithm:
 * highestCountArray = []
 * 1. Iterate through an arary of fnumbers [1, 2, 11, 12, 5, 4]
 * 2. For each number //1
 * --Check if that number is a factor, if not skip iteration //1 is a factor of 60
 * --If it is, push to temporary array // [1]
 * ----Check following numbers if they are also factors, incrementing 1 index at a time //2 [1, 2]
 * ----If the number is a factor, push into temporary array
 * ----If not a factor, break iteration
 * ------Check if temp array length > highestCcountarray length. If so, re-assign. If not , do nothing  //hCA = [1, 2]
 * 3.Repeat the above until end of array
 * 4. Return highestCountArray
 * 
 * 
 * Is it a factor? Yes if the target Num % current Elementt === 0
 */

function longestConsecutiveFactors(numArr, targetNum) {
    let highestCountArray = [];
    numArr.forEach((num, index) => {
        if (!isFactor(num, targetNum)) return;
        let tempArray = [num];
        for (let idx = index + 1; idx < numArr.length; idx++) {
            let currentNum = numArr[idx];
            if (isFactor(currentNum, targetNum)) {
                tempArray.push(currentNum);
            } else break;
        }
        if (tempArray.length > highestCountArray.length) {
            highestCountArray = tempArray;
        }
    })

    return highestCountArray;

}

function isFactor(currentNum, targetNum) {
    return (targetNum % currentNum === 0)
}

// console.log(isFactor(1, 8))

// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]//

//Solved in 16.75 minutes