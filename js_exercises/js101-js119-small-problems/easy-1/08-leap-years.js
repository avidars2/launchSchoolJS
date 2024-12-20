/**Problem
 * In the modern era under the Gregorian Calendar, 
 * leap years occur in every year that is evenly divisible by 4, 
 * unless the year is also divisible by 100. If the year is evenly divisible by 100, 
 * then it is not a leap year, unless the year is also evenly divisible by 400.
 * 
 * Assume this rule is valid for any year greater than year 0. 
 * Write a function that takes any year greater than 0 as input and 
 * returns true if the year is a leap year, or false if it is not a leap year.
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
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
**If divisible by 4 && !100 leap year
**If divisible by 400, leap year 
*/

/**P
 * Inputs: Number (representing a year)
 * Output: true/false
 * 
 * Every year divided by 4 is a leap year, but not if it is also divisible by 100
 * Unless it is also divisible by 400.
 * 
 * So if a year is divisible by 400, it is always a leap year? Yes
 * And if it is divisible by 4, but not 100, then it is also a leap year? Yes
 * 
 * Mental model:
 * Given a number, determine if it is a leap year. It is a leap year if it is
 * evenly divisible by 400, or if it is evenly divisible by 4 but not 100
 * 
 * 
 * So no remainders when evenly divided.
 * So year 4 is a leap year. Year 200 is not.
 * Year 300 is not. Year 400 is.
 * 
 * The 'year' system does not have negatives. So input wil need to be positive.
 * 
 */

/**E
 * 
 * Input: 4
 * Output: true
 * 
 * Input: 40
 * Output: true
 * 
 * Input: 100
 * Output: False
 * 
 * Input: -40
 * Output: 'Invalid input'
 * 
 * Input: 1600.5
 * Output: 'Invalid input'
 * 
 */

/** DA
 * 
 * Datastructure: Number
 * 
 * Algorithm:
 * 1. Create function that takes 1 argument
 * 2. If input is < 0 && (input % 1 != 0) return false
 * 2. If input is divisible by 400, return true
 * 3. If input is divisible by 4 && !100 return true
 * 4. Otherwise return false
 * 
 * 
 */

function isLeapYear(year) {
  if (year < 0 || (year % 1 != 0)) return false;

  if (year % 400 === 0) return true;

  if ((year % 4 === 0) && (year % 100 !== 0)) return true;

  return false;
}


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

//Further exploration
/**
 * Every year divisible by 400 will fail with the rewrite
 */

{

  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 400 === 0) {
        return true;
      } else if (year % 100 === 0) {
          return false;
      } 
      return true;
    }

    return false;
  }

console.log('test 2')
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true


//This solution uses a nested if and just feels harder to read
}