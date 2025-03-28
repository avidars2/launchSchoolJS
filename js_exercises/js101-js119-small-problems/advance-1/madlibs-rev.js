/**
 * I: template object
 * O: String
 * 
 * Explicit:
 * 1. Template input
 * 2. Template is a guide to making something
 * 3. Build list o nouns, verbs, adj, adv directly into program
 * 4. Program should read that list and place text into template
 * 5. then return result
 * 
 * Implicit:
 * 1. 2 templates
 * 2. Template determines arrangement of adjectives
 * nouns, verbs, and adverbs
 * 3. Program should be adaptive to these arrangements
 * 
 * 'The $$N$$ $$V$$ the $$N$$'s $$N$$.' --> 'The dog bites the dog's tail.'
 * 
 */

/**
 * Data structures:
 * 1. Array input
 * 2. String output
 * 
 * Algorithm:
 * 1. Take a template
 * 2. Replace special values with random noun/verb/adv/adj
 * 3. Return newly created string
 * 
 * 
 */

let decoder = {
  '$$NOUN$$': ['fox', 'dog', 'tail', 'head', 'leg', 'cat'],
  '$$VERB$$': ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  '$$ADVE$$': ['easily', 'noisily', 'lazily', 'excitedly'],
  '$$ADJE$$': ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  '$$NWLN$$' : ['\n']
}

let template2 = `The $$NOUN$$ $$VERB$$ the $$NOUN$$'s $$NOUN$$.`
let template1 = 'The $$ADJE$$ brown $$NOUN$$ $$ADVE$$ $$VERB$$ the $$ADJE$$ yellow $$NOUN$$, who $$ADVE$$ $$VERB$$ his $$NOUN$$ and looks around.'

function madLibs(template) {
  let codes = Object.keys(decoder); //[$$N$$, $$V$$,...]
  let strArr = template.split(' ').
  map(word => {
    if (codes.some(key => word.includes(key))) {
      // console.log(word);
      let wordArr = word.split('')
      let wordID = wordArr.slice(0, 8).join('');
      // console.log(wordID);
      let randomWord = chooseRandomWord(wordID);
      wordArr.splice(0, 8, randomWord);
      return wordArr.join('');
    } else return word;
  }).join(' ');

  console.log(strArr);
  //Iterate over string array
  //Check if string includes substring $$N$$
  //If it does, replace only the $$N$$ portion
  //'$$N$$.'
  ///'$$N$$.'.includes($$N$$) ?
  ///str.split('') --> [$, $, N, $, $, .]
  ////arr.splice(0, 4, 'random word'); --> ['fox', '.']
  ////arr.join('') --> 'fox.'
}

function chooseRandomWord(wordID) {
  let randomWord = '';
  // console.log(decoder[wordID]);
  let arrLen = decoder[wordID].length;
  let index = Math.floor((Math.random() * arrLen));
  randomWord = decoder[wordID][index];
  return randomWord;
}

madLibs(template1);
madLibs(template2);

// console.log(decoder.$$ADJ$$[0] + decoder.$$NL$$[0] + decoder.$$V$$[0]);