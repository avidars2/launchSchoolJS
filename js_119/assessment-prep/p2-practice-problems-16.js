/**
Create a function that returns the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. You may assume 
that the input string contains only alphanumeric characters.
 */

/**
 * I: String
 * O: Number representing the count of unique characters which occur more than once in a string
 * 
 * Explicits:
 * 1. The string only contains alphanumeric characters
 * 2. Return count of alphanumeric characters which occur more than once
 * 2. Case does not matter
 * 
 * Implicits:
 * 1. Only number and alphabet strings
 * 
 * 
 * 'xyz' -->
 * 'x' - 1
 * 'y' - 1
 * 'z' - 1
 * 
 * Because none are 2 or more, return 0
 * 
 * xxyypzzr
 * 'x' - 2
 * 'y' - 2
 * p - 1
 * 'z' - 2
 * 'r' - 1
 * 
 * 3
 * 
 * Iterate through a string, and count the amount of times each character (case-insensitive) appears
 * And for all the characters that appear more than once, increment a count, then return that count
 * 
 * Data structures:
 * 1. String
 * 2. Object to keep track of each character's appearance
 * 
 * Algorithm:
 * 1. Iterate through the string, (split into array) //xxyypzzr
 * 2. For each element, //x
 * ---Add lowercase version as key to object (if not there), and increment count by 1 //x-2, y2,p 1, z2, r 1
 * 3. Get the values of the object and return the length of the array with all values less than 2
 * filtered out //return an array with length 3 and 3 will be returned
 */

function distinctMultiples(str) {
    let strArrObj = str.split('').reduce((acc, el) => {
        acc[el.toLowerCase()] = (acc[el.toLowerCase()] || 0) + 1;
        return acc;
    }, {})

    // console.log(strArrObj)

    return Object.values(strArrObj).filter(el => el > 1).length;
}

const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5

//Solved in 10.25 minutes