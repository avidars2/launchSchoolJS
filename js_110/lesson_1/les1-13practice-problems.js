/**
 * Practice Problem 1
What is the return value of the filter method call 
below? Why?
 */
[1, 2, 3].filter(num => 'hi');

//[1, 2, 3]
//This is because a non falsy value will return true
//Filter uses the return value to determine whether
//The current value iterated will be pushed to the
//new Array

/**
 * Practice Problem 2
What is the return value of map in the following code? Why?
 */
[1, 2, 3].map(num => {
  num * num;
});
//[undefined, undefined, undefined]
//This is because when curly braces are used in an
//arrow function without an explicit return value
//undefined is returned
//Map builds a new array by transforming the elements
//that it performs iteration over on it's current
//array and returns the transformation to the new
//array
//AKA, the callback function has no return value
//So the new array replaces each element with undefined

/**
 * Practice Problem 8
Take a look at the following array.

 */

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// /Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

/**
 * Input: array
 * Output: Object with array values as keys, and index as values
 * 
 * ['hi'] --> {hi: 0}
 * 
 * save index value of array
 * save value of array
 * 
 * assign value to obj key
 * assign index to obj value
 * 
 * Helpful methods
 * 1. forEach
 */

let obj = {};

flintstones.forEach((el, idx) => obj[el] = idx);

// console.log(obj);

/**
 * Practice Problem 9
Add up all of the ages from the Munster family object:
 */
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let total = Object.values(ages).reduce((total, curr) => total + curr, 0);
// console.log(total);

/** Practice Problem 10
Pick out the minimum age from our current Munster family object:
 * 
 */

let minAge = Object.values(ages).sort((a,b) => a - b)[0];
// console.log(minAge);


/** Practice Problem 11
Create an object that expresses the frequency with 
which each letter occurs in this string:
 */
let statement = "The Flintstones Rock";

// let statement = "hii"

//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

/**
 * I: string
 * O: frequency each letter occurs
 * 
 * 'hi' --> {h: 1, i: 1};
 * 'Hhi' --> {H: 1, h: 1, i: 1};
 * 
 * 
 * 
 */

let letterCount = {};

statement.
split('').
filter(letter => letter !== ' ').
forEach(letter => {
  if (!letterCount.hasOwnProperty(letter)) {
    letterCount[letter] = 0;
  }
  letterCount[letter] += 1
});

console.log(letterCount)