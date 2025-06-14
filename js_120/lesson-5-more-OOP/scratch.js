function joinOr(arr, delimiter=",", conjunction="or") {
  let lastIdx = arr.length - 1;
  if (arr.length <= 1) return `${arr[0] ?? ''}`
  if (arr.length === 2) {
    return arr.join(` ${conjunction} `);
  } else {
    return arr.slice(0, lastIdx).
    join(`${delimiter} `) + `${delimiter} ${conjunction} ${arr[lastIdx]}`;
  }
}
console.log(joinOr([]));
console.log(joinOr([1]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], ';'));
console.log(joinOr([1, 2, 3], ';', 'and'));