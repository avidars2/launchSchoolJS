{//Question 1
//It will output the colors array with 'yellow' pushed to the end
//updateColors is called passing the colors array as an argument through pass by reference --> the functions colors parameter shadows the global variable
//but points to the same array --> the global variable color's value is copied and pushed into the array the colors parameter points to
//the global colors array is logged
}

{//Question 2
//The colors array with undefined pushed to the end
//Becaue the function takes two arguments, and only one was passed, the remaining 'color' parameter is undefined
//This is because the parameters shadow the global variables of the same name, so the global 'color' is not used
}

{//Question 3
//The colors array with purple and pink at the end
//updateColors is called twice. It takes two arguments; an array and an item to push onto that array
//Each time it is called, it pushes whatever was passed and assigned to the color parameter
}
{//Question 4
//The colors array with purple and pink at the end
//newColors is declared and initialized with the evaluation of updateColors --> Colors array and color1 are passed as arguments
//The array referenced by colors the parameter and global colors is mutated with pink pushed to the end
//The array reference is returned and assigned to newColors --> updateColors is called again
//Same process repeats with pink being pushed to the array, except the return value is not assigned to any variable
//The array is logged
}
{//Question 5
//Original colors array is logged
//This is because the removeColor function reassigns the color variable to the 'blue' value popped from the end of the colors array (as it was passed as an argument)
//the array colors (global) and colors (function scoped) point to are the same due to pass by reference
//addColor is then called using the mutated array of [red, green] and pushes the value of 'color' (global) to the end
//Because color was reassigned previously to blue, blue is pushed to the array resulting in the log being the original colors array
}
{//Question 6
//hello, Hello, hello!!!
//word is declared and initialized with 'hello', it is a primitive and therefore can't mutate, and it is never reassigned so logging it produces 'hello'
//word is passed as an argument to capitalize, but the argument is ignored because capitalize takes no arguments
//So the word variable used is global and in two parts: takes the first character, uppercases it, evaluates it in the expression, then concatenates it
//with the evaluation of word.slice(1); this removes the first character 'h' and returns 'ello'. Combined with the return statement, returns 'Hello' to initialize
//capitalizedWord which is logged
//Lastly, exclaimedWord is initialized to the evaluation of exclaim() which has capitalizedWord passed as an argument (Hello) --> But it is ignored as it takes no arguments
//It concantanates a copy of this primitive value (global 'word' 'hello') with '!!!' and returns it
//exclaimedWord is initialized with the return value to produce 'hello!!!' which is then logged
}
{//Question 7
//hello, Hello, Hello!!!
//Same reasoning as above however the arguments do pass and so instead of the global 'word' being used, a copy of the primitives assigned to word and capitalizedWord
//are passed to the functions
}