// Certainly! Here are practice questions for each Array method listed in the JS119 study guide, excluding forEach, map, and filter. Each set includes three questions to help you understand how each method works, its arguments, and the return values:
// 1. concat
// 1.  ​Basic​: What does the concat method do when called with another array?
//     •   Example: [1, 2, 3].concat([4, 5, 6])
//1-1: Concat appends the elements of the array passed as an argument to a copy of the array it was called on and returns that new array
// 2.  ​Basic​: How can you use concat to join three arrays arr1, arr2, and arr3 into a single array?
// 1-2: arr1.concat(arr2, arr3)
// 3.  ​Basic​: What is the return type of concat, and how does it affect the original arrays?
//1-3: Concat returns a new array. It is non-mutating and does not affect the original arrays.
// 2. every
// 1.  ​Basic​: What will the following code return? [2, 4, 6].every(num => num % 2 === 0)
//2-1: The code will return true because the every method iterates over the array it is called on and evaluates if each element
//passed into it's callback function will return a truthy value. Because the callback function's body returns true if the
//element passed has a remainder of 0 when dividied by 2 (in other words, if the element is an even Number), every element
//evaluates as truthy
// 2.  ​Basic​: Explain what arguments the callback function receives when using every.
//2-2: The 'every' method will pass the current element it is iterating over, as well as the current index
//it is iterating over
// 3.  ​Basic​: What will the result be for an empty array with every, and why?
//2-3: True, because every element meets the condition. However their are no elements to evaluate which means
//the evaluation is technically true
// 3. fill
// 1.  ​Basic​: What does the fill method do, and how does it affect the original array? Example: [1, 2, 3].fill(8)
// 2.  ​Basic​: How can you use fill to replace the first two elements of an array ['a', 'b', 'c'] with the value 'x'?
// 3.  ​Basic​: What arguments does fill accept besides the value to fill with?
// 4. find
// 1.  ​Basic​: What does find return if no element satisfies the condition? Example: [1, 2, 3].find(num => num > 5)
// 2.  ​Basic​: Describe the arguments passed to the callback function used with find.
// 3.  ​Basic​: Find the first even number in the array [7, 4, 3, 11] using find.
// 5. findIndex
// 1.  ​Basic​: How does findIndex differ from find, and what will it return if no element satisfies the condition?
//     •   Example: [1, 3, 5].findIndex(num => num % 2 === 0)
// 2.  ​Basic​: What is the return type of findIndex, and how can its value be used?
// 3.  ​Basic​: Write code to find the index of the first string longer than 3 characters in ['a', 'abcd', 'xyz'].
// 6. includes
// 1.  ​Basic​: How does includes determine equality of elements? Example: [1, 2, 3].includes('2')
// 2.  ​Basic​: Write a code snippet to check if the number 5 is present in the array [1, 2, 3, 4, 5].
// 3.  ​Basic​: What will be the return value of includes when used with an array of objects and why?
// 7. indexOf
// 1.  ​Basic​: How does indexOf handle non-existent elements? Example: [1, 2, 3].indexOf(4)
// 2.  ​Basic​: Explain the purpose of the second argument in indexOf.
// 3.  ​Basic​: Use indexOf to find the first occurrence of the letter 'a' in the array ['c', 'a', 'a', 'b'].
// 8. join
// 1.  ​Basic​: What is the output of ['a', 'b', 'c'].join('-')?
// 2.  ​Basic​: How can you use join to form a string from an array of words ['Hello', 'World'] with spaces in between?
// 3.  ​Basic​: What will join return on an empty array?
// 9. pop
// 1.  ​Basic​: What does pop return, and how does it affect the original array? Example: let arr = [1, 2, 3]; arr.pop();
// 2.
// 9:50
// Basic​: Describe the state of the array after pop is used on ['apple', 'banana', 'cherry'].
// 3.  ​Basic​: How is pop different from shift?
// 10. push
// 1.  ​Basic​: What does push return, and how does it affect the original array? Example: let arr = [1, 2]; arr.push(3);
// 2.  ​Basic​: How can you use push to add multiple elements at once to the array ['cat', 'dog']?
// 3.  ​Basic​: Describe and explain the change in length before and after using push.
// 11. reverse
// 1.  ​Basic​: How does reverse affect the original array ['a', 'b', 'c']?
// 2.  ​Basic​: What will be the return type of reverse, and how does it relate to its input?
// 3.  ​Basic​: Write code to reverse the order of numbers in the array [5, 10, 15].
// 12. shift
// 1.  ​Basic​: Describe the effect of shift on the array [9, 8, 7].
// 2.  ​Basic​: What does shift return, and how is this different from pop?
// 3.  ​Basic​: How can shift be used to implement a queue-like structure?
// 13. slice
// 1.  ​Basic​: How does slice differ from splice, especially in terms of side effects?
// 2.  ​Basic​: Use slice to create a new array from elements 1 to 3 in [1, 2, 3, 4, 5].
// 3.  ​Basic​: What will slice return when given a negative start index?
// 14. some
// 1.  ​Basic​: What will [1, 3, 5].some(num => num % 2 === 0) return?
// 2.  ​Basic​: How do the arguments in the callback function used with some influence its operation?
// 3.  ​Basic​: Explain the behavior and return value of some when used on an empty array.
// 15. sort
// 1.  ​Basic​: Explain the default behavior of sort on an array of strings ['banana', 'apple', 'cherry'].
// 2.  ​Basic​: How does providing a callback function to sort affect the sorting order for an array of numbers?
// 3.  ​Basic​: Use sort with a custom comparator to order objects by a name property in this array: [{name: 'John'}, {name: 'Jane'}, {name: 'Joe'}].
// 16. splice
// 1.  ​Basic​: Describe how splice modifies the array [1, 2, 3, 4] with the method call .splice(1, 2, 'a', 'b').
// 2.  ​Basic​: How does the return value of splice differ from slice?
// 3.  ​Basic​: Use splice to remove the last two elements from the following array [2, 4, 6, 8, 10].
// 17. unshift
// 1.  ​Basic​: What is the purpose of unshift, and how does it modify the array [3, 4] when called with 1, 2?
// 2.  ​Basic​: How does the return value of unshift differ from push?
// 3.  ​Basic​: What elements will the array [5, 6, 7] contain after unshift is used to add 8, 9?
// Feel free to ask if you want explanations or examples for any specific method! These questions are aimed to enhance your understanding of how these methods work in practical scenarios

