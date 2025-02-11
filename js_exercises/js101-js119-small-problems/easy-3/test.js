function squash(array) {
  array[0] = array[0].replaceAll(" ", "");
}

let sentence = ["A sentence is a set of words put together with meaning."];
squash(sentence);

console.log(sentence[0]);