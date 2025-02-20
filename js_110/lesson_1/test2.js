let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruitObj = {};
  for (let key in obj) {
    if (obj[key] === 'Fruit') {
      fruitObj[key] = 'Fruit';
    }
  }
  console.log(fruitObj);
  return fruitObj;
}

function selectFruit2(obj) {
  let fruitObj = {};
  let produceList = Object.keys(obj);

  for (let idx = 0; idx < produceList.length; idx++) {
    let currentProduce = produceList[idx];
    let produceType = obj[currentProduce];

    if (produceType === 'Fruit') {
      fruitObj[currentProduce] = produceType;
    }
  }
  console.log(fruitObj);
  return fruitObj;
}


function doubleNumbers(numbers) {
  //input: numbers array, output: same array with num doubled
  //Input will be an array of nums, double each input
  //explicits: each number of array must be doubled
  //original array should be mutated
  //implicits: we'll have to modify the original array
  //D/S/A
  //[1, 2] --> arr[0] == arr[0] * 2
  //Algo: loop through array, multiply each element by 2

  for (let idx = 0; idx < numbers.length; idx++) {
    numbers[idx] = numbers[idx] * 2;
  }

}


function doubleOddNumbers(numbers) {
  let doubledNumbers = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    if (idx % 2 === 1) {
      doubledNumbers.push(numbers[idx] * 2);
    } else doubledNumbers.push(numbers[idx])
  }
  console.log(doubledNumbers)
  return doubleNumbers;
}

function multiplyNumbers(numbers, multiplier) {
  let multipliedArray = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    multipliedArray.push(numbers[idx] * multiplier);
  }

  return multipliedArray;
}



let [arr] = [[1, 2, 3, 4]]

let newArr = arr.reduce((acc, el) => {
  el % 2 === 1 ? acc.push(el) : true;
  return acc
}, [])

console.log(newArr)
//Reduce has an accumulator parameter which equals the return value of the previous iteration
//If accumulator is not initialized to anything, the accumulator is set to the first element and will begin
//iteration on the second element
//



// let [el1, el2, el3] = ['hi', 'bye'];

// console.log(el1, el2, el3)



// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(multiplyNumbers(myNumbers, 3));

// doubleOddNumbers(myNumbers); // => [ 1, 8, 3, 14, 2, 12 ]
// console.log(myNumbers);

// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);
// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// selectFruit2(produce)
