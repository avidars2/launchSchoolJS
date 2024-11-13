/** Problem
 * Madlibs is a simple game where you create a story template with "blanks" for words. 
 * You, or another player, then construct a list of words and place them into the story, 
 * creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, 
an adverb, and an adjective, and injects them into a story that you create.

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
 */

/**P
 * Inputs: A noun, verb, adjective, adverb
 * Outputs: 4 Sentence story on 3 lines, using the input
 * 
 * Implicit requirements:
 * The story needs to be flexible so it can use an adverb as well as the other
 * Example used 3 lines/4 sentences
 * 
 * It takes user input
 * 
 * Mental model:
 * Given the lexical categories noun, verb, adjective, adverb input from a user,
 * build a program that takes this input and plugs it into a story frame that I created
 */

/** E
 * 
 * Input: House, run, pretty, funkily
 * Output: A story with the above concatenated in the appropriate categories
 * 
 */

/**DA
 * D: String input from user
 * 
 * A:
 * 1. GET lexical cateogry input from user and assign to variables
 * 2. PRINT string with blank spots in story for user input to fill
 */

let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`When I ${verb}, I ${verb} my ${noun}. And I make sure that my ${
noun} knows how ${adverb} I ${verb}. 
Although in hindsight, I think my wife divorced me because my ${adjective} ${noun}.`);