/**
 * P
 * - Write in own words
 * - I/O
 * - Clarifying quetions
 * - Explicits/Implicits 
 * - Diagram 
 */

function stringToSignedInteger(str) {
  let convertedNum = 0;
  let leadingSignData = determineSign(str[0]);
  let modifiedNumStr = leadingSignData.isSign ? str.slice(1) : str;

  modifiedNumStr.split('').forEach((char, idx) => {
    let numChar = charToNum(char);
    convertedNum += addZeroes(numChar, modifiedNumStr.length, idx);
  });

  return convertedNum * leadingSignData.modifier;

}

function addZeroes(num, strLength, index) {
  let zeroes = strLength - (1 + index);  
  return num * Math.pow(10, zeroes);

}

function determineSign(sign) {
  let signKind = {isSign: false, modifier: 1};
  signKind.isSign = sign === '-' || sign === '+' ? true : false;

  if (signKind.isSign && sign === '-') {
    signKind.modifier = -1;
  }

  return signKind;

}

function charToNum(str) {
  const NUM_VAL_FROM_CHAR = 48;
  return str.charCodeAt(0) - NUM_VAL_FROM_CHAR;
}

// console.log(charToNum('2'))

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true