// let c = 5;
// function a() {
//   let box = {
//     b: 1
//   }

//   if (c === 5) return () => {return box.b + 1 + c};
//   if (c !== 5) {
//     box.b = 2;
//     return () => {return box.b + 1 + c};
//   }
// }
// {

//   let meep = a;
//   meep = meep();
//   console.log(meep());
//   c = 7;
//   let moop = a;
//   moop = moop();
//   console.log(moop());
//   console.log(meep());
  
// }


function outer() {
  let a = [1, 2, 3];

  function inner1() {
    let a = '2';
    return () => a[0];
  }

  let array = inner1();

  console.log(array());
  a[0] = 2;
  console.log(array());
}

// outer();

function makeGenerator() {
  let str = '';

  function addStuff() {
    const randomIdx = () => Math.floor(Math.random() * 4)
    function addNum() {
      str += [1,2,3,4][randomIdx()];
      return str;
    }

    function addChar() {
      str += ['a','b','c','d'][randomIdx()];
      return str;
    }

    return [addNum, addChar];
  };

  return addStuff;

}

let [addNum, addChar] = makeGenerator()();

// console.log(addNum());
// console.log(addChar());
// console.log(addChar());
//Will this throw an error?
//What could the output look like?



function greetName(greeting, name) {
  return greeting + ' ' + name;
}

function sayGreetingFirst(name) {
  return function(greeting) {
    return greetName(greeting, name);
  }

}

let greetAvi = sayGreetingFirst('Avi');
console.log(greetAvi('Hi'));


/**
 * A
 */


let code = {
  code: [],
}


function addSecondContext(context) {
  return function preContextualized(el, idx, arr) {
    return iterateWithDoubleContext.call(this, el, idx, arr, context);
  }
}
function iterateWithDoubleContext(el, idx, arr, secondContext) {
  // console.log(this);
  secondContext.push(el + idx);
  secondContext.push(this.arr2[Math.floor(Math.random() * (this.arr2.length))]);
}



// let obj2 = {
//   arr3: ['x', 'y', 'z'],
//   arr4: [98, 99, 100],
// }

let obj = {
  arr1: [1, 2, 3],
  arr2: ['a', 'b', 'c'],
  makeCode() {
    this.arr1.forEach(codeMaker, this);
  }
}

let codeMaker = addSecondContext(code.code);

obj.makeCode();
console.log(code.code);
