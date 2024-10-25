/**
 * Question 1: No
 * Bonus: undefined; but the slot is empty
 * Note: 'Empty slots' do not contribute to array length
 */
{
let array = [1,2,3];
array[10] = 5;
console.log(array);
array.forEach((_, index) => console.log('Item:', index));
}

/**
 * Question 2
 */

{
  let str1 = "Come over here!"; // true
  let str2 = "What's up, Doc?"; // false

  function checkIfExclaimed(str) {
    if (str.slice(-1) === '!') {
      console.log('Exclaimed!');
    } else console.log('Unexclaimed!');
  }

  checkIfExclaimed(str1);
  checkIfExclaimed(str2);


  //Method from solution is to use 'endsWith' method
  // str1.endsWith('!') ? console.log('Exclaimed') : console.log('Unexclaimed');
}

/**
 * Question 3
 */

{
  let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

  spotExists = Object.keys(ages).includes('Spot') ? 'Spot exists' : 'No Spot';

  console.log(spotExists);

  //Solution from LS was to use the 'hasOwnProperty' method
  //ages.hasOwnProperty('Spot') --> false
}

/**
 * Question 4
 */

{
  let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();

console.log(munstersDescription);

}

/**
 * Question 5
 * true then false
 */

/**
 * Question 6
 */

{
  let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
  let additionalAges = { Marilyn: 22, Spot: 237 };

  Object.assign(ages, additionalAges);
}

/**
 * Question 7
 */

{
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkForNameDino(string) {
  return string.includes('Dino');
}

console.log(checkForNameDino(str1));
console.log(checkForNameDino(str2));
}

/**
 * Question 8
 */

{
  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

}

/**
 * Question 9
 */

{
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones = flintstones.concat(['Dino', 'Hoppy']);
//flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

}

/**
 * Question 10
 */

{
  let advice = "Few things in life are as important as house training your pet dinosaur.";

  // Expected return value:
  // => 'Few things in life are as important as '

  console.log(advice.slice(0, advice.indexOf('house')));

}