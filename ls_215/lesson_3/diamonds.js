/**
 * P: Write a function
 * --Display a four pointed diamond in an n x n grid
 * --n is an odd integer supplied as an argument to the function
 * --Assume the argument will always be an odd integer
 * 
 * I: Odd integer
 * O: Displays a four pointed diamond
 * 
 * E:
 * 1. Argument (n) will always be odd integer
 * 2. Display diamond in an n x n grid
 * 
 * I:
 * 1. For an input "n", there should be a print of stars
 * starting at 1, and going up in increments of 2 until it hits n
 * and then print these stars in reverse in decrements of 2 from n
 * 2. I also need to put the appropriate amount of spaces before each star
 * 3. To get spaces, divide n by 2 and round down
 * 
 * T:
 * nxn --> 1 --> 1x1 --> *
 * *
 * 
 * 3 --> 3x3 --> * *** *
 * *, ***
 * 
 * 5 --> 5x5
 * *, ***, *****
 * 
 *   *
 *  ***
 * *****
 *  ***
 *   *
 * 
 * *
 * *** 3 /2 === 1.5
 * ***** 5 /2 === 2.5
 * ******* 7 /2 === 3.5
 * 
 * CQ:
 * 1. Should the function return anything?
 * 2. Is it just logging it to the console?
 * 3. Can the input ever be negative? Or missing?
 * 
 * Assumptions:
 * 1. Only positive odd integers
 * 2. No return, just logging
 * 
 * DS:
 * 1. Strings
 * 
 * A:
 * 1. Starting at 1:
 * ----row = 1
 * --- spaces = Divide n / 2 and round down
 * --- Pad start of string by spaces, append *
 * 2. Repeat this for every increment of 2
 * ----row ++
 * --- currentSpaces = spaces - row #
 * ---- Pad start of string by paces, append increment amount of stars
 * 2. Iterate from 1 to n, in increments of 2
 * --For each iteration, increment row # by 1
 * --Decrease current spaces by 1
 * ---Append to the output, * x N with a padded start of spaces;
 * 
 * 
 */

function diamonds(n) {
/**
 * currentRow = 1
 * spaces = Math.floor(n /2)
 * 
 */

  let spaces = Math.ceil(n / 2);
  let stars = '*';

  let output = ``;
  // console.log(spaces);

  for (let starCount = 1; starCount <= n; starCount += 2) {
    spaces--;
    let currentStars = stars.repeat(starCount);
    let starRowStr = ` `.repeat(spaces) + currentStars
    output = output + `\n${starRowStr}`;
  }

  for (let starCount = n - 2; starCount > 0; starCount -= 2) {
    spaces++;
    let currentStars = stars.repeat(starCount);
    let starRowStr = ` `.repeat(spaces) + currentStars
    output = output + `\n${starRowStr}`;
  }



  console.log(output)

}

diamonds(1)
diamonds(2)
diamonds(3)
diamonds(5)
/**
  *
 ***
*****

   *
  ***
 *****
*******


 * 
 */