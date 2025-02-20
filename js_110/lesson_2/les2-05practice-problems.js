{//Practice Problem 1
  
  let arr = ['10', '11', '9', '7', '8'];

  //input: arr
  //Output: arr sorted descending

  arr.sort((a, b) => Number(b) - Number(a));

  // console.log(arr);


}

{//Practice Problem 2
  let books = [
    { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
    { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
    { title: 'Ulysses', author: 'James Joyce', published: '1922' },
    { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
  ];

  //input: books object array
  //output: sorted array, ascending based on year

  //Iterate through object, 
  //Read published date as Numbers
  //Sort ascending based on that Number

  books.sort((a, b) => Number(a.published) - Number(b.published));

  // console.log(books);
}

{//Practice Problem 3
  let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

let access = [
  arr1[2][1][3],
  arr2[1]['third'][0],
  arr3[2]['third'][0][0],
  obj1['b'][1],
  Object.keys(obj2.third)[0]
]

// console.log(access);
}

{//Practice Problem 4
  let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
arr2[2] = 4;
obj1.first[2][0] = 4;
obj2.a.a[2] = 4;

}

{//Practice Problem 5
  let munsters = {
    Herman: { age: 32, gender: 'male' },
    Lily: { age: 30, gender: 'female' },
    Grandpa: { age: 402, gender: 'male' },
    Eddie: { age: 10, gender: 'male' },
    Marilyn: { age: 23, gender: 'female'}
  };

  //input: munsters object
  //output: Total age of male members
  //Check for gender
  //IF male Check for age
  //Add age to total

let maleAgeTotal =  Object.values(munsters).reduce((age, obj) => {
    if (obj['gender'] === 'male') {
      return age + obj['age'];
    } else return age
  }, 0)

  // console.log(maleAgeTotal)
}

{//Practice Problem 6
  let munsters = {
    herman: { age: 32, gender: 'male' },
    lily: { age: 30, gender: 'female' },
    grandpa: { age: 402, gender: 'male' },
    eddie: { age: 10, gender: 'male' },
    marilyn: { age: 23, gender: 'female'}
  };

  //Input: Munsters object
  //Output: String containing key as name, age value
  //and gender value

  //Get keys names
  //Get key's value object values
  //Iterate through keys
  //Per key, get key name
  //Per key, get age and gender
  //Append to string

  // Object.entries(munsters).forEach(subArr => {
  //   console.log(`${subArr[0]} is a ${subArr[1].age}-year-old ${subArr[1].gender}.`)
  // })
}

{//Practice Problem 7
  let a = 2; //Primitives are immutable
let b = [5, 8]; //Objects are mutable
let arr = [a, b]; //Copy of a value is index 0, reference is index 1

arr[0] += 2; //Re-assigns index 0 to a value +2, so 4
arr[1][0] -= a; //a was not re-assigned so this subtracts 8 by 2

//Output of arr === [4, [3, 8]]
//a === 2
//b === [3, 8]

//

}

{//Practice Problem 8
  let obj = {
    first: ['the', 'quick'],
    second: ['brown', 'fox'],
    third: ['jumped'],
    fourth: ['over', 'the', 'lazy', 'dog'],
  };

  //I: obj
  //O: All Vowels from strings in arrays

  Object.values(obj).forEach(strArr => {
    strArr.forEach(str => {
      let vowelsOfStr = ''
      str.split('').forEach(letter => {
        let vowels = ['a','e','i','o','u'];
        if (vowels.includes(letter)) {
          vowelsOfStr+=letter;
        }
      })
      // console.log(`${str} contains vowels: ${vowelsOfStr}`)

    })
  })
}

{//Practice Problem 9
  let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

  //in: arr
  //out: new array, same structure, values in each sub-arr ordered
  //alphabeticlly or numerically, ascending

  //Each subarray will need to be copied
  //Each subarray will need to ordered based on data within
  //Each subarray will need to be appened to a new array

  //loop through outer array, iterating through sub-arrays
  //Per sub-array create a copy
  //iterate through elements of sub-array
  //If element is a Number datatype, sort by Number
  //If element is a string data type, sort alphabetically 

  let newArr = arr.map(subArr => {
    if (typeof subArr[0] === 'number') {
      return subArr.slice().sort((a, b) => a - b);
    } else {
      return subArr.slice().sort();
    }
  })

  // console.log(newArr, arr);

}

{//Practice Problem 10
  let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

  let newArr = arr.map(subArr => {
    return subArr.slice().sort((a, b) => b - a);

    if (typeof subArr[0] === 'number') {
      return subArr.slice().sort((a, b) => b - a);
    } else {
      return subArr.slice().sort().reverse();
    }
  })

    // console.log(newArr);
    // console.log(arr);

  
}

{//Practice Problem 11
  let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

  //I: arr
  //O: new arr but all values incremented by 1

  //Map method must be used
  //We need to copy the objects and increment the copy
  
  let newArr = arr.map(obj => {
    let newObj = JSON.parse(JSON.stringify(obj));
    for (let key in newObj) {
       newObj[key] += 1;
    }
    return newObj;

  })

  // console.log(newArr)

  let newArr2 = arr.map(obj => {
    // let newObjArr = Object.entries(obj)
    // .map(keyValueArr => {
    //   keyValueArr[1] += 1;
    //   return keyValueArr;  
    // })
    // console.log(newObjArr)    

    let newObj = {}

    for (let key in obj) {
      newObj[key] = obj[key] + 1;
    }
    return newObj


    //[[[b, 3], [c, 4]], [[a, 1]]]
  })
  // console.log(newArr2)

}

{//Practice Problem 12
  const arr = [
    ['b', 'c', 'a'],
    ['blue', 'black', 'green'],
    { b: [2, 4, 6], c: [3, 6], d: [4] },
    { e: [8], f: [6, 10] },
  ];

  let newArr = arr.map(obj => {
    if (Array.isArray(obj)) {
      return obj.slice()
    }
    else {
      let newObj = {}
      for (let key in obj) {
        newObj[key] = obj[key].slice();
      }
      return newObj;
    }
  })

  let newArr2 = arr.map(obj => {
    let newValue = JSON.parse(JSON.stringify(obj));
    return newValue;
  })

  let newArr3 = JSON.parse(JSON.stringify(arr));

  arr[0][0] = 'dd'
  arr[2].b = 5
  // console.log(arr)
  // console.log(newArr);
  // console.log(newArr2);
  // console.log(newArr3);
}

{//Practice Problem 13
  const truthiness = {
    falsy: [ null, undefined, '', false, NaN, 0 ],
    truthy: ['everything else...']
  };
  let newTruth = {};
  let newTruth2 = {};
  for (let keys in truthiness) {
    newTruth[keys] = truthiness[keys].slice()
    newTruth2[keys] = [...truthiness[keys]];
  }

  // console.log(newTruth);
  // console.log(newTruth2);
}

{//Practice Problem 14
  let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

  let newArr = arr.map(el => {
    return el.filter(num => num % 3 === 0);
  })

  //Loop through sub-arr
  //Find all multiples of 3
  //find will stop at first multiple
  //So we need to continue from previous point
  //Then repeat find
  //Repeat steps until end of array

  // console.log(newArr)


}

{//Practice Problem 15
  let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

  function sortNumArrAscending(arr, sortOrder='ascending') { 
    for (let currentIdx = 0; currentIdx < arr.length; currentIdx++) {
      let lowestNum = arr[currentIdx];
      let lowestIndex = currentIdx;
      let currentData = {idx: currentIdx, num: arr[currentIdx]}
      for (let startingIdx = currentIdx; startingIdx < arr.length; startingIdx++) {
        if ((lowestNum < arr[startingIdx]) && sortOrder === 'descending') {
          lowestNum = arr[startingIdx];
          lowestIndex = startingIdx;
          continue
        }
        if (lowestNum > arr[startingIdx] && sortOrder === 'ascending') {
          lowestNum = arr[startingIdx];
          lowestIndex = startingIdx;
        }      
      }
      arr[currentData.idx] = lowestNum;
      arr[lowestIndex] = currentData.num
    }
    console.log(arr)
  }

  arr.sort((arrA, arrB) => {
    let arrATotal = 0;
    let arrBTotal = 0;
    arrA.forEach(num => {
      if (num % 2 === 1) arrATotal += num;
    });
    arrB.forEach(num => {
      if (num % 2 === 1) arrBTotal += num;
    });

    return arrATotal - arrBTotal
  })

  // console.log(arr);


  //Loop through array, starting with first element and index
  //Compare first element with remaning until lower num is found
  //Once found, save index of lower number and proceed through loop
  //Repeat until end of loop
  //After, swap current element with lowest number element position
}

{// Practice Problem 16
  let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
  };

  //Input obj
  //Output: Array containing colors of fruits and sizes of vegetables

  //Colors are retuned in array of capitalized strings
  //Sizes are returned in Uppercase strings
  //Object will be iterated through

  //Values of object are being evaluated for theire
  //type
  //depending on type, the modified colors or size is returned

  //Turn object to array
  //Iterate through array
  //For each value in array:
  //Evaluate values, ignore key
  //If type is vegetable,  return size uppercase
    //Append to new array
  //If type is fruit, return colors capitalized
   //Append to new array

  let newArr = Object.entries(obj).map(subArr => {
    let produceDetails = subArr[1];
    
    if (produceDetails.type === 'fruit') {
      //Input object with colors key
      //colors --> array of strings
      //return array of strings capitalized
      return produceDetails.colors.map(color => {
        return color = color[0].toUpperCase() +
        color.slice(1);
      })
    }
    if (produceDetails.type === 'vegetable') {
      //Input object with size key
      //size --> string
      //return string capitalized

      return produceDetails.size.toUpperCase();
    }
    /**
     * [[key, value], ['grape', {}]]
     */
  })

  // console.log(newArr)
}

{// Practice Problem 17
  let arr = [
    { a: [1, 2, 3] },
    { b: [2, 4, 6], c: [3, 6], d: [4] },
    { e: [8], f: [6, 10] },
  ];

  //I: array of objects with each object's key referencing an array
  //O: An array which contains only the objects where all numbers are even

  //some/all
  //Iterate through objects in array
  //Iterate through arrays in objects
  //Iterate through elements of arrays
  //Check if even, if so return object which is eve
  //Return new object or copy?

  let newArr = arr.filter(obj => {
    return Object.values(obj).every(subArr => {
      return subArr.every(el => {
        return (el % 2 === 0)
      })
    })
  })
  let newArr2 = arr.filter(obj => Object.values(obj).every(subArr => subArr.every(num => num % 2 === 0)));

  // console.log(newArr);
  // console.log(newArr2);
}

{// Practice Problem 18
  let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//In: arr
//O: New object, key is first item in each sub-arr, value is second
//Essentially re-create fromEntries

//Explicits:
//Define a new object
//Key is first item in each sub-array
//Value is second item in each sub-array
//We are gievn an array of sub-arrays as input

//Imp
//If an object is in the sub-array, that becomes a value
//We'll need to iterate through array, and sub-array
//Index 0 of sub-array will become keys
//Index 1 will be values


//Clarifying questions
//Are object values deep copied or shallow copied?
//Will all sub-arrays only contain 2 elements?

//Diagram/Test cases: [['a', 1]] --> {a: 1}
//[['a', 1], ['b', {c: 3}]] --> {a: 1, b: {c: 3}}

//Data structures:
//[[key, value]] --> {key: value}
//Iterate through outside array to inner array
//[key, value] --> object[key] === value

//Algorithm
//Iterate through outer array
//New object = {}
//For each subarray, assign property/key from first element into
  //new object
//Assign that key second elements value
//Repeat until end of outer array

let newObject = {};
arr.forEach(subArr => {
  newObject[subArr[0]] = subArr[1];
})

// console.log(newObject);


}

{//Practice Problem 19

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let newMunst = JSON.parse(JSON.stringify(munsters));
for (let key in newMunst) {
  newMunst[key] = Object.freeze(newMunst[key]);
}

// console.log(newMunst);
// newMunst.herman.age = 5
// console.log(newMunst);

}

{//Practice Problem 20
  /**
   * UUID identifier useful for distinct systems
   * to create a unique item and label them without
   * significant risk of matching IDs
   * 
   * UUIDs consist of 32 hexadecimal characters
   * (0-9 and a-f)
   * represented as a string
   * 
   * Broken into an 8-4-4-4-12 pattern
   * 
   * Create a function that takes no arguments
   * and returns a string that contains a UUID
   * 
   * 
   */

  //Output: UUID string (each character is either 0-9, or a-f inclusive)
  //Explicits
  //UUID is hexadcimal
  //Hexadecimal is any character between 0-9 inclusive, or a-f inclusive
  //It is broken into a 8-4-4-4-12 pattern
  //Write a function that takes no arguments
  //Write a function that returns a UUID as a string

  //Implicits
  //It seems that a random UUID must be generated each time
  //A way to generate random characters is needed
  //A way to segment them is needed
  //A way to join them into a string is needed

  //Diagramming
  //segment 2: 'aaaa' would be valid
  //'aaaaa' would not be valid
  //'a2b1' would be valid

  //CQ: Can I just return a written UUID?
  
  //Data structures
  //Array to hold allowed values
  //Array could hold generated characters and join into a string

  //Alg
  //1. Generate random character
  //2. Append random character into sections/Build array out of them
  //3. Join arrays into strings, then join strings separated by '-'
  //Return string

  //Ideas
  //Function with input for character length, returns new array

  function randomChar() {
    const allowedValues = [...'0123456789abcdef'.split('')];
    let selectChar = Math.floor(Math.random() * allowedValues.length);
    return allowedValues[selectChar];
  }

  function buildCharArray(characters) {
    let charArray = [];

    while (charArray.length < characters) {
      charArray.push(randomChar());
    }
    return charArray;
  }

  function UUIDGen() {
    let sections = [8 ,4, 4, 4, 12];
    let UUIDPieces = [];
    sections.forEach(num => UUIDPieces.push(buildCharArray(num).join('')))
    
    let UUID = UUIDPieces.join('-');

    return UUID;
  }

  // console.log(UUIDGen())


}

{
  function scream(message, helper) {
    const shout = () => message.toUpperCase();
  
    return helper(shout());
  }
  
  const exclamate = str => str + "!!!";
  
  const foo = ["heLp", "Boo", "arGH", "Oh no"];
  const FOO = foo.map(word => scream(word, exclamate));

  /**
   * Higher order functions:
   * scream
   *  Scream is a higher order function because it takes a functoin
   *  as an argument and calls that function
   * map
   *  Map is a higher order function because it takes a function as
   *  an argument and calls that function
   * 
   * Callbacks:
   * shout ISN'T a callback because the evaluation of shout
   *   being called is what is passed as the argument
   * 
   * exclamate is a callback function because it is a function
   *   which is passed as an argument into another function 
   * 
   * anonymous function passed into map
   *  This is a callback because it is a function passed
   *  as an argument into a higher order function map
   */
}