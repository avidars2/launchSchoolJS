/**
 * P:
 *-  Encrypts alphabetic text using polyalphabetic substitution
 * - Uses a series of Caesar Ciphers based on the letters of a keyword
 * - Each letter of keyword is treated as a shift value
 * 
 * - letter 'b' shift value of 1, 'd' shift value of 3
 * 
 * 'P'
 * 
 * Given a string, and a keyword,
 * split the alphabetic characters of a string into 
 * substrings the length of the keyword
 * 
 * For each substring, each character will correspond with a letter
 * in the keyword based on column position.
 * 
 * The index of that keyword will be the shift value in a ceasar cipher
 * that the word should be converted to
 * 
 * Pineapple
 * meat
 * 
 * Pine appl e
 * meat meat m
 * 
 * Pin-noc
 * 
 * Pinn oc
 * meat me
 * 
 * ['P', i, n, -, n]
 * [m, e, ,a , null, t]
 * 
 * I: String
 * O: Vigenere ciphered string
 * 
 * E:
 * 1. Shift value for a letter is equal to its index value in the alphabet
 * 2. 'a' - 'z' are equivalent to numbers 0-25, as are 'A' - 'Z'
 * 3. Case does not matter for keyword
 * 
 * 
 * I:
 * 1. Use the ceasar cipher for each character based on column position
 * 2. Need to split alphabetic string based on keyword length, and re-combine it with
 * punctuation
 * 3. Case does matter for output
 * 
 * T:
 * PIN
 * MEAT
 * 
 * 
 * CQ:
 * 1. What happens if the string does not split evenly with the shift value?
 * Do we just start at the next letter?
 * 2. Are there only 2 arguments?
 * 3. Can I assume the arguments will just be a string and a keyword?
 * 4. Will the keyword always be a string? Can the keyword have non-alphabetic characters?
 * 5. 
 * 
 * 
 * AS:
 * 1. Yes - start at whichever letter you get to
 * 2. Always string input for str and keyword
 * 3. keyword will always have just characters
 * 
 * DS:
 * 1. Array in order to preserve non-alphabetic characters
 * [P, I, -, N, E]
 * [M, E, -, A, T]
 * 
 * PIN-EAPP L
 * 
 * [P I N - E], [A P P, , L]
 * [M E A - T], [M E A, , T]
 * 
 * 
 * A:
 * 1. Break string into equal alphabetic parts based on length of keyword
 * ---If string has non-alphabetic characters, that does not count towards
 * ----the segment length (PI-NE) --> (P, I, - , N, E) at 4 length
 * 2. Map each segment to convert each alphabetic character to a relevant caesar cipher column
 * --If the character is not alphabetic, don't move the iteration for the keyword
 * 
 * PI-NE
 * 
 * P --> M
 * I --> E
 * - --> Skipped
 * N --> A
 * E --> T
 * 
 * ---Have a pointer str representing index of keyword
 * ---Each valid character moves the pointer
 * ---Invalid characters keep it in place
 * 
 * 
 * 3. Upon finishing, join and concatenate to a string
 * 
 * 
 */

 const {caesarEncrypt} = require('./caesar');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// console.log(caesarEncrypt('I', letters.indexOf('E')));

function vigenereCipher(str, keyword) {
  let finalString = '';
  let partLength = keyword.length;
  /**
   * [ [P, I, N -, E]
   * 
   * ]
   */

  let allSegments = [];
  let currentAlphabetsInArr = 0;
  let currentArr = [];

  for (let charIdx in str) {
    if (str[charIdx].match(/[a-z]/i)) {
      currentAlphabetsInArr++;
    }
    
    currentArr.push(str[charIdx]); //P I N - E//4

    if (currentAlphabetsInArr === partLength || (Number(charIdx) === str.length - 1)) {
      currentAlphabetsInArr = 0;
      allSegments.push(currentArr);
      currentArr = [];
    }
  }

  // console.log(allSegments, currentAlphabetsInArr, currentArr);

  let encryptedSegments = allSegments.map((alphabetArr) => {
    let currentKeywordCharIdx = 0;
    return alphabetArr.map((char, idx) => {
      //P I N - E
      //M E A T
      //B M N 

      let newChar = caesarEncrypt(char, letters.indexOf(keyword[currentKeywordCharIdx].toUpperCase()));
      if (char.match(/[a-z]/i)) {
        currentKeywordCharIdx++
      }

      return newChar;

    })

  })

  let combinedString = ''
  let combinedStr = encryptedSegments.map(textArr => combinedString += textArr.join(''));




  // console.log(encryptedSegments, combinedString);

  console.log(combinedString);
  return combinedString;



}

vigenereCipher('PIN', 'MEAT') //BMN
vigenereCipher('Pin', 'MEAT') //Bmn
vigenereCipher('PinE', 'MeaT') //BmnX
vigenereCipher('Pin-E', 'MeaT') //Bmn-X
vigenereCipher('', 'MeaT') //''
vigenereCipher('P0   12  in-E', 'meat') //B0  12  mn0X
vigenereCipher("Pineapples don't go on pizzas!", 'MEAT') //BMN

// caesarEncrypt("-", 6);