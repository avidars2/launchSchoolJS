function myForEach(array, func) {
  //Similar to forEach method
  //Take array and function as arguments
  //Function passed to myForEach should re-assign a variable in the outerscope (min) --this happens through the function
  for (let el of array) {
    func(el);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3

function myFilter(array, func) {
  let newArray = [];
  for (let el of array) {
    if (func(el)) newArray.push(el);
  }

  // console.log(newArray)
  return newArray;

}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);


// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function myMap(array, func) {
  let newArr = [];
  array.forEach((el) => newArr.push(func(el)))

  // console.log(newArr);
  return newArr;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]


function myReduce(array, func, initial) {
  let accumulator = initial;
  let startingIndex = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startingIndex = 1;
  }

  for (startingIndex; startingIndex < array.length; startingIndex++) {
    let newValue = array[startingIndex];
    accumulator = func(accumulator, newValue);
  }

  // console.log(accumulator)
  return accumulator

  //Iterate through an array with a starting value
  //If starting value is undefined, use the first element as the starting value instead
  //On each iteration, the return value of the function becomes the starting value for the next iteration
  //The final "starting value" after the last iteration is what gets returned
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

//Interrogation
function myOwnEvery(array, func) {
  for (let el of array) {
    if (!func(el)) return false;
  }

  console.log(true);
  return true;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true