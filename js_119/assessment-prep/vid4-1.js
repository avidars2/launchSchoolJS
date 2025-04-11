/**
 * Write a function to find the longest common prefix string
 * amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string ''
 * 
 * Example 1: 
 * Input: ['flower', 'flow', 'flight]
 * Output: 'fl'
 * 
 * Example 2:
 * 
 * Input: ['dog', 'racecar', 'car']
 * Output: ''
 * 
 * I: Array of strings
 * O: Common prefix or empty string if none exist
 * 
 * Explicits:
 * - All given inputs are in lowercase letters a-z
 * - Return the longest common prefix
 * 
 * flower, flow, flight
 * f is a match,
 * fl is a match //fl can be returned
 * flo is not a match for all
 * 
 * Implicits:
 * 1. The first match shouldn't be returned
 * 2. The loop should continue until a match can no longer
 * be found
 * 
 * prefix = ''
 * 
 * loop until a match isn't found, return prefix
 * 
 * Take a word as a test word
 * Iterate over remaining words to see if prefix of test
 * word matches prefix of ALL other words
 * 
 * If so, re-assign prefix
 * If not, return prefix
 * 
 * Data structures:
 * 1. Strings
 * 2. Array
 * 
 * Algorithm:
 * 1. Prefix = ''
 * 2. Take first word as test word //flower
 * 3. Loop through first word, taking first character as test //f
 * 4. Loop through remaining words to check if they start with test //f is in flow and flight? yes
 * character
 * 5. If so, re-assign prefix //prefix = 'f'
 * --A word may prematuerly re-assign the prefix
 * --Check if ALL Words match criteria before re-assigning prefix
 * --This will repeat until a match is no longer found or end of loop
 * --Have re-assignment on outside of inner loop where it checks if criteria was matched
 * 6. If not, assign match variable to false
 * 7. Return prefix
 */

function commonPrefix(wordArr) {
    let testWord = wordArr[0];
    let remainingArr = wordArr.slice(1);

    let prefix = ''
    for (let charIdx = 0; charIdx < testWord.length; charIdx++) {
        let testPrefix = prefix + testWord[charIdx];
        
        let match = remainingArr.every(word => {
            return (word.slice(0, testPrefix.length) === testPrefix);
        })
        if (match) {
            prefix = testPrefix;

        } else return prefix;
        // console.log(testPrefix);

    }
    return prefix;
}


console.log(commonPrefix(['flower', 'flow', 'flight']));
console.log(commonPrefix(['dog', 'racecar', 'car']));
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']));
console.log(commonPrefix(['throne', 'dungeon']));
console.log(commonPrefix(['throne', 'throne']));
