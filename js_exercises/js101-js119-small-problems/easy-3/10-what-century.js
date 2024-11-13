/** Problem
 * Write a function that takes a year as input and returns the century. 
 * The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' 
 * as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
 * 
 */

/** P
 * Input: Year
 * Output: Century
 * 
 * 0 ends with th
 * 1 ends with st
 * 2 ends with nd
 * 3 ends with rd
 * 4 to 9 ends with th
 * 
 * 
 * 
 * Mental model:
 * Given a year, determine the century and appropriate suffix to print to the console.
 * 
 */

/**E
 * Input: 01
 * Output: 1st century
 * 
 * Input: 1000
 * Output: 10th century
 * 
 * Input: 1001
 * Output: 11th century
 */

/**DA:
 * Data structure: Number input, String output
 * A:
 * 1. Create a function taking 1 input
 * 2. century = Divide input by 100 and round up
 * 3. centuryName = Convert century to string
 * 4. IF last character of centuryName === 1, concat st
 * 5. IF last character of centuryName === 2, concat nd
 * 6. IF last character of centuryName === 3, concat rd
 * 7. else concat th
 * 
 * (Century / 100) + 1
 * 1 / 100 = 0.01 = 1st rounded up
 * 
 * 100/ 100 = 1 = 1st rounded up
 * 101 / 100 = 1.01 = 2nd rounded up
 * 
 * 1000 / 100 = 10 = 10th rounded up
 * 1001 / 100 = 10.01 = 11th rounded up
 * 
 * 
 */

function century(year) {
  let century = Math.ceil(year / 100);
  let centuryName = String(century);

  if (centuryName[centuryName.length - 2] !== '1') {
    switch (centuryName[centuryName.length - 1]) {
      case '1':
        centuryName += 'st';
        break;
      case '2':
        centuryName += 'nd';
        break;
      case '3':
        centuryName += 'rd';
        break;
      default:
        centuryName += 'th';
        break;    
    }
  } else {
    centuryName += 'th';
  }

  console.log(centuryName);
  return centuryName;

}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"