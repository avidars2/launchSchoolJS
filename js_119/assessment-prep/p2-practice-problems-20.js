/**
Create a function that takes an array of numbers, all of which are the same except one. 
Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.
 */

/**
 * I: Array of numbers, all same except one
 * O: Number which is different
 * 
 * Explicits:
 * 1. All numbers in array are same besides one
 * 2. Array will always contain at least 3 numbers
 * 3. Return the differnet number
 * Implicits:
 * 1. Only Number data types
 * 
 * [0, 1, 0]
 * '0' --> 1
 * '1' --> 1
 * '0' --> 2
 * 
 * Check for when their are at least 2 keys
 * Then make sure there has been at least 3 iterations
 * Then check for values of the keys for which is only 1
 * 
 * Iterate through an array, counting each occurence of an element.
 * When the object tracking the occurence exceeds 1 in size && at least 3 iterations have occurred,
 * break the loop.
 * 
 * Then, look through the object for the value which is '1', and return the corresponding key
 * 
 * Data structures:
 * 1. Arrays []
 * 2. Objects {0: 2, 1: 1}
 * 3. Numbers
 * 
 * Algorithm:
 * 1. Iterate through an array [0, 1, 0]
 * 2. For each iteration, add current element to object {0: 2, 1: 1}
 * 3. Check if at least 2 keys are in the object //No not yet //Yes, but index < 3 //Yes, index > = 3 so break loop
 * 4---IF so, check if index >= 3
 * -----If so, break loop
 * 
 * Part 2
 * 1. Iterate through object {0: 2, 1: 1}
 * 2. Evaluate each key and corresponding value
 * 3. IF value is 1, return key
 * 
 * 
 */

function whatIsDifferent(arr) {
    let elObj = {};

    arr.some((el, idx) => {
        elObj[el] = (elObj[el] || 0) + 1;
        if (Object.keys(elObj).length > 1) {
            if (idx >= 3) return true;
        } else return false;
    })

    for (let key in elObj) {
        if (elObj[key] === 1) return Number(key);
    }

    console.log(elObj);

}



const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);

//Solved in 10 minutes