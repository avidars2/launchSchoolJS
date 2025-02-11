/**
 * Problem - take time to understand the problem
 * I/O
 * 
 * Rules/Observations
 * Edge/tests
 * 
 * Ideas
 * 
 * D/A
 * 
 * 
 */

/**
 * Input: Number
 * Output: Returns the century
 * 
 * 2000 --> 20th
 * 2001 --> 21st
 * 1965 --> 20th
 * 0 --> 0th century
 * 01 --> 1st
 * 301 --> 4th
 * 
 * Observations/Rules:
 * 1. New centuries begin in years that end with 01
 * 2. What about 0?
 * 3. Grammatical rules: centuries end with 'th', 'st', 'nd', or 'rd'
 * 4. Century / 100) - 1 = the century
 * 
 * Ideas:
 * 1. Divide by 100 and round up Math.ceil(2000 / 100) --> 20
 * 2. Make into 2 functions, one to determine century #, second to determine suffix
 * 
 * Ideas for suffix:
 * 0 --> th
 * 1 --> st OR th (11 is th, 1 is st)
 * 2 --> 2nd or 
 * 
 * IF 10 or more
 *  * Truncate last 2 digits and return as a string
 * IF string[0] === 0
 * 1 --> st
 * 2 --> nd
 * 3 --> rd
 * 
 * ELSE return 'th'
 * 
 * IF less than 10
 * IF 1 --> st
 * IF 2 --> nd
 * IF 3 --> rd
 * Else --> th
 * 
 * 
 *  
 */


function century(year) {
  return determineSuffix(getNumber(year));
}

function getNumber(num) {
  return Math.ceil(num / 100);
}

function determineSuffix(century) {
  if (century < 10) {
    if (century === 1) return century + 'st';
    if (century === 2) return century + 'nd';
    if (century === 3) return century + 'rd';
    return century + 'th';
  } else {
    let tenths = String(century).slice(-2);
    let ones = tenths[1];
    console.log(tenths)
    console.log(tenths[0])
    
    if (tenths[0] === '0') {
      if (ones === '1') return century + 'st';
      if (ones === '2') return century + 'nd';
      if (ones === '3') return century + 'rd';
      return century + 'th';
    }
    return century + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"