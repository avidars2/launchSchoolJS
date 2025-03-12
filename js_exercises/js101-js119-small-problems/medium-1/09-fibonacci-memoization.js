

let fibArray = [1, 1];
//If fibArray length === nth, access fibArray[nth - 1] value

function fibonacci(nth) {
  if (nth === 2 || nth === 1) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
 }

 function fibonacci(nth) {
  let fibArray = [1, 1];

  while (fibArray.length <= nth) {
    let fibArrayLen = fibArray.length;
    fibArray.push(fibArray[fibArrayLen - 1] + fibArray[fibArrayLen - 2]);
  }

  console.log(fibArray[nth - 1]);
  return fibArray[nth - 1];

 }