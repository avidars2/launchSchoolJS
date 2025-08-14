// let myValue = true;

// function checkValue() {
//   if (myValue) {
//     function getValue() {
//       return "It's true!";
//     }
//   } else {
//     function getValue() {
//       return "It's false!";
//     }
//   }

//   if (true) {
//     function getValue() {
//       return "It's gravy!";
//     }
//   }

//   return getValue();
// }

// console.log(checkValue());

// (function printHi() {
//   console.log('hi');
// })();

// let printHey = function() {
//   console.log('hey');
// }();


// const makeUniqueId = (function() {
//   let count = 0;
//   return function() {
//     ++count;
//     return count;
//   };
// })();

// makeUniqueId(); // => 1
// makeUniqueId(); // => 2
// makeUniqueId(); // => 3

// function MakeStuff(b) {
//   this.a = 1;
//   this.b = b;
// }

// MakeStuff.prototype.hi = () => {console.log('hi')};

// class SpecificStuff extends MakeStuff {
//   constructor() {
//     super(5);
//   }
//   heyHi() {
//     console.log('hey');
//     this.hi();
//   }
// }

// let obj = new SpecificStuff();
// console.log(obj.a, obj.b); //logs 1 5
// obj.heyHi(); //logs hey \n hi

// setTimeout(() => {console.log('3: This will run in at least 3 seconds')}, 3000);

// setTimeout(() => {
//   console.log('1: This will run in at least 1 second');
//   setTimeout(() => {console.log('2: This will run in at least 1.5 seconds')}, 500)

// }, 1000)

// let interval = setInterval((() => {let x = 10; return () => {console.log(`'Interrupting bananna' will stop in ${--x}`)}})(), 500);
// console.log(interval);
// setTimeout(() => clearInterval(interval), 5000);
// // setTimeout(() => {let x = 10000000000; while(x > 0) {x--}}, 4500);
// console.log(clearInterval());

async function timerTest(params) {
  let x = await setTimeout(() => 5, 100);
  return x;
}

setTimeout(() => {
  setTimeout(() => {console.log(setTimeout(() => 5, 100))}, 200);
})