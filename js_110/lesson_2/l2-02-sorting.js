let words = ['go', 'ahead', 'and', 'jump'];

//Sort by length of each word
//use sort()

words.sort((a, b) => a.length - b.length);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  a = a.reduce((num, nextNum) => num + nextNum);
  b = b.reduce((num, nextNum) => num + nextNum);
  return a - b
})

console.log(scores)