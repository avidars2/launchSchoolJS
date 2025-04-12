/**
P: Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers 
are increasing order.
 */

/**
 * I: Array of numbers
 * O: Boolean if at least 3 sets of 3 consecutive numbers in increasing order
 * 
 * Explicits:
 * 1. Return a boolean
 * 
 * Implicits:
 * 1. Numbers don't need to increment by 1 to be consecutive
 * --It's as long as the next number is > the previous # 
 * 2. Each set can include all but one number from the previous set
 * 
 * 1, 2, 3, 4, 5, 6, 7
 * 1, 2, 3
 * 1, 2 > 1, 3 > 2 --> 
 * 1
 * 2 > 1 ? [1, 2]
 * 3 > 2 ?  [1, 2, 3]
 * Now that the length is 3, I can count this as one set and start from a new position
 * 2
 * 3 > 2 ? [2, 3]
 * 4 > 3 ? [2 , 3, 4]
 * Push/count, and onto the next starting #
 * 3
 * 4 > 3 ? [3, 4]
 * 5 > 4 ? [3, 4, 5]
 * 
 * Given an array of numbers
 * Loop through each number
 * Evaluate if that number, and the next 2 are consecutively increasing
 * If so, count that as a consecutive set
 * Then move on to the next iteartion
 * Continue until I find 3 of these sets
 * 
 * Data Structure:
 * 1. Array
 * ---Keep track of current outer iteration by pre-pushing a # in there
 * ---Check it's length as the inner loop occurs, and once it's 3, use that as a signal
 * 2. Numbers, evalaute if > or < each other
 * 
 * Algorithm: [1, 2, 3, 1, 2, 1, 2]
 * 1. Loop through array
 * 2. For each element,
 * ---Push into a new temporary array [1]
 * --Start an inner loop from next number
 * 3. Inner loop
 * --Evaluate if that number is > previous index # //2 2 > 1 ?, Yes, so push into temp [1, 2]
 * --If so, add it to temporary array and check temp array length
 * -----If temp array length >= 3, break loop
 * -----If not, next iteration
 * --If not greater than previous idex #, break loop
 * 4. Outer loop: If temp array length >= 3, increment counter
 * ----Afterwards, start with fresh temporary array
 * ----Go to next iteration
 * 5. If counter >= 3, return true, else false
 */

function threeIncreasingSets(arr) {
    let counter = 0;
    
    arr.forEach((num, idx) => {
        let tempArr = [num]; //[1, 2, 1, 4]
        for (let x = idx + 1; x < arr.length; x++) {
            let nextNum = arr[x]
            let previousNum = arr[x - 1]
            if (nextNum > previousNum) {
                tempArr.push(nextNum);
                if (tempArr.length >= 3) break;
            } else break;


        }
        if (tempArr.length >= 3) counter++;
    })

    return counter >= 3;
}

// Test cases:
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false

//Solved in 16 minutes