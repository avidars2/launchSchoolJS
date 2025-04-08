/**
 * I: Array of integers
 * O: String representing the result of the operation
 * Multiply all integers together, divide result by length of array
 * return value as string rounded to three decimal places
 * 
 * [3, 5] --> 3 * 5 --> 15 / 2 --> 7.5 --> '7.500'
 * 
 * [1, 2, 3] --> 1 * 2 * 3 --> 6 / 3 --> 2 --> 2.000 ? 2
 * 
 * [1, 3, 3, 5] --> 1 * 3 * 3 * 5 --> 45 / 4 --> 11.25 --> 11.250
 * 
 */

/**
 * DS
 * 1. Arrays
 * 2. Strings
 * 3. Numbers
 * 
 * 
 * A:
 * 1. Reduce the array into total
 * 2. Divide result by length of array
 * 3. If new result % 1 !== 0,
 * 4. Check if string version of that is length 3
 * 5. If not length 3, add 0's to end until it is 3 length
 */

function multiplicativeAverage(arr) {
    let newResult = arr.reduce((acc, el) => acc * el) / arr.length;
    console.log(newResult.toFixed(3));

    // if (newResult % 1 !== 0) {
    //     let decimal = `${newResult}`.split('.');
    //     decimal[1] = decimal[1].split('');
    //     decimal[1].length = 3;
    //     decimal[1] = decimal[1].join('');
    //     decimal = decimal.join('.');
    //     console.log(decimal)
    //     return decimal;
    // }

    return newResult.toFixed(3);

}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"