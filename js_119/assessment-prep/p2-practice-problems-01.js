/**
 * Create a function that takes an array of numbers as an argument. 
 * For each number, determine how many numbers in the array are smaller than it, 
 * and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs 
multiple times in the array, it should only be counted once.
 */

/**
 * I: Array of numbers
 * O: Array representing number of values smaller than each integer in the array
 * 
 * Explicit rules:
 * 1. Only count unique values
 * 2. If a number occurs multiple times in the array only count it once
 * 
 * [8, 1, 2, 2, 3] --> [3 unique values smaller, 0, 1, 1, 2]
 * [1] --> [0]
 * 
 * [8, 1, 2, 2, 3] --> 1 is smaller than 8
 * count --> 1
 * 2 is smaller than 8
 * count --> 2
 * 2 which was already evaluated, is smaller than 8
 * count --> 2
 * 3 is smaller than 8
 * count --> 3
 * 
 * array to track values
 * 
 * 8 to 1, which is smaller
 * evaluated values = [1]
 * 
 * 8 to 2 which is smaller
 * evaluated values = [1, 2]
 * 
 * 8 to 2 which is smaller
 * evaluated values = [1, 2]
 * 
 * 8 to 3 which is smaller
 * evaluated values = [1, 2, 3]; the length is 3 so the array can have 3 be returned
 * 
 * Iterate through the array, evaluate each value to all other values in the array
 * Counting the amount of smaller unique values in the array, returning that map
 * 
 * Double loop
 * 
 * Algorithm:
 * 1. Iterate through array
 * 2. For each element, evaluate element against each element in array
 * --second loop
 * --Counted values = [];
 * --count = 0;
 * 3. For each element current element is larger than, check if it was already processed
 * 4. If already processed, skip
 * 5. If not, evaluate if current element is larger
 * --If so, add to count
 * --If not, skip to next iteration
 * 6. return count into new array
 * 7. return full new array
 * 
 */

function smallerNumbersThanCurrent(arr1) {
    let newArr = arr1.map(evaluatedNumber => {
        let countedValues = [];
        let count = 0;
        arr1.forEach(el => {
            if (countedValues.includes(el)) return;
            if (evaluatedNumber > el) {
                count++;
                countedValues.push(el);
            } else {
                countedValues.push(el);
                return;
            }

        })
        return count;
    })

    console.log(newArr)
    return newArr
}

// smallerNumbersThanCurrent([8, 1, 2, 2, 3])

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));

//Solve time: 13 minutes