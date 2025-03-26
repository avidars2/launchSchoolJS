// # & Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. 
//It shortens by removing vowels in the sequence of `a`, `e`, `i`, `o`, and `u`. Start removing from the end of the sentence. 
//If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit. -- Avi
/**
 * I: String and Number limit
 * O: Shortened string
 * 
 * Explicits:
 * 1. Shorten sentence to fit within character limit set (second argument)
 * 2. Remove vowels in sequence of aeiou starting at the end of the sentence
 * 3. If it can not be shortened to fit within character limit, return empty string.
 * 4. Spaces don't count for the limit
 * 
 * Implicits
 * 1. Vowels are removed in sequence starting at end of sentence, however
 * because it is in sequence, if an 'a' is the 2nd character and e is the last, a would still 
 * be removed first
 * 2. If character limit is > length of string, no change
 * 3. Character limit is inclusive
 * 
 * 
 * 'a eeeeee' --> shorten by 1 character --> ' eeeeee'
 * 'aeiou', 2 --> 'iou'
 * 
 * Spaces don't count towards limit
 * 
 * So ' i ' --> length of 1 for character lmit
 * 
 * 
 */

/**
 * Data structures:
 * 1. Strings to array to string
 * 
 * Algorithm:
 * 1. Evaluate length of sentence and how many characters above limit it is without spaces
 * --Remove spaces from sentence to get the accurate length
 * --Then re-append into proper sentence
 * 2. Then we can figure out How many characters to remove
 * --Characters total - limit
 * 3. Remove characters in sequence until at limit
 * -STarting with array of each character
 * -Evaluate starting at end and look for 'a'
 * -Replace/Remove 'a', check length
 * -Repeat until length is equal to limit or no more 'a's
 * -Repeat with each vowel
 * -If length still greater than limit, return empty string 
 * 4. Return new string

*/
{
  function minimumShorten(str, limit) {
    let realLength = evaluateRealLength(str);
    if (realLength <= limit) return str;

    let charactersToRemove = realLength - limit;
    
    let strArr = str.split('');

    let check = removeVowel(strArr, 'a', charactersToRemove);
    // console.log(check);
    if (!check[0]) {
      charactersToRemove = check[1];
      check = removeVowel(strArr, 'e', charactersToRemove);
    }
    if (!check[0]) {
      charactersToRemove = check[1]
      check = removeVowel(strArr, 'i', charactersToRemove);
    }
    if (!check[0]) {
      charactersToRemove = check[1]
      check = removeVowel(strArr, 'o', charactersToRemove);
    }
    if (!check[0]) {
      charactersToRemove = check[1]
      check = removeVowel(strArr, 'u', charactersToRemove);
    }
    if (!check[0]) {
      return '';
    }
    // for (let removals = charactersToRemove; removals > 0; removals--) {
    //   let removedValueIdx = strArr.reverse().indexOf('a');
    //   if (removedValueIdx !== -1) {
    //     strArr[removedValueIdx] = 'remove';
    //     charactersToRemove--;
    //   } else {
    //     break;
    //   }
    // }

    let finStr = strArr.filter(el => el != 'remove').join('');
    console.log(finStr);
    return finStr;


  }

  function evaluateRealLength(str) {
    return str.split(' ').join('').length;
  }

  function removeVowel(strArr, vowel, charactersToRemove) {
    strArr.reverse()
    for (let removals = charactersToRemove; removals > 0; removals--) {
      let removedValueIdx = strArr.indexOf(vowel);
      if (removedValueIdx !== -1) {
        strArr[removedValueIdx] = 'remove';
        charactersToRemove--;
      } else {
        break;
      }
    }
    strArr.reverse();
    // console.log('char to remove', charactersToRemove)

    return [(charactersToRemove === 0), charactersToRemove];
    //We have an amount of vowels to remove
    //It iterates and removes a vowel
    //If the vowel is not found, loop breaks
    //
  }
}

{
  function minimumShorten(str, limit) {
    let realLength = evaluateRealLength(str);
    if (realLength <= limit) return str;

    let charactersToRemove = realLength - limit;
    
    let strArr = str.split('');


    // console.log(check);
    let check;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let currentVowel = 0;
    do {
      check = removeVowel(strArr, vowels[currentVowel], charactersToRemove);
      charactersToRemove = check[0];
      currentVowel++;
      if (currentVowel >= vowels.length) return ''

    } while (!check[0]) {

    }

    let finStr = strArr.join('');
    console.log(finStr);
    return finStr;
  }

  function evaluateRealLength(str) {
    return str.split(' ').join('').length;
  }

  function removeVowel(strArr, vowel, charactersToRemove) {
    strArr.reverse();
    let removalIndex = [];
    for (let removals = charactersToRemove; removals > 0; removals--) {
      let removedValueIdx = strArr.indexOf(vowel);
      if (removedValueIdx !== -1) {
        strArr[removedValueIdx] = 'ZZ'
        removalIndex.push(removedValueIdx);
        charactersToRemove--;
      } else {
        break;
      }
    }
    console.log(removalIndex)
    console.log(strArr)

    removalIndex.forEach(idx => strArr.splice(idx, 1, ''));
    strArr.reverse();
    console.log(strArr)
    // console.log('char to remove', charactersToRemove)

    return [(charactersToRemove === 0), charactersToRemove];
    //We have an amount of vowels to remove
    //It iterates and removes a vowel
    //If the vowel is not found, loop breaks
    //
  }
}

// Test cases
console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""


/*Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. 
The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array

// // Test Cases
// console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
// console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]


*/

/**
 * //Create a function called decoder that decodes a secret message 
//from a sentence. The secret message is formed by retrieving
//every nth character from every nth word of the sentence.
//-- Hamza

// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2)); 
// Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3)); 
// Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3));
//Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4));
// Output: "t"
console.log(decoder("This will not work well", 5));
// Output: ""
console.log(decoder("Send every code to find secrets hidden", 2));  
// Output: "vroert"
 */