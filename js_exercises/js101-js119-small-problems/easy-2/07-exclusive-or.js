/** Problem
 * 
 * Exclusive Or
The || operator returns a truthy value if either or both of its operands are truthy, 
a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are truthy, 
and a falsey value if either operand is falsey. This works great until you 
need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true
 */


/** P
 * Input: Two arguments
 * Output: true/false
 * 
 * Create a function which if exactly one of the two arguments passed 
 * is truthy, return true. Otherwise return false.
 * 
 */

/** E
 * 
 * Test above in example
 * 
 */

/** DA
 * Data structure: Any datatype
 * Output: Boolean value
 * 
 * Algorithm:
 * 1. Create a function that takes two arguments
 * 2. Check if first argument is true
 * 3. If true, return true if second argument is false. Else return false
 * 4. If false, return true if second argument is true. Else return false
 */

function xor(argument1, argument2) {

  return Boolean((argument1 && !argument2) || (argument2 && !argument1));
  if (argument1) {
    return Boolean(!argument2);
  } else {
    return Boolean(argument2);
  }

}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true

//Cases for Xor
/** 
 * If my auto high beam light is already on, have the light on 
 * 
 */