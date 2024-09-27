/**
 Keyword	Meaning
START	start of the program
SET	set a variable that we can use for later
GET	retrieve input from user
PRINT	display output to user
READ	retrieve a value from a variable
IF/ELSE IF/ELSE	show conditional branches in logic
WHILE	show looping logic
END	end of the program
 */

{//Example PseudoCode

/**
 * Informal
 * For example, here's some pseudocode for a function that determines which number in a collection has the greatest value.

Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
 */

/**
 * Formal

START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    do nothing

  iterator = iterator + 1

PRINT savedNumber

END
 */

/**
 * Translated to program code

 function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}
 */


}

{//a function that returns the sum of two numbers
//Have a function with 2 parameters
//Both parameters are added together
//result is returned

/**
 * START
 * 
 * # Given 2 numbers
 * SET function with 2 parameters
  * Add both parameters
  * Return Parameter
 * 
 * PRINT function return value
 * END
 */
}
{//a function that takes an array of strings, and returns a string that is all those strings concatenated together

  //Function is called, array of strings passed as an argument
  //Variable fullString is declared and initialized with empty string
  //Loop through each element of array
    //For each element, concatenate element to fullString variable
  //Return fullString variable

  /**
   * START
   * 
   * SET function stringMerger with 1 parameter
    * SET fullString = ''
    * SET iterator = 0
    * WHILE iterator < array length
      * fullString += element
      * iterator += 1
    * return fullString
  * END
   */
}
{//a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
  everyOther([1,4,7,2,5]); // => [1,7,5]

  //Function that takes 1 parameter
  //Set a new array variable
  //Loop through array
    // For each element, if the index is even, filter the element in and push it to the new array variable
  //Return new array variable

  /**
   * START
   * 
   * SET function (array)
    * SET iterator = 0
    * SET new array = []
    * WHILE array length > iterator
      * IF index = even
        * push element to array
      * ELSE do nothing
    * return new array
  * END
   */
}
{//a function that determines the index of the 3rd occurrence of a given character in a string. 
  //For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x').
  //If the given character does not occur at least 3 times, return null.

  //Function that takes two parameters, character and string
  //Split the string into individual characters stored in an array
  //Set a counter variable, initiated at 0
  //Set a position variable, initiated at 0
  //Iterate through each character
  // If the character matches the character passed as an argument, increase counter by 1
  //Then check if the counter is at 3, if it is at 3, then return the position variable
  //Increase the position variable by 1 at the end of each loop
  //If no match is found by the end of all the iterations, return null


  /**
   * START
   * 
   * SET function (character, string)
    * SET array = String split by individual characters
    * SET counter = 0
    * SET position = 0
    * WHILE array length > position, iterate through elements
      * IF element === character
        * SET counter +=1
      * IF counter === 3
        * PRINT position
        * return positiion
      * SET position += 1
    * IF counter < 3 return null
    *
    * END 
   */
}
{//a function that takes two arrays of numbers and returns the result of merging the arrays. 
  //The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. 
  //For instance:
  merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

  //Start with function that takes 2 arrays as arguments: array1 and array2
  //Set an empty array variable called newArray
  //Iterate through both arrays
  //If the length of array1 is greater than the current index, then push an element from the first array to newArray
  //If the length of array2 is greater than the current index, then push an element from the second array to newArray
  //Return the finished array

  /**
   * START
   * 
   * SET function (array1, array2)
    * SET newArray = []
    * SET iterator = 0
    * SET arrayLength
    * IF array1 length > array 2 length
      * arrayLength = array1 length
    * ELSE
      * arrayLength = array2 length
      * 
    * WHILE arrayLength > iterator
      * IF array1 length > iterator
        * push array1[iterator] element into newArray
      * ELSE push null
      * IF array2 length > iterator
      *   push array2[iterator] element into newArray
      * ELSE push null
      * 
    * return newArray
    * 
    * END
   */
}
