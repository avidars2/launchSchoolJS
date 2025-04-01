function isNonAlphaNumeric(str) {
  return str.split('').every(char => {
    return (!(char >= '0' && char <= '9') && !(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'))
  })
}

console.log(isNonAlphaNumeric('.'));

const arrayLikeObject = { 0: "x", 1: "y", length: 2 };
const arr1 = Array.from(arrayLikeObject);
arr1.push("z");
console.log(arr1);