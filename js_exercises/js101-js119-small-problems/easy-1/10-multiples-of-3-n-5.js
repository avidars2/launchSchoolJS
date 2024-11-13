/**
 * Problem
 * 
Write a function that computes the sum of all numbers 
between 1 and some other number, inclusive, that are multiples of 3 or 5. 
For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
 */

/**
 * Inputs: Number
 * Outputs: Sum of multiples
 * 
 * Compute sum of all numbers,
 * 1 ---- 20
 * 
 * Numbers between above that are a multiple of 3 OR 5 get summed
 * 
 * From the example there are no repeats of multiples (15 is used only once)
 * 
 * 3
 * 3, 6, 9, 12, 15, 18
 * 
 * 5
 * 5, 10, 15, 20
 * 
 * 20 is included
 * 
 * 
 * 
 * Mental model:
 * Given an integer greater than 1, compute the sum of the numbers between 1 and
 * the target number, that are multiples of 3 or 5.
 * 
 * We can assume the # provided is greater than 1
 */

/**E
 * 
 * Input: 2
 * Output: 0
 * 
 * Input: 15
 * Output: (3 + 5 + 6 + 9 + 10 + 12 + 15)
 * 
 * Input: 20
 * Output: 98
 */

/**DA
 * 
 * Data structure: Number input
 * 
 * Algorithm:
 * 1. Create a function that takes 1 argument
 * 2. For numbers <= target number, starting at 0, increment by 3 and append to array
 * 3. For numbers <= target number, starting at 0, incremenet by 5 and append to array
 * 4. IF number is already in array, ignore
 * 5. Sum elements of array
 * 6. Print to console 
 * 
 */

function multisum(targetInteger) {
  let multiples = [];
  for (let factorOf3 = 0; factorOf3 <= targetInteger; factorOf3 += 3) {
    multiples.push(factorOf3);
  }

  for (let factorOf5 = 0; factorOf5 <= targetInteger; factorOf5 += 5) {
    if (!multiples.includes(factorOf5)) {
      multiples.push(factorOf5);
    }
  }

  let total = 0;

  for (let currentMultiple = 0; currentMultiple < multiples.length; currentMultiple++) {
    total += multiples[currentMultiple];
  }

  console.log(total);
  return total;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168