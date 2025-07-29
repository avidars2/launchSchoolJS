let p = console.log;

// function divisors(num) {
//   //per argument
//   //return new array containing all divisors
//   //divisor: integer that divides evenly into num
//   //iterate through each number and divide by argument
//   //if no remainder, push to array

//   if (num === 1) return [1];

//   let divisorArray = [];

//   if (num % 2 === 0){
//     divisorArray.push(1);
//     for (let div = 2; div < Math.ceil(num / 2); div++) {
//       if (num % div === 0) divisorArray.push(div);
//     }

//     divisorArray.push(num);
//   }

//   if (num % 2 === 1) {
//     if (num % 3 !== 0) {
//       for (let div = 1; div <= Math.ceil(num / 3); div+= 2) {
//         if (num % div === 0) divisorArray.push(div);
//       }
//     } else {
//       for (let div = 1; div <= Math.ceil(num / 2); div+= 2) {
//         if (num % div === 0) divisorArray.push(div);
//       }
//     }
//     divisorArray.push(num);
//   }


//   return divisorArray;
// }

function divisors(num) {
  let divArr = [1];
  let limit = Math.sqrt(num);
  let sort = (a, b) => a - b;
  let removeDupes = (num) => !divArr.includes(num);

  if (num === 1) return divArr;

  for (let start = 2; start <= limit; start++) {
    if (num % start === 0) divArr.push(start);
  }

  return divArr.concat(divArr.map((div) => num / div).filter(removeDupes))
  .sort(sort);
}


p(divisors(1));          // [1]
p(divisors(7));          // [1, 7]
p(divisors(12));         // [1, 2, 3, 4, 6, 12]
p(divisors(98));         // [1, 2, 7, 14, 49, 98]
p(divisors(100));         // [1, 2, 7, 14, 49, 98]

// This may take a minute or so to run
p(divisors(9995000429)); // [1, 99961, 99989, 9995000429]