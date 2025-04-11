/**
Create a function that takes a string of digits as an argument and returns the 
number of even-numbered substrings that can be formed. For example, in the 
case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', 
and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.
 */

/**
 * I: String of digits
 * O: Count of even number strings that can be formed
 * 
 * Explicits:
 * 1. If a substring occurs more than once, count each occurence as a separate substring
 * 
 * Implicits:
 * 1. Evenness is determined by the number ending with an even number
 * 2. Order isn't being sorted or mixed, it's just substrings of current string
 * 
 * '1432'
 * 2
 * 32
 * 432
 * 1432
 * 4
 * 14
 * 
 * Loop backwards from each even number to the front
 * Starting at the last even number 2
 * Even numbers = [2]
 * Loop backwards and append characters to get each even substring
 * 32
 * 432
 * 1432
 * 
 * Next to last even number
 * 4
 * 14
 * 
 * 
 * Find last even # in string,
 * Starting from there, loop backwards and push all created even strings into array
 * Continue backwards iteration until next even # is found
 * Repeat step 2
 * 
 * Data structures:
 * 1. Array
 * 2. Numbers
 * 
 * Algorithm:
 * --Even numbers Array = []
 * 1. Iterate backwards through string //'1432'
 * 2. Evaluate each # for an even # //'2' is even
 * --If Even # is found, push into array then new loop from that position //'2' is pushed into array, then new loop
 * --New loop backwards to build each char into string
 * -----Append char, push to array //'32' is pushed, then '432', then '1432'
 * -----Repeat until end of str
 * 3. Repeat # 2 until 'beginning' of string //'4 is found next, same process occurs
 * 4. Return length of array
 * 
 */

function evenSubstrings(numStr) {
    let numArray = [];
    for (let idx = numStr.length - 1; idx >= 0; idx--) {
        let currentNum = numStr[idx];
        if (isEven(currentNum)) {
            numArray.push(currentNum);
            let newNum = currentNum;
            // console.log(currentNum);
            for (let currentIdx = idx - 1; currentIdx >= 0; currentIdx--) {
                // console.log(numStr[currentIdx]);
                newNum = numStr[currentIdx] + newNum;
                numArray.push(newNum);
            }
        }
    }

    console.log(numArray.length)

    return numArray.length
}

function isEven(numStr) {
    return (Number(numStr) % 2 === 0)
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);

//Time to complete: 17.2 minutes