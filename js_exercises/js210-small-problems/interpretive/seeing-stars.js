/**
 * P:
 * 
 * 
 * I: N representing an odd integer
 * 
 * O: Displaying an 8-pointed star
 * 
 * E:
 * - Display an 8 pointed star
 * - nxn grid
 * -n is an odd integer passed as an argument
 * - Smallest n value is 7
 * 
 * I:
 * 1. N represents amount of rows  and columns
 * 2. Stars above and below middle correspond with 3 protruding lines
 * 3. middle row of stars should be equal to n value
 * 4. Middle column of stars should also be equal to n value
 * 
 * 5. Top row converts n into 3 stars that are spread along n length
 * Top star === index 0, middle star === n /2 rounded down, last star == n - 1 index
 * --add 1 index for each row going down for top left star
 * --middle stays the same
 * --rightmost star gets decremented by 1 index
 * 
 * 6. For each row going down, add 1 space before first star, and
 * decrement 1 space between each star
 * ---This repeats until there is no space between stars
 * 
 * 7. After row with no space between stars (aka the 3 stars)
 * ---Print a row starting from column 0, that is n amount of stars
 * 8. Print the previous rows in inverse order
 * --Top rows to print using formula from 5-6 is n /2 rounded down
 * 
* T:

7
*  *  *

7 / 3 === 2.33

9
*   *   *
9 / 3 === 3
Row 1^

start space + 1
Interspace - 1
starspace = 1
interspace = 2

 *  *  *

row 2^

 * 
 * CQ:
 * 1. Will there only be 1 argument passed?
 * 2. Will it always be a Number type that is an integer?
 * 3. Can numbers below 7 be passed, and how should they be handled?
 * 4. The 3 stars above and below the middle line, do they ever expand?
 * 5. Will there always just be 3 protruding lines, on top and bottom
 * And is the left and right side part of the 8 points?
 * 6. Does the column and row count start at the top left star
 * 
 * AS
 * 1. Only one primitive integer passed that is odd 
 * 2. Columns and rows are measured from top left star to bottom right star
 * 3. 
 * 
 * DS:
 * 1. Strings
 * 2. Array to store previous prints
 * 
 * A:
 * 1. Get index positions of top layer stars
 * --Top-left === 0, top middle === n /2 rounded down, top right === n - 1
 * 2. Have a array of spaces of n length, replace characters at those spaces and print join
 * 3. For each row starting from the top, go from 
 * index 0, iterate to Math.floor(n /2) - 1 row
 * ---For each subsequent row, we are adding 1 to the left index
 * ---And decrementing 1 from the right index
 * ---Make those changes to a slice of the printed array and the log
 * ----Also save printed array to array of arrays
 * 4.Once finished iterating
 * --log n stars
 * 5. Log saved arrays backwards
 * 
 */


function star(n) {
  const arrayOfSpaces = []

  for (let space = 0; space < n; space++) {
    arrayOfSpaces.push(' ');
  }

  let leftMostStarIndex = 0;
  let middleStarIndex = Math.floor(n / 2);
  let rightMostStarIndex = n - 1;
  const MIDDLE_ROW = Math.floor(n / 2)


  let starCache = [];

  for (let row = 0; row < MIDDLE_ROW; row++) {
    let spaceArrayCopy = arrayOfSpaces.slice();

    leftMostStarIndex = row;

    spaceArrayCopy[leftMostStarIndex] = '*';
    spaceArrayCopy[middleStarIndex] = '*';
    spaceArrayCopy[rightMostStarIndex] = '*';

    starCache.push(spaceArrayCopy);

    console.log(spaceArrayCopy.join(''));
    rightMostStarIndex--;


  }

  console.log('*'.repeat(n));

  starCache.reverse();

  starCache.forEach(starRow => console.log(starRow.join('')));

  // console.log(starCache);
}




star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(11); //5.5 so 5 rows before center line
//11 / 3 === 3.6 repeating, rounded would be 4?
// logs
//The first star will always be at position 0
//The middle star will always be at index 5
//*    *    *
// *   *   *
//  *  *  *
//   * * *
//    ***
//***********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(15); //5.5 so 5 rows before center line
//11 / 3 === 3.6 repeating, rounded would be 4?
// logs
//The first star will always be at position 0
//The middle star will always be at index 5
//
//

/**

Starting star = index 0
Middle star = n/2 rounded down
Last star = n - 1


*       *       *
 *      *      *

***************

 */
//*    *    *
// *   *   *
//  *  *  *
//   * * *
//    ***
//***********
//    ***
//   * * *
//  *  *  *
// *   *   *