/**
 * Problem/Definitions:
 * 
 * I: Object with various properties defining opponent positiions
 * O: Numeric position of closest active opponent
 * 
 * E:
 * 1. Write a function that returns the closest active opponent
 * 2. Always 2 arguments
 * 3. Arguments will always be an object and an integer
 * 4. Empty objects should return null
 * 5. Active opponents have numeric positions, eliminated have null
 * 6. You can assume that at least one opponent will always be active
 * 7. No opponent will share the same position
 * 
 * I:
 * 2. Return a number value
 * 
 * Tests:
 * {op1: 1,
 * Op2: 2}, 3
 * 
 * 1, 2
 * 
 * 3 - 2 === 1
 * 
 * 3 - 1 === 2
 * 
 * {op1: 5,
 * Op2: 8}, 6
 * 
 * 6 - 5 === 1
 * 6 - 8 === 2
 * 
 * 
 * CQ:
 * 1. Will the input always be an object and number?
 * 2. Position of closest active opponent - what is an active opponent?
 * 3. How is distance of opponents calculated? Is it just by the difference in numeric values between two opponents?
 * 3. Is each property in an object an individual opponent? Can there be additional properties or meta-properties?
 * 4. What happens if value of key value pair is non-numeric?
 * 5. Should negative numbers be handled differently or the same? Are they allowable? What about integers, can they be non-integers?
 * 
 * Edge cases:
 * 1. Check if object is empty, if so, return null
 * 
 * 
 * Given an object and a positive integer, check if the object is empty, if so return null. If not, assume at least one valid opponent.
 * Check the numeric positions of each opponent. If the numeric position is not null, subtract it from the second argument.
 * Use this to search for the lowest difference and track that, as well as the position found
 * 
 * If a difference is === to an already found difference, compare the positions of oponents. Higher positiion opponent takes precedent to get returned
 * 
 * 
 * 
 * 
 * 
 * DS:
 * 1. Objects
 * 2. Numbers to compare with object values
 * 3. Arrays to measure object length
 * 
 * A:
 * 1. Check if object has at least one property, if not return null
 * 2. Loop through properties of object, getting the numeric value
 * 3. For each value, substract it from the second argument
 * ----Assign the difference and numeric positiion to a variable
 * ----If variable is already assigned, compare if absolute value is less than or equal to current value
 * ----If less than, re-assign
 * ----If equal to, compare positions and re-assign if higher positiion
 * ----If greater than, then continue and don't re-assign
 * 
 * 
 */

function findClosestOpponent(obj, num) {
  if (Object.keys(obj).length === 0) return null;
  
  let highestPosition = -Infinity;
  let difference = Infinity;

  for (let idx in obj) {
    if (obj[idx] === null) continue;
    let position = obj[idx];
    let currentDifference = Math.abs(num - obj[idx]);

    if (currentDifference < difference) {
      difference = currentDifference;
      highestPosition = position;
    } else if (currentDifference === difference) {
      if (position > highestPosition) {
        highestPosition = position;
      }
    } else continue;
  }

  return highestPosition;

}


console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1b" : 5
}, 3)); // 5


console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100


// console.log(findClosestOpponent({
//  "Opponent 1d" : null, "Opponent 1e" : null
// }, 150)); // ??

// console.log(findClosestOpponent({
//  "Opponent 1d" : 1, "Opponent 1e" : 2
// }, 0.5)); // ??

// console.log(findClosestOpponent({
//  "Opponent 1d" : 1, "Opponent 1e" : 2
// }, -5)); // ??

console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15

console.log(findClosestOpponent({}, -5)); // Null