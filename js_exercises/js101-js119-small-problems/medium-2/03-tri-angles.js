function solution1() {
/**
 * Definitions:
 * Right: One angle is exactly 90 degrees
 * Acute: All 3 angles are less than 90 degrees
 * Obtuse: One angle is greater than 90 degrees
 * 
 * Valid triangle: Sum of all angles must be === 180 degrees
 * && every angle > 0 degrees
 */

/**
 * I: 3 Numbers, representing angles of a triangle
 * O: Type of triangle or invalid
 * 
 * Explicits:
 * 1. Assume all arguments are in degrees and are integers
 * 2. Must add to 180
 * 3. Must be above 0
 * Implicits:
 * 1. Calculate total of arguments
 * 2. Check if triangle is valid
 * 3. If valid, determine type of triangle
 * 
 * 
 * 90, 90, 0 --> Invalid ? 0 for one of the angles
 * 
 * CQ: 
 * 1. Negative integers? Should be okay because of validity function
 * 
 */

/**
 * Data structures:
 * Numbers and comparing numbers
 * Convert to array to iterate through numbers
 * Returning strings
 * 
 * Algorithm:
 * 1. Take 3 Numbers for our function
 * 2. Check if the triangle is valid
 * --If invalid, return invalid
 * --Add up 3 numbers to see if exactly 180
 * --Check if any number is 0
 * 3. IF valid, determine type of triangle
 * --Check if one number is 90, if so, return 'Right'
 * --Check if all numbers are below 90, if so, return acute
 * --Check if any number above 90, if so return obtuse
 * 4. Return determination
 * 
 * 
 */

function triangle(angle1, angle2, angle3) {
  let sidesArr = [angle1, angle2, angle3];

  if (!isValid(sidesArr)) {
    console.log('invalid');
    return 'invalid';
  }
  console.log(determineType(sidesArr));
  return determineType(sidesArr);


}

function isValid(sidesArr) {
  let total = sidesArr.reduce((acc, num) => acc + num, 0);
  if (total !== 180) return false;
  if (sidesArr.includes(0)) return false;
  return true;
}

function determineType(sidesArr) {
  if (sidesArr.includes(90)) return 'right';
  if (sidesArr.every(num => num < 90)) return 'acute';
  if (sidesArr.some(num => num > 90)) return 'obtuse';

}


triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

}


function solution2() {

  /**
   * A right triangle has one angle exactly 90 degrees
   * Acute: All 3 angles are less than 90 degrees
   */

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

}

solution2();