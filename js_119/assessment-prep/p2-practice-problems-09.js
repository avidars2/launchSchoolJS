/**
 * Create a function that takes two string arguments and returns the number of 
 * times that the second string occurs in the first string. Note that overlapping strings 
 * don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.
 */

/**
 * I: Two string arguments
 * O: Number of times that the second string occurs in the first string
 * 
 * Explicits:
 * 1. Overlapping strings don't count
 * 2. Second argument is never empty, first one may be
 * 
 * Implicits:
 * 1. Single character substrings are valid
 * 2. None of the inputs have spaces
 * 
 * Ideas:
 * 1. Loop through string until match is found
 * 2. Keep track of position substring is found and ends at
 * 3. Start after ending position for next match
 * 
 * 'babab', 'bab'
 * 'bab' covers 0 to 2
 * starting from 'ab', evaluate 'bab'
 * //If evaluating string > remaining length, break
 * No match and over end of string
 * 
 * 'babab', 'ba'
 * 'ba' | 'bab' --> matches
 * 'ba' | 'b' -->  matches
 * 'b' --> no match
 * 
 * I will take a substring and iterate through the main string
 * If substring === slice of mainstring starting at current index up to substring length,
 * increment matches by 1
 * Start iteration after the sliced amount, continuing to look for matches
 * If no match on current iteration, skip to next iteration
 * 
 * Data structures:
 * 1. String
 * 
 * Algorithm:
 * 1. Matches = 0
 * 2. Take substring
 * 3. Loop through main string //babab, bab slices (0, 3) --> 'bab' from main string which is a match
 * 4. If a slice of main string from current index of loop up to length of substring === substring
 * --Matches++ //Matches is incremented
 * --index is incremented by substring length //Current iteration is increased by 3, so from 0 to 3
 * 5. Return matches
 */

function countSubstrings(str1, str2) {
    if (str2.length > str1.length) return 0;

    let matches = 0;
    for (let charIdx = 0; charIdx < str1.length; charIdx++) {
        //babab, bab
        // console.log(`STart Index: `, charIdx);
        // console.log(`End Index: `, charIdx + str2.length);
        let subStr = str1.slice(charIdx, charIdx + str2.length);
        // console.log(subStr);
        if (subStr === str2) {
            matches++;
            charIdx += (str2.length - 1);
        }
        // console.log(`Matches: `, matches)
    }

    return matches
}


const p = console.log;
// p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);

//Time to solve: 16.5 minutes