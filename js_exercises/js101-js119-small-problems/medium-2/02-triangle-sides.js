/**
 * Definitions: Triangle:
 * Equilateral: All three sides are of equal length
 * Isosceles: Two sides are of equal length, third is different
 * Scalene: All three sides are of different lengths
 * 
 * To be a valid triangle, sum of lengths of two shortest sides
 * must be > length of longets side && every side must have a length > 0
 * 
 * If either condition === false then not a triangle
 * 
 * 
 */

/**
 * I: 3 Numbers representing lengths of the three sides of a triangle
 * Output: Triangle classification
 * 
 * shortest side + middle > longest
 * shortest length > 0
 * 
 * 
 * explicits:
 * 1. Identify type of triangle and return
 * Implicits:
 * 1. Identify type of triangle based on arguments passed
 * 2. Get the lowest Number
 * 
 * Ideas:
 * 1. Math.min
 * 
 * CQ:
 * 1. Can negative numbers be passed?
 * 2. Will arguments always be Numbers?
 * 
 * D:
 * 
 * 0, 0, 1 --> Invalid ? a length is 0
 * 
 * 3, 3, 3 --> Equilateral
 * 
 * Given a set of 3 numbers,
 * determine if it is a valid triangle
 * And if so, determine the type of triangle
 * 
 * 
 * 
 */

/**
 * Data structures:
 * 3 Numbers
 * Comparing Numbers
 * Object:
 * Shortest side
 * Middle:
 * Longest side:
 * 
 * Algorithm:
 * 1. Take 3 numbers as arguments
 * 2. Determine if triangle is valid
 * --Determine if two shortest sides summed > length of longest side
 * -- Check if each side has a length greater than 0 (Check shortest side)
 * 3. Determine type of triangle if valid
 * --Equilateral: x === y === z
 * -- Isosceles: Same number appears twice
 * -- Scalene: Each number is different
 * 4. Return determination
 */


/**
 * Feedback from myself:
 * 1. Flesh out algorithm more before coding
 * 2. Test code more frequently
 */

function triangle(side1, side2, side3) {
  let shortestSide = Math.min(side1, side2, side3);
  let longestSide = Math.max(side1, side2, side3);
  let total = [side1, side2, side3].reduce((acc, el) => acc + el, 0);
  let middle = total - longestSide - shortestSide;
 
  if (!isValidTriangle(shortestSide, longestSide, middle)) return 'invalid';

  if (shortestSide === longestSide && shortestSide === middle) return 'equilateral';
  if (
    shortestSide !== longestSide &&
    shortestSide !== middle &&
    middle !== longestSide
  ) return 'scalene'

  return 'isosceles';

}

function isValidTriangle(shortestSide, longestSide, middle) {
  if (shortestSide <= 0) return false;
  if (middle + shortestSide <= longestSide) return false;
  return true;    
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"