// 1.  ​Basic​: Remove Elements from an Array
//    •   Given an array let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'], write code to remove 'Banana' and 'Cherry' using the splice method.

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

console.log(fruits.splice(1, 2));
console.log(fruits)

// 2.  ​Basic​: Add Elements to an Array
//    •   Start with an array let colors = ['Red', 'Green', 'Blue'].
//    •   Use splice to insert the color 'Yellow' between 'Red' and 'Green'.
let colors = ['Red', 'Green', 'Blue']

colors.splice(-2, 0, 'Yellow')

console.log(colors);

// 3.  ​Basic​: Replace Elements in an Array
//    •   Given the array let numbers = [10, 20, 30, 40, 50], write code to replace '30' and '40' with '35' and '45'.
let numbers = [10, 20, 30, 40, 50];
numbers.splice(-3, 2, 35, 45)
console.log(numbers);

// 1. Modify and Insert Elements
// •   ​Question:​ Given an array 
//let students = ['Ava', 'Liam', 'Olivia', 'Noah', 'Emma'];, 
//use the splice method to remove 'Olivia' and insert 'Ethan' and 'Sophia' in its place. After modifying the array, also add 'Mason' to the end using the same splice call.
let students = ['Ava', 'Liam', 'Olivia', 'Noah', 'Emma'];

// students.splice(2, 3, 'Ethan', 'Sophia','Noah', 'Emma', 'Mason');
students.splice(2, 1, 'Ethan', 'Sophia', 'Mason');

console.log(students);

/**
2. Remove Every Other Item
•   ​Question:​ You have an array representing daily temperatures, 
let temps = [72, 75, 79, 80, 73, 78, 77, 69];. Use splice to remove every other day's temperature, 
starting from the second day. The resulting array should contain only the temperatures of the 1st, 3rd, 5th, and 7th days.
 */

let temps = [72, 75, 79, 80, 73, 78, 77, 69];

let iteration = 1;
while (iteration <= 4) {
  temps.splice(iteration, 1);
  iteration++;
}

console.log(temps);

// 3. Restore an Array
// •   ​Question:​ You are given two arrays: let missingParts = ['E', 'F']; and let sentence = ['A', 'B', 'C', 'D', 'G', 'H'];. 
//Use splice to restore the missing parts into their respective positions in the sentence array to make it [A, B, C, D, E, F, G, H].
let missingParts = ['E', 'F']; 
let sentence = ['A', 'B', 'C', 'D', 'G', 'H'];

sentence.splice(-2, 0, ...missingParts);

console.log(sentence);