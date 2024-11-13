/**Problem
 * 
 * Using the multiply() function from the "Multiplying Two Numbers" problem, 
 * write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
 * 
 * 
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
 */

function multiply(num1, num2) {
  return num1 * num2;
}

/**P
 * Input: number
 * Output: Square of number
 * 
 * It looks like we want to use the multiply() function, and call it
 * in our square() function, passing the same number twice as both arguments
 * In order to then return the value multiply() returns
 * 
 * 
 * Mental model:
 * Given a number, pass it as the arguments to multiply(), and return
 * the return value
 */

/** E
 * 
 * Input: 5
 * Output: 25
 * 
 * Input: -8
 * Output: 64
 * 
 * Input: 0
 * Output: 0
 * 
 */

/**DA
 * 
 * Data structures: One Number input, one number output
 * 
 * Algorithm:
 * 1. Create a function square(num) taking one argument
 * 2. Pass the parameter as both arguments for multiply()
 * 3. Return the return value
 * 
 */

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/**Further exploration
 * 
 * Power of the 'n' function, aka we can input a power
 * And calculate it, while still using multiply
 * 
 * Inputs: Number, power
 * Outputs: End product
 * 
 * Mental model:
 * Given a number, and a power, pass it to multiply in a way that allows it to calculate the result of the power
 * of the number passed.
 * 
 * So power(3, 3) would return 27
 * 
 * Or power (2, 3) would return 8
 * 
 * 
 * Given that a power multiplies a number by itself, such as 2 power 3 would be, 2 * 2, then * 2 again
 * We can probably use multiply, save the return value, then run it again passing the return vallue and the original number
 */

/**DA
 * 
 * 1. Create a function power(number, power)
 * 2. Have a variable total
 * 3. If power === 1, return number
 * 3. Pass number as both arguments for multiply(number, number)
 * 4. Save the return value to total
 * 5. For each number above 2 for power, multiply(number, total)
 * 5. save return value
 * 6. return total;
 * 
 */


function powerNumber(number, power) {
  if (power === 1) return number;
  if (power === 0 && number != 0) return 1;

  let total = multiply(number, number);

  for (let additionalMultiply = (power - 2); additionalMultiply > 0; additionalMultiply--) {
    total = multiply(number, total);
  }

  return total;

}


console.log(powerNumber(5, 0));
console.log(powerNumber(5, 1));
console.log(powerNumber(5, 5));
console.log(powerNumber(-5, 3));
console.log(powerNumber(0, 0));
console.log(powerNumber(0, 1));