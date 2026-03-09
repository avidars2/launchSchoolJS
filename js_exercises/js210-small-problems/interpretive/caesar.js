/**
 * P:
 * - plaintext
 * - encrypted text can be decoded with the key (shift value)
 * I: String
 * 
 * O: Ciphered string
 * 
 * E:
 * 1. If letter 'A' is right-shifted by 3 positiions, it will be substituted
 * with the letter 'D'
 * 2. Shift value === key
 * 3. Only uppercase and lowercase letters
 * 4. Other characters is left as is
 * 5. Lettercase reains the same during shift (A --> D but a--> d)
 * 6. If key value exceeds length of alphabet, wrap around from beginning
 * 
 * I:
 * 1. The letter we end the count on is what we use
 * 2. 0 shift value returns the same letter
 * 3. You can wrap around multiple times
 * 
 * Given a string, write a function that can take that string, and convert it
 * to a ciphered string using the key value provided
 * 
 * T:
 * 
 * How do we convert a string into a shifted string?
 * 
 * How can we shift a string?
 * 'A', 0
 * 'A' --> 'A'
 * 
 * 'A', 3
 * A, b, c, D --> 'D'
 * 
 * 'Z' a, b, C --> 'C'
 * 
 * How do we wrap around letters?
 * 
 * Ideas:
 * 1. Use UTF-8 character code point values
 * 2. ['ABC..Z']
 * 
 * CQ:
 * 1. How is punctuation and numbers handled then?
 * 2. Are Uppercase and lowercase interchangeable?
 * 3. Will the inputs only be strings or should the function handle
 * invalid inputs?
 * 4. How should empty strings be handled, or strings with no alphabetic characters?
 * 5. Will tehe shift value always be a Number? What happens if it is negative?
 * --Can it be decimal numbers or will it only be integers?
 * 
 * Assumptions:
 * 1. Yes, only strings
 * 2. Empty strings return empty strings
 * 3. Non-alphabetic strings return the same as is
 * 4. Shif tvalue will only be positive integers
 * 
 * EC:
 * 
 * DS:
 * 1. Put letters in an array, or just a single string to measure index position
 * 2. Strings
 * 
 * A:
 * 1. If shift value === 0, return same string as is
 * 2. If string contains no alphabetic characters, return string as is
 * 3. Iterate through the string array ['a', 'b', 'c']
 * 4. Convert the character to the shifted value ['c', 'd', 'e']
 * ---Take character idx position
 * ---Add shift value
 * ---Do new value % 26
 * ---Get character from that position
 * 
 * 5. Re-map it and return the new joined string 'cde'
 * 
 * 'abc', 2
 * 
 * 'a' --> find index in letters
 * Take index + shift value
 * 0 + 2 == 2
 * Get letter at that position '2' --> c
 * 
 * 'z' --> 'b'
 * 25 --> 27
 * 
 * if idx > 25, get 27 % 26 --> 1
 * 
 * Take letter index (2) 
 * ad
 * 
 * 'a' --> c
 * 'b' --> d
 * c --> e
 * 
 */

function caesarEncrypt(str, shift) {
  if (str.length === 0) return str;
  if (shift === 0) return str;

  // console.log(str, shift);

  let strArr = str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      // console.log(`isChar`, char);
      return shiftChar(char, shift);
    }

    return char;
  })

  // console.log(`returning`, strArr.join(''), 'for ', str, 'with shift of ', shift);
  return strArr.join('');

}

function shiftChar(char, shift) {
  let charCase = char.toLowerCase() === char ? 'lower' : 'upper';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let charIdx = letters.indexOf(char.toUpperCase());
  // console.log(charIdx);
  let newChar = (charIdx + shift) % 26;
  return charCase === 'lower' ? letters[newChar].toLowerCase() : letters[newChar].toUpperCase();

}



// simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// caesarEncrypt('z', 0);      // "z"
// caesarEncrypt('z', 1);      // "a"
// caesarEncrypt('.,.213') //.,.213

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

module.exports = {caesarEncrypt}