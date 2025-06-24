// function joinOr(arr, delimiter=",", conjunction="or") {
//   let lastIdx = arr.length - 1;
//   if (arr.length <= 1) return `${arr[0] ?? ''}`
//   if (arr.length === 2) {
//     return arr.join(` ${conjunction} `);
//   } else {
//     return arr.slice(0, lastIdx).
//     join(`${delimiter} `) + `${delimiter} ${conjunction} ${arr[lastIdx]}`;
//   }
// }
// console.log(joinOr([]));
// console.log(joinOr([1]));
// console.log(joinOr([1, 2, 3]));
// console.log(joinOr([1, 2, 3], ';'));
// console.log(joinOr([1, 2, 3], ';', 'and'));

 function getHandValue(cards) {
    /**
     * Evaluate all cards in array
     * --face cards are 10, except A which is 11
     * If total > 21, look for any A and change value to 1,
     * then re-evaluate
     * 
     * return final value
     */

    let cardValue = cards.reduce((total, card) => {
      let faceCards = [...'JQKA'];
      if (faceCards.includes(card)) {
        if (card === "A") {
          return total + 11;
        } else return total + 10;
      } else return total + Number(card);
    }, 0);

    if (cardValue > 21) {
      let aces = cards.filter(card => card === "A").length;

      while(aces > 0) {
        console.log("Ace lowered")
        aces--;
        cardValue -= 10;
        if (cardValue <= 21) break;
      }
    }

    return cardValue;

  }

  let hand = ["A", "5", "A"];
  // console.log(getHandValue(hand));

  let obj = {
    hi: 5,
    hey: function() {
      return 'meep';
    },
    ho() {
      return 'moop';
    }
  }


let jerry = {
  hai() {
    return 'hai';
  }
}
class A {
  constructor() {}

  hi() {
    return 'hi';
  }

}

class B extends A {
  constructor() {
    super();
  }
  ho() {
    return 'ho';
  }
}

class C extends B {
  constructor() {
    super();
  }

}

let see = new C();

// console.log(Object.getPrototypeOf(see) === C.prototype);
// console.log(A.prototype.hasOwnProperty('hi'));
// console.log(B.prototype instanceof A);
// console.log(Object.getPrototypeOf(B.prototype) === A.prototype);
// console.log(see.hi());
// console.log('hi' in see);
// Object.setPrototypeOf(B.prototype, jerry);
// console.log('hi' in see);

function Animal() {}
function Cat() {}
let ani = new Animal();
// Cat.prototype = ani;
Cat.prototype = ani;
let fluffy = new Cat();
console.log(fluffy instanceof Animal);

// console.log(`fluffy[[prototype]] === Cat.prototype`, Object.getPrototypeOf(fluffy) === Cat.prototype);
// Cat.prototype = see;
// console.log(`fluffy[[prototype]] === Cat.prototype after re-assign`,Object.getPrototypeOf(fluffy) === Cat.prototype);
// Cat.prototype = ani;
// console.log(`fluffy[[prototype]] === Cat.prototype after re-assign 2`,Object.getPrototypeOf(fluffy) === Cat.prototype);




function instanceOF(instance, constructor) {
  let proto = Object.getPrototypeOf(instance);
  console.log(proto, constructor.prototype);
   if (constructor.prototype === proto) return true
   if (proto === null) return false;
   return instanceOF(proto, constructor);
}

// console.log(instanceOF(fluffy, Animal));
// console.lo
// console.log(Object.getPrototypeOf(fluffy));
hi = 5;
// console.log(Object.getOwnPropertyNames(global).includes('instanceOF'));
// console.log(hi in global);



// Object.getOwnPropertyNames(global).forEach((n) => console.log(n));

this.hi = 5;

function doSomething() {
  console.log(this === global);
  console.log(Object.getOwnPropertyNames(this));
  return 'hi';
}
console.log(doSomething.call(this));


