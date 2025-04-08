/**
 * Triangle sides
 * 
 * Definitions:
 * 
 * Triangle is classified as follows:
 * Equilateral: 3 sides equal length
 * Isosceles: Two sides equal, third different
 * Scalene: All 3 different
 * 
 * Valid triangles all have sum of two shortest sides 
 * equal to greater than length of longest side
 * 
 * AND every side must have a length greater than 0
 */

/**
 * I: 3 Number arguments
 * O: Triangle classification
 * 
 * Explicits:
 * 1. Calculate if it is invalid, equilateral, isosceles, or scalene
 * 2. Sum of 2 shortest side must be greater than length of longest side
 * 3. Every side must have length be greater than 0
 * 
 * Implicits:
 * 1. Arguments are Numbers, including decimal numbers
 * 
 * 1, 1, 1 --> Equilateral
 * 
 * 1, 2, 3 --> scalene
 * 
 * 2, 2, 3 --> Isosceles
 * 
 * If all values equal and not 0, equilateral
 * If 2 values are equal and sum > remaining value --> Isosceles
 * If all values different and not 0 and smallest 2 values sum > largest value, scalene
 * Else invalid
 */

/**
 * Numbers and string returns
 * 
 * Algorithm:
 * If all values equal and not 0, equilateral
 * If 2 values are equal and sum > remaining value --> Isosceles
 * If all values different and not 0 and smallest 2 values sum > largest value, scalene
 * Else invalid
 */

function triangle(a, b, c) {
    let sortedLengths = [a, b, c].sort((a, b) => a - b);
    if (sortedLengths[0] + sortedLengths[1] <= sortedLengths[2]) return 'invalid';
    if (a === 0 || b === 0 || c === 0) return 'invalid';
    if (a === b && b === c) return 'equilateral';
    if (a !== b && a !== c && b !== c) return 'scalene';
    return 'isosceles';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"