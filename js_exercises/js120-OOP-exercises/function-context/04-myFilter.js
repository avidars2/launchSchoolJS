function myFilter(array, func, thisArg=this) {
  let result = [];
  /**
   * I want the execution context for the passed function
   * to be 'thisArg'
   * 
   * I could hard bind it
   */

  func = func.bind(thisArg);

  array.forEach(function(value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)); // returns [5, 6, 9]