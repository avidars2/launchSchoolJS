/**
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. 
There will always be exactly one such integer in the input array.

Examples

I: Array of integers
O: Returns the integer which appears an odd number of times

Explicits:
1. There will always be exactly one integer appearing an odd # of times in the array

Implicits:
1.Array can be length 1

[4]
4 --> appears once
1 % 1 === 1 ? Yes, so return 4

[7, 99, 7, 51, 99]
7 -- 1
99 -- 1
7 -- 2
51 -- 1
99 -- 2

7, 2
51, 1
99, 2

For each key, evaluate the value
See which value is odd, and if odd, return the key

Ideas:
1. Iterate through array, add numbers to object as keys with a count
2. After, evaluate object, loop through until an odd value is found, then return the key

Data structures:
1. Object to track values
2. Numbers

Algorithm:
1. Iterate through array [7, 99, 7]
--For each value, build an object with the key being the value
--And each associated value starting at 1 and incrementing each time it is found
--Essentially, count the number of times the key appears and store that as the value
2. Iterate through the object, looking at each value and checking if it is odd
--IF odd value is found, return the associated key


 */

function oddFellow(numArr) {
    // console.log(numArr)
    let countObj = numArr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})

    // console.log(countObj);

    for (let keys in countObj) {
        if (countObj[keys] % 2 === 1) return Number(keys);
    }
}



const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);

//Solved in 9 minutes