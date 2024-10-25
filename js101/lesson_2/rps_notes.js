/**
 * Things to consider
Notice how the displayWinner function calls the prompt function. 
What happens if you move the displayWinner function definition above the prompt function definition? Does it still work?
-Yes - because it is a function declaration and not a function expression it may be called from anywhere that is within it's scope

How would you use the displayWinner function differently if it returned a string, as opposed to outputting the string directly?
-The return value could be assigned to a variable and logged within the while loop

We used the Math object to generate a random number and round down a floating point number. 
Skim through the documentation for the Math object and see what other methods from the object you may find useful. 
Specifically, read the pages for Math.round and Math.ceil. 
How would you rewrite the random index expression if you were to use one of these two methods instead of Math.floor?
-  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
-  let randomIndex = (Math.ceil(Math.random() * VALID_CHOICES.length)) - 1;

We used a while loop with an always-true condition and a break statement to decide whether to replay the game. 
Can you rewrite the loop so that we don't need to use the break statement to stop the loop?
-let continue = true;
-while (continue)
-  if (answer[0] !== 'y') continue = false;
 */