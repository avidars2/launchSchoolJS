

let fibArray = [1, 1];
let fibObj = {
  1: 1n,
  2: 1n
}
//If fibArray length === nth, access fibArray[nth - 1] value
//Perform fibonacci recursion
//Check if answer is stored in database before performing function
//If it is, return that value to avoid repeating calculation
//If it isn't, add that value to the database
/**
 * 
 */

let iterations = 0;
function fibonacci(nth) {
  iterations++;
  //Check if fibObj(nth) exists
  //If so, return that value
  if (fibObj.hasOwnProperty(nth)) return fibObj[nth];
  if (nth === 2n || nth === 1n) {
    return 1n;
  }

  //If code makes it this far, add result to data base before returning it
  fibObj[nth] = fibonacci(nth - 1n) + fibonacci(nth - 2n);
  return fibObj[nth];
 }

//  {
//  function fibonacci(nth) { //Original function to compare speed
//   if (nth === 2n || nth === 1n) {
//     return 1n;
//   }

//   return fibonacci(nth - 1n) + fibonacci(nth - 2n);
//  }
//  }


 function fibonacciExpl(nth) {
  //Check if fibObj(nth) exists
  //If so, return that value
  if (fibObj.hasOwnProperty(nth)) {
    console.log(`We already saved F${nth}, returning ${fibObj[nth]}`);
    return fibObj[nth];
  }

  //If code makes it this far, add result to data base before returning it
  console.log(`We don't have F${nth}, calculating...`);
  fibObj[nth] = fibonacciExpl(nth - 1n) + fibonacciExpl(nth - 2n);
  console.log(`returning... ${fibObj[nth]}`);
  return fibObj[nth];
 }

//  console.log(fibonacciExpl(100n));
//  console.log(fibObj);
//  console.log(fibonacci(40n));

let cache = [0n, 1n, 1n];
let calls = 0;

function fibonacciImp(nth) {
  calls++;
  //Check if cache has nth value
  cache[nth] = cache[nth] ?? fibonacciImp(nth - 1n) + cache[nth - 2n];
  return cache[nth];
}
 console.log(fibonacci(8366n), `\n Iterations: ${iterations}`); //Max calls arg 8366n, 16729 iterations
 console.log(fibonacciImp(8965n), `\n Calls: ${calls}`); //Max calls arg 8965n, 8964 iterations
