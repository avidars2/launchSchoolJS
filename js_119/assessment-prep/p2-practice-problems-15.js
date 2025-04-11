/**
 * Create a function that takes a string argument that consists entirely of numeric digits and 
 * computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.
 */

/**
 * I: String of entirely numeric digits
 * O: Greatest product of 4 consecutive digits in string
 * 
 * Explicits:
 * 1. Return greatest product of 4 consecutive digits
 * 2. String is entirely composed on numeric digits
 * 
 * Implicits:
 * 1.Has to be in consecutive order
 * 
 * Consecutive: occuring one after the other
 * So from 1828172
 * 1828 is consecutive, but 8287 is not
 * 
 * 23456
 * '2345' --> Get product
 * Highest product so far = result
 * 
 * 3456 --> get product
 * IF product > highest product so far, re-assign
 * 
 * Repeat until last character is at the end of the string
 * 
 * Data structures:
 * 1. Split string into array
 * --Outside variable; highestValue = 0
 * 2. Iterate through array //
 * --Get first value up to 4th value //456_
 *  * 3. If slice up to 4th index is out of bounds of the array, //Yes
 * -------If current Index + 4 > length of array, skip
 * -----Break loop/skip iterations til end
 * --Multiply to get the product //360
 * --If result > highestValue, re-assign highest value //hV = 360

 * 4. return highest value
 */
const p = console.log;

function greatestProduct(numStr) {
    let numStrArr = numStr.split('');
    let highestValue = -Infinity;
    
    numStrArr.forEach((el, idx) => {
        if ((idx + 4) > numStrArr.length) return; //23456
        
        let currentNums = numStrArr.slice(idx, idx + 4);
        let currentValue = currentNums.reduce((acc, num) => acc * num);
        if (currentValue > highestValue) {
            highestValue = currentValue;
        }
    })

    // p(highestValue);
    return highestValue
}

p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6

//Solved in 12 minutes