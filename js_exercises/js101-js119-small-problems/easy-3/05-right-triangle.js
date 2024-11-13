/**Problem
 * Write a function that takes a positive integer, n, 
 * as an argument and logs a right triangle whose sides each have n stars. 
 * The hypotenuse of the triangle (the diagonal side in the images below) 
 * should have one end at the lower-left of the triangle, 
 * and the other end at the upper-right.
 * 
triangle(5);

    *
   **
  ***
 ****
*****
 */

/** P
 * Input: Positive integer
 * Output: Log a triangle with input amount of stars for sides
 * 
 * The number of stars given consecutively increases per line
 * The right side of stars is equal to the amount of stars given
 * Their are spaces before each star except for the last row
 * 
 * Mental Model:
 * Create a function that given a number as an argument,
 * prints a triangle out of stars with each side being the same length
 * as the number given.
 * 
 * 
 */

/**E
 * input: triangle(3)
 * output: 
 *   *
 *  **
 * ***
 * 
 */

/**DA:
 * Data structures: Input is a Number, Output is a string of stars
 * to produce a triangle
 * 
 * Algorithm:
 * 1. Create a function which takes 1 argument, length
 * 2. FOR iterator = length; WHILE iterator > 0
 * 3. PRINT spaces = 'iterator - 1 amount of spaces'
 * 4. PRINT stars = length - spaces on same line as 3
 * 5. Subtract iterator by 1
 * 5
 *     *
 *    **
 * If number = 5
 * Number - (Number - 1) spaces
 * 
 */

function triangle(length) {
  for (let line = length; line > 0; line--) {
    let spaces = line - 1;
    console.log(`${' '.repeat(spaces)}${'*'.repeat(length - spaces)}`);
  }
}

triangle(10);
