
/**Problem
 * This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, 
which was a leap year. Prior to 1752, they used the Julian Calendar. 
Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the 
previous exercise to determine leap years both before and after 1752.
 * 
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
 */

/**P
 * Inputs: Number Year
 * Outputs: Boolean true/false
 * 
 * This problem uses the same formula as the previous
 * However if the number is 1752 or lower, it uses a different formula
 * 
 * So if the number is 1751 or lower, and divisible by 4, it is a leap year.
 * 
 * 
 * 
 * 
 * Mental model:
 * Given a number, determine if it is a leap year. If the number is 1752 or lower,
 * it is a leap year if it is divisible by 4. Otherwise, it follows the previous rules
 * to be considered a leap year.
 * 
 */

/**E
 * 
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
 * 
 */

/**DA
 * DS: Same as before
 * 
 * Algorithm modification:
 * 
 *  * Algorithm:
 * 1. Create function that takes 1 argument
 * 2. If input is < 0 && (input % 1 != 0) return false
 * 3. If input is <= 1752 && (input % 4 === 0) return true
 * 4. If input is divisible by 400, return true
 * 5. If input is divisible by 4 && !100 return true
 * 6. Otherwise return false
 */

function isLeapYear(year) {
  if (year < 0 || (year % 1 != 0)) return false;

  if ((year <= 1752) && (year % 4 === 0)) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return ((year % 4 === 0) && (year % 100 !== 0));
  }

}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));