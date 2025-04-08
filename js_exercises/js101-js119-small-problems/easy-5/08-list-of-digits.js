/**
 * I: Positive integer
 * O: List of digits in the number
 * 
 * Explicits/Implicits:
 * 1. Take one argument, a positive integer
 * 2. Output list of digits in the number as an array
 * 
 * 123 --> 1, 2, 3
 *
 * Algorithm:
 * 1. Convert to String
 * 2. Split string and return 
 */


function digitList(num) {
    console.log(`${num}`.split(''))
    return `${num}`.split('');
    return [...`${num}`]
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]