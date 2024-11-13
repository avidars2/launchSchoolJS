//Problem

/**
Log all even numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.

 */

/**
 * Repurpose previous function to check for 1 as a remainder
 * 
 */
  function logEvenRange(range) {
    let startNum = range[0];
    let endNum = range[1];
  
    if (Math.abs(startNum) % 2 === 1) {
      startNum += 1;
    }
  
    for (startNum; startNum <= endNum; startNum += 2) {
      console.log(startNum);
    }
  
    return;
  }
  
  console.log('Test');
  logEvenRange([-5, 0]); //-4, -2, 0
  console.log('Test');
  logEvenRange([2, 4]); //2, 4
  console.log('Test');
  logEvenRange([1, 7]); //2, 4, 6
  console.log('Test');
  logEvenRange([-3, 3]); //-2, 0, 2
  console.log('Test');
  logEvenRange([3, 3]); //
  console.log('Test');
  logEvenRange([4, 4]); //4