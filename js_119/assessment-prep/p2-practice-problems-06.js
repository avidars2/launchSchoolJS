/**
 * Create a function that takes a string argument and returns a hash in 
 * which the keys represent the lowercase letters in the string, and the 
 * values represent how often the corresponding letter occurs in the string.
 * 
 * I: String
 * O: Hash which keys represent the lowercase letters in the string,
 * values represent how often the corresponding letter occurs in the string
 * 
 * woebegone --> {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1}
 * 
 * Explicits:
 * 1. Take a string argument
 * 2. Output a hash which seems to be an object
 * 3. Each key of the object represents a letter, and how often the letter appears
 * 4. Only lowercase letters should appear in hash
 * Implicits:
 * 1. Only letters/characters are included in this, not special cases
 * 
 * Ideas:
 * 1. Iterate through string
 * 2. Per character, add count to object for lowercase key
 * 
 * woebegone --> w --> {'w': 1}
 * o --> {'w': 1, 'o': 2, 'e': 3}
 * e, b, e, g, o, n, e -->
 * 
 * WOebegone --> { 'o': 1, 'e': 3, 'b': 1, 'g': 1, 'n': 1}
 * 
 * Data structures:
 * 1. String
 * 2. Object (hash)
 * 
 * Algorithm:
 * 1. Iterate through the string (Split string into array and iterate)
 * 2. Evaluate if character is a lowercase letter
 * 3. If so, add it's value as a key in an object
 * 4. If key exists, add 1 to count
 * 5. IF key doesn't exist, set key to 0, and add 1
 * 6. Return 'hash'
 * 
 * 
 */

function countLetters(str) {
    let hash = {};
    str.split('').forEach(char => {
        if (isLowerAlpha(char)) {
            hash[char] = (hash[char] || 0) + 1;
        }
    })

    return hash;

}

function isLowerAlpha(char) {
    return (char >= 'a' && char <= 'z')
}

const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));

//Solved in 7.5 minutes