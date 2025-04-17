function substringTest(str1, str2) {
    let str1Lower = str1.toLowerCase();
    let str2Lower = str2.toLowerCase();
  
    let shorterStr = str1Lower.length < str2Lower.length ? str1Lower : str2Lower;
    let longerStr = str1Lower.length > str2Lower.length ? str1Lower : str2Lower;
  
    console.log(longerStr);
  
    for (let idx = 0; idx < shorterStr.length; idx++) {
      for (let jdx = idx + 2; jdx <= shorterStr.length; jdx++) {
        let substring = shorterStr.slice(idx, jdx);
  
        if (longerStr.includes(substring)) {
          return true;
        }
      }
    }
    return false;
  }


  console.log(substringTest("Something", "Fun") === false); // true
console.log(substringTest("Something", "Home") === true); // true
console.log(substringTest("Something", "") === false); // true
console.log(substringTest("", "Something") === false); // true
console.log(substringTest("BANANA", "banana") === true); // true
console.log(substringTest("test", "lllt") === false); // true
console.log(substringTest("1234567", "541265") === true); // true
console.log(
  substringTest("supercalifragilisticexpialidocious", "SoundOfItIsAtrociou") ===
    true
); // true