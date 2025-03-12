/**
 * Rewrite recursive fibonacci so that it
 * computes results without using recursion
 * 
 * F(n) = F(n - 1) + F(n - 2) where n > 2

 */

 function fibonacci(nth) {
  let fibArray = [1, 1];

  while (fibArray.length <= nth) {
    let fibArrayLen = fibArray.length;
    fibArray.push(fibArray[fibArrayLen - 1] + fibArray[fibArrayLen - 2]);
  }

  console.log(fibArray[nth - 1]);
  return fibArray[nth - 1];
  //Use an array
  //Each position of array marks fibonacci number
  //Add a further number until array length =< nth
  //Return array[nth - 1]
  //current position
  //array.length - 2 + array.length - 1

 }

 fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050