/**
 * Create a function that takes 2 arguments, an array and an object. 
 * The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. 
 * The object will contain two keys, "title" and "occupation", and the appropriate values. 
 * Your function should return a greeting that uses the person's full name, and mentions the person's title.
 * 
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
 */

/**P
 * Inputs: Array of 2 or more elements, Object with 'title' and 'occupation' keys
 * Output: Greeting incorporating the array elements and Object values
 * 
 * The array can have 2 or more elements, meaning an unknown amount of values will need to be handled
 * There are spaces in the output, but not in the array or Object, so spaces will need to be added
 * The string will need to be flexible to handle changing inputs
 * 
 * So if 5 array elements, maybe even numbers are input, can I assume this is part of the name? Yes
 * The object is limited to only 2 keys? Yes
 * 
 * 
 * Mental Model:
 * Given an array of elements, and an object with 2 keys, convert the elements of these objects into a string.
 * The elements of the array will need spaces concatenated before each element.
 * 
 * 
 */

/**E
 * 
 * Input: ['Lee', 'Bee'], {title: "Pro", occupation: 'Baller"}
 * Output: Hello, Lee Bee! Nice to have a Pro Baller around.
 * 
 * Input: [1, 2, 3, 4, 'Magnus'], {title: "Pro", occupation: 'Baller"}
 * Output: Hello, 1 2 3 4 Magnus! Nice to have a Pro Baller around.
 */

/** DA
 * 
 * Data structures: Array and object are inputs of the function. Output will be a string
 * 
 * 1. Create a function that takes two arguments, an array and an object
 * 2. For each element of the array, concatenate a space at the front, and then to a primary variable that holds all the elements
 * 3. Return a string that concatenates the title and occupation keys
 * 
 * 
 */

function greetings(nameElements, status) {
  let fullName = '';
  
  nameElements.forEach((name) => {
    fullName += ` ${name}`;
  })

  return `Hello,${fullName}! Nice to have a ${status.title} ${status.occupation} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
console.log(greetings([1, 2, 3, 4, 'Magnus'], { title: "Master", occupation: "Plumber" }));