//1
//Yes this would log an error since you are trying to invoke a
//Function declaration with no name

//2
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3
// The code throws an error because the function declaration
// 'sum' is hoisted along with the body of the function to the
//top of the scope. After, the variable declaration is hoisted
//It acts like the variable 'sum' is being re-assigned from the
//function to the Number 0 instead.

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);  // ?

// console.log(sum);

//4
// ((num) => {
//   for (num; num >= 0; num--) {
//     console.log(num);
//   }
// })(7);

//5
//No, the named function is not accessible in the global scope
//The function is evaluated as an expression which is only
//available within the functions local scope

//6
let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

//7
//Refactor #4 to use recursion:
(function countdown(num) {
  if (num <= 0) {
    console.log(num);
    return num;
  }
  console.log(num);
  return countdown(num - 1);
})(7);