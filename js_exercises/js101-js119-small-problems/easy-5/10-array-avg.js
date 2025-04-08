/**
 * I: Array of integers
 * O: Average of all integers in the array, rounded down
 * 
 * Explicits:
 * 1. Array input will never be empty
 * 2. Array input will always be positive integers
 * 
 * Implicits:
 * 1. 
 * 
 * [1, 3] --> 2
 * Algorithm:
 * 1. Iterate through array
 * 2. Reduce elements to sum
 * 3. Divide sum by array length
 * 4. Round down and return number
 */

function average(arr) {
    let avg = arr.reduce((acc, el, idx) => {
        acc+= el;
        if (arr.length - 1 === idx) {
            return Math.floor(acc / arr.length);
        } else return acc;
    })

    console.log(avg);
    return avg;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40