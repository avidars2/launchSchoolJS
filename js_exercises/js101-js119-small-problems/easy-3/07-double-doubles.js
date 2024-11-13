/**Problem
 * A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
 * For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.
 * 
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

 */

/** P
 * Input: Number
 * Output: Double of that number, unless the input is a 'double number'
 * 
 * Double numbers can be any even length
 * The number is spit down the middle, and is the same on both sides
 * 
 * Mental model:
 * Given a number, determine if it is a double number, and if not, double the number value,
 * and return the number. Otherwise, return the number as is.
 * 
 */

/**E
 * Input: -11
 * Output: -22
 * 
 * Input: 0
 * Output: 0
 * 
 * Input: 10
 * Output: 20
 * 
 * Input: 11
 * Output: 22
 * 
 * Input: 442442
 * Output: 442442
 * 
 */

/** DA
 * D: Input is a Number
 * 
 * A:
 * 1. Create a function that takes 1 argument
 * 2. stringVariable = input converted to string
 * 3. Check if stringVariable is even length
 * 4. IF even length, split string into 2 strings down middle
 * 5. Assign each split of string to a variable
 * 6.     IF split1 === split2, return input
 * 7. ELSE multiply input by 2 and return
 * 
 */

function twice(num) {
  let numString = String(num);

  if (numString.length % 2 === 0) {
    let middleOfString = numString.length / 2;
    let leftString = numString.slice(0, middleOfString);
    let rightString = numString.slice(middleOfString);

    if (leftString === rightString) return num;
  }

  return num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676