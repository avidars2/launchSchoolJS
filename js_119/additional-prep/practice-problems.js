function evaluateSolutions() {
    // problem1(); //Solved in 13.5 minutes
    // problem2(); //Solved in 17.1 minutes

}
evaluateSolutions();

/**
Given 2 two arguments of an array of numbers and a number, find all the pairs that results in the forming a triangle with the number.

Note: To determine if three numbers form a triangle you have to use the Triangle Inequality Theorem, which states that the sum of two side lengths of a 
triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.

 */

function problem1() {

/**
 * I: Array, number
 * O: Array of array pairs
 * 
 * Explicits:
 * 1. 3 numbers form a triangle if the sum of 2 side lengths is greater than the third side
 * 2. The above needs to be true for all combinations of side lengths
 * 
 * 
 * [2, 3, 4, 5], 7 --> 
 * 2, 3, 7
 * 
 * 2 + 3 > 7 ? No
 * 2 + 7 > 3 ? Yes
 * 7 + 3 > 2 ? Yes
 * 
 * If all yes, a valid pair was found
 * 
 * [2, 3, 4, 5], 7
 * 
 * 2, 3
 * 2, 4
 * 2, 5
 * 3, 4
 * 3, 5
 * 4, 5
 * 
 * Evaluate each pair if it meets the triangle condition
 * If true, push pair into array
 * 
 * Ideas:
 * 1. double loop for pairs
 * 
 * DS:
 * 1. Array of numbers
 * 2. Empty array to push valid pairs into
 * 3. Numbers; evaluate if 3 number combinations match triangle formula
 * 
 * Algorithm:
 * 1. arrayPairs = [];
 * 2. Iterate through array of numbers [2, 3, 4, 5]
 * 3. For each number, start a new loop at current index + 1 [2, 4]
 * 4. In the new loop, evaluate the outer loop element with the inner loop element if it meets triangle formula
 * 5. If true, push array into arrayPairs
 * 6. If false, keep iterating
 * 7. Repeat until end of array and push arrayPairs
 * 
 * Evaluate triangle formula
 * 1. Is el1 + el 2 > argument
 * 2. Is el1 + argument > el2
 * 3. Is el2 + argument > el1
 * 4. If all conditions pass, it is a valid pair
*/

function findTrianglePairs(arrOfNums, thirdSide) {
    let arrayPairs = [];

    for (let startNum = 0; startNum < arrOfNums.length; startNum++) {
        for (let innerNum = startNum + 1; innerNum < arrOfNums.length; innerNum++) {
            let firstSide = arrOfNums[startNum];
            let secondSide = arrOfNums[innerNum];
            let pair = [firstSide, secondSide];
            if (evaluateTriangleFormula(pair, thirdSide)) {
                arrayPairs.push(pair);
            }
        }
    }
    // console.log(arrayPairs);
    return arrayPairs

}

function evaluateTriangleFormula(pair, thirdSide) {
    return (pair[0] + pair[1] > thirdSide) && (pair[0] + thirdSide > pair[1])
    && (pair[1] + thirdSide > pair[0])
}

// console.log(evaluateTriangleFormula([3, 4], 7));

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]
console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []
console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]


//Solved in 13.5 minutes
};

/**
P: Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. 
Minimum possible length is `2`. If there’s none return `[]`. 

 */
function problem2() {;

/**
 * I: Array of numbers
 * O: New array of maxium possible consecutive alternating odd and even numbers
 * 
 * Explicits:
 * 1. Minimum length of returned array is 2
 * 2. If no consecutive alternating odd and even #'s, return '[]'
 * 
 * Implicits:
 * 1. If numbers are incrementing by 1, it is alternating
 * 
 * Odd: num % 2 === 1
 * Even: num % 2 === 0
 * 
 * [1, 2, 3, 4, 5, 6] //[1, 2, 3, 4, 5, 6]
 * 1 -- odd
 * 2 -- even
 * 3 -- odd
 * 4 -- even
 * keep going until 2 evens or 2 odds in a row
 * 
 * [2 , 4, 6, 8]
 * 2 -- even
 * 4 -- even //break
 * 
 * 4 -- even
 * 6 -- even //break
 * 
 * Idea:
 * --Double loop, incrementing combinations 
 * 
 * [1, 1, 3, 7, 8, 5] 
 * 1 -- odd
 * 1 -- odd //break
 * 
 * 1 -- odd
 * 3 -- odd //break
 * 
 * 3 -- odd
 * 7 -- odd //break
 * 
 * 7 -- odd
 * 8 -- even
 * 5 -- odd
 * //end of array break
 * 
 * Is length of current combination > 1 ? Yes
 * Is longer than current highest combo ? Yes
 * 
 * arrayCombo = [7, 8, 5]
 * 
 * Looping from 8, 
 * 8 -- even
 * 5 -- odd
 * 
 * [8, 5] not > current highest so skip
 * 
 * 
 * [4, 6, 7, 12, 11, 9, 17]
 * 
 * let currentHighestCombo = []
 * 
 * 6, 7, 12, 11 > 2 length ? Yes > currentCombo ? Yes, re-assign currentCombo
 * 
 * Check if next number is opposite of previous
 * previousEval = odd
 * current = ? even
 * 
 * previous = even
 * current -
 * 
 * if previous index odd && current even OR previous even && current odd then push number
 * 
 * Iterate through the array.
 * For each number, start a new loop from index + 1
 * --Inner loop, check if new index num is opposite even/odd from previous
 * --If so, push, else break loop
 * 
 * DS:
 * 1. Array of numbers
 * 
 * Algorithm:
 * 1. highest combo = [] 
 * 1. Iterate through array // * [4, 6, 7, 12, 11, 9, 17]
 * 2. For each element, start a new loop at next index element
 * 3. From next index element, evaluate formula: //4, 6
 * --temparray = [currentEl]
 * ---Is previous index odd && is current index even OR is previous index even && current index odd
 * ----If above is true, push current element into temporary array
 * ---If false, break loop
 * 4. if temp array length > 2 && > highest combo length, re-assign highest combo length
 * 5. Else continue to next iteration
 * 6. Repeat then return highest combo 
 */

function longestAlternatingSubarray(numArr) {
    let highestCombo = [];

    for (let outNum = 0; outNum < numArr.length; outNum++) {
        let tempArray = [numArr[outNum]];
        for (let inNum = outNum + 1; inNum < numArr.length; inNum++) {
            let previousNum = numArr[inNum - 1];
            let currentNum = numArr[inNum];
            if ((isOdd(previousNum) && isEven(currentNum)) || (isEven(previousNum) && isOdd(currentNum))) {
                tempArray.push(currentNum);
            } else break;
        }

        if ((tempArray.length > 2) && (tempArray.length > highestCombo.length)) {
            highestCombo = tempArray;
        }
    }
    return highestCombo;
}

function isOdd(num) {
    return ((num % 2) === 1)

}

function isEven(num) {
    return ((num % 2) === 0)

}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]
console.log(longestAlternatingSubarray([4, 6, 7, 6, 7, 9, 17])); // [ 6, 7, 6, 7 ]

//Solved in 17.10 minutes

}