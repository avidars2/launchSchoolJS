// 3. fill
// 1.  ​Basic​: What does the fill method do, and how does it affect the original array? Example: [1, 2, 3].fill(8)
//3-1: The fill method replaces the elements in an array with the value of the first argument passed to it.
// 2.  ​Basic​: How can you use fill to replace the first two elements of an array ['a', 'b', 'c'] with the value 'x'?
//3-2: arr.fill('x', 0, 2)
// 3.  ​Basic​: What arguments does fill accept besides the value to fill with?
//3-3: If a second argument is passed, that is the zero-based index start position for elements to be filled at
//If the second argument is negative, it will count backwards from the end of the array and start filling the elements
//If a third argument is passed, that is the zero-based index end position (exclusive) for elements to be filled up to
//If the second argument is greater than the length of the array, no elements are replaced
//If the third argument is a position before the second argument, no elements are replaced
// 4. find
// 1.  ​Basic​: What does find return if no element satisfies the condition? Example: [1, 2, 3].find(num => num > 5)
//4-1: If no element satisfies the condition of find, undefined is returned
// 2.  ​Basic​: Describe the arguments passed to the callback function used with find.
//4-2: The three arguments passed to find are the current element find is iterating over,
//the current index find is iterating over, and the array the find method was called on
// 3.  ​Basic​: Find the first even number in the array [7, 4, 3, 11] using find.
//4-3: arr.find(num => num % 2 === 0)
// 5. findIndex
// 1.  ​Basic​: How does findIndex differ from find, and what will it return if no element satisfies the condition?
//     •   Example: [1, 3, 5].findIndex(num => num % 2 === 0)
//5-1: findIndex differs from find in that it will still search for an element in which when passed into the callback function
//returns a truthy value. However, when it finds that element, it returns the index of that element
//If no element satisfies the condition, it returns the Number -1 
// 2.  ​Basic​: What is the return type of findIndex, and how can its value be used?
//5-2: The return data type of findIndex is a Number. It's value can be used in several ways. One would be to access the element in the array
//in which the value was found
// 3.  ​Basic​: Write code to find the index of the first string longer than 3 characters in ['a', 'abcd', 'xyz'].
//5-3: arr.findIndex(el => el.length > 3) //returns 1
// 6. includes
// 1.  ​Basic​: How does includes determine equality of elements? Example: [1, 2, 3].includes('2')
// 6-1: Includes evaluates elements through strict equality. The example shown would return false as type coercion
//does not occur when Includes compares elements
// 2.  ​Basic​: Write a code snippet to check if the number 5 is present in the array [1, 2, 3, 4, 5].
//6-2: arr.includes(5);
// 3.  ​Basic​: What will be the return value of includes when used with an array of objects and why?
//6-3: Unless a reference to the object stored in the array is passed as an argument to the includes method
//A comparison of Objects will return false since Objects are compared by their references, and will
// return false if different, even if the distinct objects referenced have the same properties.
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
// 2. Basic​: Describe the state of the array after pop is used on ['apple', 'banana', 'cherry'].
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