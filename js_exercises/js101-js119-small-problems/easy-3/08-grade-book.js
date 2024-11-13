/** Problem
 * Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
 * 
 */

/** P
 * Input: 3 Numbers
 * Output: Grade letter
 * 
 * Values are all between 0-100
 * 3 arguments are passed as numbers
 * 
 * Mental model:
 * Given 3 numbers, find the mean of them and determine the range that number falls
 * under and return the letter grade that represents that range
 * 
 */

/** E
 * Input: 0
 * Output: F
 * 
 * Input: 100
 * Output: A
 * 
 * Input: 80
 * Output: B
 * 
 * Input: 70
 * Output: C
 * 
 */

/** DA
 * D: Input is 3 Numbers, Output is String
 * 
 * A:
 * 1. Create a function that takes 3 arguments
 * 2. Add the 3 Numbers and divide by 3
 * 3. IF number is < 60 return F
 * 4. IF number is < 70 return D
 * 5. Repeat up to < 90 for B
 * 6. ELSE return A
 * 
 */

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D")