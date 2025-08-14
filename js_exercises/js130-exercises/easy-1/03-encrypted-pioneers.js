/**ROT13
 * Substitution cipher that replaces a letter with the 13th
 * letter after it in the Latin Alphabet
 * 
 * A --> N and N --> A
 * B --> O and O --> B
 * Because there are 26 letters in the Latin alphabet and 26 = 2 × 13, 
 * the ROT13 function is its own inverse:
 */

let namesArr = `Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq voa Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu`.split('\n');

// console.log(namesArr);

// console.log('z'.charCodeAt(0));

//Anything > 122 restarts count at 97
// console.log(String.fromCharCode(107));

/**
 * Add 13 to character code
 * If charCode + 13 > 122, 
 * excess past 122 starts at 97
 * 
 * 120 + 13 = 133
 * 122 (11 excess)
 * 122 + 1 = 97 (10 excess)
 * 97 + 10 = 107 (final);
 * 
 * 
 */

function rot13Add(char) {
  let startNum = char.charCodeAt(0);
  let newNum = startNum + 13;
  let difference = 0;
  if (newNum > 122) {
    difference = newNum - 122;
    newNum = 97 + difference - 1;
  }

  let newChar = String.fromCharCode(newNum);

  return newChar;
}

function translateLowerToUpper(char) {
  if (char >= 'A' && char <= 'Z') {
    return rot13Add(char.toLowerCase()).toUpperCase();
  } else if (char >= 'a' && char <= 'z') {
    return rot13Add(char);
  } else return char;

}

function decryptRot13(encryptedArr) {
  // console.log(encryptedArr);
  let decryptedArray = encryptedArr.map(words => {
    return words.split(' ').//['Nqn', 'Ybirynpr']
    map(name => {
      return name.split('')
      .map(char => translateLowerToUpper(char))
      .join('');
      })
    .join(' ');
  })

  decryptedArray.forEach(word => console.log(word));
}
// console.log(translateLowerToUpper('z'));

decryptRot13(namesArr);