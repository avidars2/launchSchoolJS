/**
Create a function that takes two strings as arguments and returns true if some portion of the characters 
in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.
 */

/**
 * I: 2 strings
 * O: Boolean if characters can be re-arranged to match characters in second string
 * 
 * Explicits:
 * 1. Both strings will only contain lowercase characters
 * 2. Neither string will be empty
 * 
 * Implicits:
 * 1. If the first string is shorter than the second string, it will be false
 * 
 * coal
 * 
 * boldface
 * 'b' --> no match
 * o --> match (pop 'o') from coal
 * a --> match (pop 'a') from coal
 * l --> match (pop 'l') from coal
 * d --> no match
 * f --> no
 * a --> no more
 * c --> match (pop 'c') from coal
 * e --> no match
 * 
 * If coal was an array, if the length is now 0, then it is possible
 * If it has a length, then it is not possible
 * 
 * aha
 * ahb
 * a --> match and pop
 * h --> match and pop
 * b --> no match
 * 
 * final length of array is 1, so not possible
 * 
 * Data structures:
 * 1. Array
 * 2. String
 * 
 * Algorithm:
 * 1. Convert first and second string to array
 * 2. Iterate through first string array //boldface
 * 3. Check if second string array includes the letter //o
 * --If so, remove it from that second string array
 * ---Splice it ?
 * --If not, continue iteration
 * 4. If length of second string array > 0,, return false
 * 5. Else, return true
 * 
 */

function unscramble(test, main) {
    let testArr = test.split('');
    let mainArr = main.split('');

    testArr.forEach(el => {
        if (mainArr.includes(el)) {
            let charIdx = mainArr.findIndex(char => char === el);
            mainArr.splice(charIdx, 1);
        }
    })

    return mainArr.length === 0;
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);

//Time to solve: 10.7 minutes