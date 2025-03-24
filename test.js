function isNonAlphaNumeric(str) {
  return str.split('').every(char => {
    return (!(char >= '0' && char <= '9') && !(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'))
  })
}

console.log(isNonAlphaNumeric('.'));