/**
 Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
 You may assume that the input string contains only alphanumeric characters.

 */

/**
 * I: String
 * O: Number of times case-insensitive alphanumeric characters occur more than once
 * 
 * Explicits:
 * 1. Input string only contains alphanumeric characters
 * 
 * xxyypzzr
 * x - 1
 * x - 2
 * y - 1
 * y - 2
 * p - 1
 * z - 1
 * z - 2
 * r - 1
 * 
 * x, y, z
 * 
 * 7657
 * 
 * Data structures:
 * 1. Object to keep track of characters and count
 * 2. Strings
 * 
 * Algorithm:
 * 1. Iterate through the STRING as an array //xxyypzzr
 * 2. For each element, add as a key into trackingObject
 * --If key doesn't exist, add as a property with count of 1
 * --If exists, add 1 to count
 * 3. Filter out the object for any values that are 1
 * --Look at the object keys, and then use the key to get the value
 * --and for each value that is 1, filter out
 * 4. Return length of remaining keys
 * --Return length of step 3 array
 */

function distinctMultiples(str) {
    let trackingObject = {};
    let strArr = str.split('').forEach(el => {
        trackingObject[el.toLowerCase()] = (trackingObject[el.toLowerCase()] ?? 0) + 1;
    })

    return Object.keys(trackingObject).filter((key) => {
        if (trackingObject[key] === 1) return false;
        return true;
    }).length;

    // console.log(trackingObject);


}


 const p = console.log;
p(distinctMultiples("xyz") === 0); // (none)
p(distinctMultiples("xxyypzzr") === 3); // x, y, z
p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
p(distinctMultiples("unununium") === 2); // u, n
p(distinctMultiples("multiplicity") === 3); // l, t, i
p(distinctMultiples("7657") === 1); // 7
p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5

//Solved in 7.8 minutes