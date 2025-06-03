//Potential Array.from implementation:

let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];

  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }

  return returnArr;
};

arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3});
// => [ 'a', 'b', 'c' ]

let arrayObj = {0: 'a', 1: 'b', 2: 'c', length: 2}
let arrayObjs = {0: 'a', 1: 'b', 2: 'c'}

let newArr = Array.from(arrayObj);
console.log(newArr);

let newArrs = Array.from(arrayObjs);
console.log(newArrs);



