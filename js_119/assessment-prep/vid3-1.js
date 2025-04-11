/**
 * Given 2 strings, your job is to find out if there is a substring
 * that appears in both strings. You will return true if you find a substring
 * that appears in both strings, or false if not.
 * 
 * We only care about substrings that are longer than one letter long
 */

/**
 * I: 2 strings
 * O: Boolean if substring greater than one character appears in both strings
 * 
 * Explicits:
 * 1. Substring matches must be 2 characters long minimum
 * 2. 
 * 
 * Implicits:
 * 1. Case does not matter
 * 2. Blank arguments return false
 * 3. Number strings are also evaluated
 * 4. I just need to test 2 characters at a time, not the entire matching substring
 * since it's just a boolean result
 * 
 * Take substrings of a string
 * 'Something' & 'Home', evaluate the substring
 * if it exists in the second string
 * 
 * 'So' exists in home? No
 * om exists in home? Yes -- return true
 * 
 * Ideas: 
 * 1. Double loop
 * - Loop through first string, extract 2 characters at a time
 * & evaluate if those 2 characters exist in the second string
 * 2. Break into array, evaluate if a 2 element slice contains the same
 * elements as a two element slice of the second argument
 * 
 * Data structures:
 * 1. Strings
 * Algorithm:
 * 1. Iterate through first string
 * 2. Extract current index + next character (If last index break loop)
 * 3. Second loop, iterate through second string
 * 4. Check if second string includes first substring
 * 5. If so, break and return true
 * 6. If not, keep looping
 * 
 * One loop
 * Extract substring
 * Check if second string includes substring
 * If so, return true
 * If not, continue
 * Default return false
 * 
 * 
 */

function substringTest(str1, str2) {
    for (let charIdx = 0; charIdx < str1.length; charIdx++) {
        if (charIdx === str1.length - 1) break;
        let subStr = str1[charIdx] + str1[charIdx + 1]
        subStr = subStr.toLowerCase(); //'so', 'home'

        if (str2.toLowerCase().includes(subStr)) {
            console.log(true);
            return true;
        } else continue;
    }
    console.log(false);
    return false;
}

substringTest('Something', 'Fun') //false
substringTest('Something', 'Home') //true
substringTest('Something', '') //false
substringTest('', 'Something') //false
substringTest('Something', 'Fun') //false
substringTest('BANANA', 'banana') //true
substringTest('', '') //false
substringTest('1234567', '541265') //true