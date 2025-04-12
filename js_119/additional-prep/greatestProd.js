/**
P:Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. 
The argument will always have more than 4 digits.

 */

/**
 * I: String of entirely numeric digits
 * O: Greatest product of four consecutive digits in the string
 * 
 * Explicits:
 * 1. Argument will always have more than 4 digits
 * 
 * Implicits:
 * 1. Consecutive here means one after another
 * 1234 --> 123 is consecutive, 124 is not
 * 2. If iterating, you are getting 4 digits at at ime
 * Be wary of not going over the length
 * 
 * 23456
 * '2345' --> currentProduct
 * 3456 --> newProduct
 * new product > currentProduct ? If so
 * [current highest digits] replaced with [new highest digits]
 * 
 * Given an array of numbers,
 * evaluate the product of 4 numbers in a row, at a time
 * If an evaluation is > the currentHighest evaluation, re-assign the currentHighest &&
 * numberCombination is replaced with the new highest numberCombination
 * 
 * Data structures:
 * 1. Array to store numbers individually for iteration
 * 2. String ?
 * 3. Numbers
 * 
 * Algorithm:
 * --Highest value = -Infinity [3145826]
 * --Current highest combination =[] --IGNORE
 * 1. Given the number string input
 * 2. Evaluate a slice of 4 at a time
 * --Loop through starting at index 0
 * --Up to but not including index 4
 * --str[idx] str[idx + 1] str[idx + 2] str[idx + 3]
 * --Loop unti idx + 3 === length of string
 * 3. Get the product of these 4 numbers (Convert each digit to Number form and evaluate product)
 * 4. Check if product > highestValue. If so, re-assign highest value
 * ---Replace current highest combination array with the current 4 values being evaluated __DONT DO
 * 5.Return current highest combination
 * 
 * 
 */

function greatestProduct(numStr) {
    let highestValue = -Infinity;
    let otherHighestValue = -Infinity;

    for (let startNum = 0; startNum + 3 < numStr.length; startNum++) {
        let currentProduct = Number(numStr[startNum]) *
        Number(numStr[startNum + 1]) *
        Number(numStr[startNum + 2]) *
        Number(numStr[startNum + 3]);


        // currentProduct = numStr.slice(startNum, startNum + 4).split('').map(el => Number(el)).reduce((acc, el) => acc * el); //Alternate multiplication method
        let newProduct = 1
        for (let x = startNum; x < startNum + 4; x++) {
            newProduct*= Number(numStr[x]);
        }

        if (currentProduct > highestValue) {
            highestValue = currentProduct;
            otherHighestValue = newProduct;
        }

    }

    console.log(otherHighestValue);
    return highestValue;
    // console.log(3 * 4 * 5 * 6);
    // console.log(highestValue);
}


const p = console.log;
p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6

// The above tests should each print true.

//Solved in 12.3 minutes