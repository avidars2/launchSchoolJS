// filterEmulation();
// mapEmulation();
// reduceEmulation();
// filterReduceEmulation();
mapReduceEmulation();

function filterEmulation() {

let numbers = [1, 2, 3, 4, 5];

function filter(arr, callback, thisArg) {
  /**
   * Given an array
   * iterate through each element of array
   * Invoke callback and pass element as argument
   * if callback evaluates to a truthy value, push element into new array
   * 
   * 
   * return new array
   */

  let newArr = [];

  for (let element in arr) {
    let value = callback.call(thisArg, arr[element], element, arr);
    if (value) newArr.push(arr[element]);
  }

  return newArr;

}


console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
};

function mapEmulation() {

let numbers = [1, 2, 3, 4, 5];

function map(arr, callback, thisArg) {
  /**
   * Given an array
   * Iterate over each element
   * Pass each element to callback and invoke
   * Push return value into new array
   * 
   * Return new array
   */

  let newArr = [];
  for (let index in arr) {
    let element = arr[index];
    newArr.push(callback.call(thisArg, element, index, arr));
  }

  return newArr;
}

console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
}

function reduceEmulation() {

let numbers = [1, 2, 3, 4, 5];

function reduce(arr, callback, initialValue=null, thisArg) {
  /**
   * Given an array
   * iterate over each element of array
   * Check accumulator/initial value rules from below //accumulator exists outside loop
   * pass accumulator and element as arguments for callback and invoke
   * 
   * return accumulator
   */

  /**
   * callback gets passed 2 arguments
   * 1st: accumulator
   * 2nd: current element of array
   * 
   * if initialValue is null, accumulator is set to first element of array
   * --Iteration then starts on second element of array
   * 
   * if initialValue is NOT null, accumulator is set to initial value
   * ---iteration starts on first element of array
   */

  let accumulator = initialValue;
  // console.log(`Initial value: ${accumulator}, ${initialValue}`)

  for (let index in arr) {
    let element = arr[index];
    // console.log(`Index: ${index}`, `Element: ${element}`);
    if (index === '0' && accumulator === null) {
      // console.log('initial value is set to:', accumulator);
      accumulator = element;
      continue;
    }
    
    // console.log(accumulator);
    accumulator = callback.call(thisArg, accumulator, element, index, arr);
  }

  return accumulator === null ? undefined : accumulator;



}

console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]
}

function filterReduceEmulation() {;

function filter(arr, callback, thisArg) {
  let filteredArr = arr.reduce((acc, el, idx, arr) => {
    let isTruthy = callback.call(thisArg, el, idx, arr);
    if (isTruthy) acc.push(el);
    return acc;
  }, []);

  return filteredArr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
}

function mapReduceEmulation() {

function map(arr, callback, thisArg) {
  return arr.reduce((transformedArr, element, index, thisArr) => {
    transformedArr.push(callback.call(thisArg, element, index, thisArr));
    return transformedArr;
  }, [])
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
}