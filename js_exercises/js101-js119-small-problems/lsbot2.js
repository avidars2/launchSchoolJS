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
//7-1: indexOf will return the Number '-1' if no elements are strictly equal to the argument passed. 
// 2.  ​Basic​: Explain the purpose of the second argument in indexOf.
//7-2 The second argument of indexOf is the zero-based-index start position in which the method will
//start iterating through the array it is called on
// 3.  ​Basic​: Use indexOf to find the first occurrence of the letter 'a' in the array ['c', 'a', 'a', 'b'].
//7-3: arr.indexOf('a');
// 8. join
// 1.  ​Basic​: What is the output of ['a', 'b', 'c'].join('-')?
//8-1: The above will return a new String: 'a-b-c'
// 2.  ​Basic​: How can you use join to form a string from an array of words ['Hello', 'World'] with spaces in between?
//8-2: arr.join(' ')
// 3.  ​Basic​: What will join return on an empty array?
//8-3: The 'join' method will return an empty string, even if a delimiter is passed as an agrument
//if it is called on an empty array.
// 9. pop
// 1.  ​Basic​: What does pop return, and how does it affect the original array? Example: let arr = [1, 2, 3]; arr.pop();
//9-1: Pop removes and returns the last element of an array. It is a mutating operation which means the
//array it is called on is permanently altered.
// 2. Basic​: Describe the state of the array after pop is used on ['apple', 'banana', 'cherry'].
//9-2: The array will only have the Strings 'apple' and 'banana' as it's elements after the 'pop'
//method is used. This is because pop will mutate and remove the last element from that array.
// 3.  ​Basic​: How is pop different from shift?
//9-3: Pop differs from shift in that it removes an element from the end of an array.
//Shift removes an element from the beginning of the array.
// 10. push
// 1.  ​Basic​: What does push return, and how does it affect the original array? Example: let arr = [1, 2]; arr.push(3);
//10-1: The 'push' method is a mutating operation which will concat it's argument to the end
//of the array it is called on. The original array is mutated. It returns the new length of the array
// 2.  ​Basic​: How can you use push to add multiple elements at once to the array ['cat', 'dog']?
//10-2: You can pass multiple arguments into push in order to concat those elements to the end of
//the array. For example arr.push('mouse', 'ant') would add both elements to the end of the array
// 3.  ​Basic​: Describe and explain the change in length before and after using push.
//10-3: The length of an array is increased by the number of elements push concats to the array.
//So if push has a single argument, the length will be the arrays original length + 1
//If it has multiple arguments, the length will be the arrays original length + the amount of arguments
//passed into the push method
// 11. reverse
// 1.  ​Basic​: How does reverse affect the original array ['a', 'b', 'c']?
//11-1: Reverse is a mutating operation will reverse the order of elements within in array
//It is a destructive operation
// 2.  ​Basic​: What will be the return type of reverse, and how does it relate to its input?
//11-2: The reverse method is called on an array and reverses that array. It's return value
//is the same array it was called on
// 3.  ​Basic​: Write code to reverse the order of numbers in the array [5, 10, 15].
//11-3: arr.reverse()
// 12. shift
// 1.  ​Basic​: Describe the effect of shift on the array [9, 8, 7].
//12-1: If the shift method is called on that array it will mutate the array by
//removing the first element from it and returning that value.
// 2.  ​Basic​: What does shift return, and how is this different from pop?
//12-2: Shift removes and returns the first element of the array it is called on. This differs from pop
//as pop removes and returns the last element of the array it is called on
// 3.  ​Basic​: How can shift be used to implement a queue-like structure?
//12-3: Shift can be used to implement a queue-like structure by removin the first
//element in 'line'. So the first elements pushed to the array will be the first elements
//returned by shift
// 13. slice
// 1.  ​Basic​: How does slice differ from splice, especially in terms of side effects?
//13-1: Slice differs from splice in a few ways:
//-It is not a mutating operation. Slice returns a new array. Splice is destructive and mutates the array it is called on
//- Slice chooses elements to remove differntly. It's first argument is the zero-based index start position
//to start removing elements. It's second argument is the zero-based index position to remove elements
//up to but not including. 
//- Splice on the other hand, uses it's second argument to determine how many elements to remove in place.
//- Splice also accepts additional arguments to replace or add elements at the index specified
// 2.  ​Basic​: Use slice to create a new array from elements 1 to 3 in [1, 2, 3, 4, 5].
//13-2: let newArr = arr.slice(0, 3) //this will return a new array containing [1, 2, 3];
// 3.  ​Basic​: What will slice return when given a negative start index?
//13-3: Slice will count from the back of the array and return the elements up to
//the position of the end index if specified, otherwise up to the end of the array
// 14. some
// 1.  ​Basic​: What will [1, 3, 5].some(num => num % 2 === 0) return?
//14-1: The above will return false. This is because the some method will iterate over an array
//and check if an element causes some's callback function to return a truthy value. For this, no element does
//as none of them are even
// 2.  ​Basic​: How do the arguments in the callback function used with some influence its operation?
//14-2: The 'some' method passes the current element, index, and current array into the callback function
//The callback function will return a value and if it is truthy it will cause some to return true
// 3.  ​Basic​: Explain the behavior and return value of some when used on an empty array.
//14-3: The 'some' method will return false on an empty array because of it's default return of false
//It is checking if some element in the array matches it's condition, and since there are no elements
//nothing in the array matches it's condition
// 15. sort
// 1.  ​Basic​: Explain the default behavior of sort on an array of strings ['banana', 'apple', 'cherry'].
//15-1: By default, if sort is called on an array of strings with no arguments passed, it will mutate the array and sort
//it in ascending order. It compares each string, character by character, until a mismatch is found.
//When a mismatch is found, it will compare each character by their UTF-16 code point values
//Whichever character has the lower codepoint value is considered less than.
//If both strings have the same characters in this evaluation, the longer string is considered greater than
// 2.  ​Basic​: How does providing a callback function to sort affect the sorting order for an array of numbers?
//15-2: If a callback function is provided, the return value is evaluated if it is negative or positive
//If the first argument is subtracted by the second argument, the array is sorted in ascending order
//If the second argument is subtracted by the first argument, the array is sorted in descending order
// 3.  ​Basic​: Use sort with a custom comparator to order objects by a name property in this array: [{name: 'John'}, {name: 'Jane'}, {name: 'Joe'}].
//arr.sort((a, b) => a.name.length - b.name.length);
// 16. splice
// 1.  ​Basic​: Describe how splice modifies the array [1, 2, 3, 4] with the method call .splice(1, 2, 'a', 'b').
//16-1: Splice will modify the array by replacing index 1 of the array, along with an additional element with the
//Strings 'a' and 'b'. The method is destructive so the final array would look like [1, 'a', 'b', 4];
// 2.  ​Basic​: How does the return value of splice differ from slice?
//16-2: Splice returns a new array of the removed elements from the array mutated
//Slice returns a new array of the elements copied from the original array
// 3.  ​Basic​: Use splice to remove the last two elements from the following array [2, 4, 6, 8, 10].
//16-3: arr.splice(-2, 2) //This will remove the last two elements from the array
// 17. unshift
// 1.  ​Basic​: What is the purpose of unshift, and how does it modify the array [3, 4] when called with 1, 2?
//17-1: The purpose of unshift is to add elements to the begining of an array. It is a mutating method.
//If called on the [3, 4] array, it will add it's arguments to the beginning of the array
//It will add the arguments backwards into the beginning of the array so that the mutated array would be [1, 2, 3, 4]
// 2.  ​Basic​: How does the return value of unshift differ from push?
//17-2: Unshift and push both return the new length of the array they are called on
// 3.  ​Basic​: What elements will the array [5, 6, 7] contain after unshift is used to add 8, 9?
//17-3: [8, 9, 5, 6, 7] //The elements will have 8 and 9 added to the beginning of the array, mutating it in the process