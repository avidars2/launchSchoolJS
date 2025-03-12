/**
 * 
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

 * Definitions:
 * Fibonacci is a series of numbers which
 * by definition the first two are 1
 * then each subsequent number is the sum
 * of the previous two numbers
 * 
 * 
 * 
 * function sum(num)
 * if (num === 1) {
 *  return 1}
 * 
 * return num + sum(num - 1)
 * 
 * (2 -1) --> 1 --> return 1
 * 
 * (3 -1) --> 2 --> return 2 + sum(2 - 1)
 * 
 * (2- 1) -> return 1
 * 
 * return 2 + 1 --> 3
 * 
 * sum(3) --> 2 + sum(2) --> return 1
 * 
 * sum(2) === 1
 * 2 + sum(2) === 3
 * return 3
 * sum(3) === 3
 * 
 * 
 * A good recursive function has 3 primary qualities:
 1. It calls itself at least once
 2. It has an ending condition
 3. The results of each recursion are used in each step

 Write a recursive function that computes the nth 
 Fibonacci number, where nth is an argument passed
 to the function
 */

 /**
  * Input: Number
  * Output: Fibonacci number at 'Number' iterations
  * Explicits:
  * 1. Compute nth fibonacci number
  * 2. Nth is number passed to function
  * 3. Use a recursive function
  * 4. A good recursive function calls itself
  * at least once, has an ending condition,
  * and the results are used in each step
  * 5. Formula: F(n) = F(n - 1) + F(n - 2) where n > 2
  * 
  * Implicits:
  * 1. The formula is the recursive function without
  * a base case
  * 
  * F(1) --> 1 (by definition)
  * F(2) --> 1 (by definition)
  * F(3) --> F(2) + (F1) --> 2
  * 
  * f(4) --> F(3) + (F(2) --> 1)
  * 
  * f(3) --> F(2) + F(1) --> 2
  * 
  * F(4) === 2 + 1 === 3
  * 
  * Edge cases:
  * f(0) --> Invalid or 0?
  * f(-2) --> Invalid
  */

 /**
  * 
  */

 function fibonacci(nth) {
  if (nth === 2 || nth === 1) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
 }

 console.log(fibonacci(1));       // 1
 console.log(fibonacci(2));       // 1
 console.log(fibonacci(3));       // 2
 console.log(fibonacci(4));       // 3
 console.log(fibonacci(5));       // 5
 console.log(fibonacci(12));      // 144
 console.log(fibonacci(20));      // 6765