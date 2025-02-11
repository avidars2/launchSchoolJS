/**
 * Write a program that solicits six numbers from the user and 
 * logs a message that describes whether the sixth number appears among the first five numbers.
 * Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
 */

/** Problem
 * Solicit 6 numbers from user, log a message thatt describes whether the sixth number appears among the first five
 * 
 * Input: Strings (Numbers as strings by user)
 * Output: String
 * 
 * Given 6 numbers entered by a user, build a list of these numbers, check if the 6th number appears in the first 5 numbers
 * of the list, then output a message confirming this as well as the list.
 * 
 * Observations/Rules:
 * 1. The input seems to primarily be numbers, do we need to validate input?
 * 2. Are Numbers only integers?
 * 
 * Ideas:
 * 1. 2 lists, 1 for first 5 numbers, then use includes method
 * 
 * Algo:
 * 1. GET input from user
 * 2. Append to firstFiveArray
 * 3. Repeat 5 times
 * 4. GET input from user for sixth number
 * 5. Save 6th input to separate variable
 * 6. Check if firstFiveArray includes 6th input
 * 7. Return message based on if it was included
 */

let rlSync = require('readline-sync');


function isSixthInList() {
  let firstNumbersArray = getNumbersFromUser(5);
  let lastNum = Number(rlSync.question('Enter the last number: '));
  

    
  if (firstNumbersArray.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${firstNumbersArray}`);    
  } else console.log(`The number ${lastNum} does not appear in ${firstNumbersArray}`);
}

/**
 * Input: User input
 * Output: User input as Array of numbers
 */

function getNumbersFromUser(repeats) {
  let numArr = [];

  for (let num = 0; num < repeats; num++) {
    let suffix;
    let position = num + 1;
    switch (position) {
      case 1: 
        suffix = 'st'
        break;
      case 2:
        suffix = 'nd'
        break;
      case 3:
        suffix = 'rd'
        break;
      default:
        suffix = 'th';
    }

    numArr.push(Number(rlSync.question(`Enter the ${num + 1}${suffix} number: `)));
  }

  return numArr;
}

isSixthInList();