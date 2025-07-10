let obj = {
  _prop: 5,
  get prop() {
    let hints = ['I am above 1', 'I am below 6', 'Base 10 makes me feel even'];
    console.log(hints[(Math.floor(Math.random() * hints.length))]);
    return `I am higher than ${Math.random() * this._prop}`;
  },
  set prop(a) {
    console.log(`You've guessed ${a}`);
    if (a === this._prop) {
      console.log('Correct! The number was ', this._prop);
      console.log('Generating new number...');
      this._prop = Math.floor(Math.random() * (a + 3));
    }
  }
}

console.log(obj.prop);
console.log(obj._prop);


obj.prop = 5;
console.log(obj.prop);
console.log(obj);

class Thing {
  #b = 0;
  #c = 3;

  constructor(a, b) {
    this.a = a;
    this.#b = b;
  }

  get privateB() {
    return this.#b;
  }

  set privateB(val) {
    console.log('Private #b set to', val);
    this.#b = val;
  }

  changePrivateB(num) {
    this.#b = num;
    console.log(`this.#b = ${this.#b}`);
  }

  get privateC() {
    return this.#c;
  }

  set privateC(val) {
    this.#c = val;
  }

}

class Thang extends Thing {
  #meep;

  constructor(a, b) {
    super(a, b);

    this.#meep = 'moop';
    }


    get meep() {
      return this.#meep;
    }

  }

let thong = new Thing(1, 2);
let thang = new Thang(3, 4);
console.log(thong.privateB);
thong.privateB = 5;
thong.changePrivateB(1);
console.log(thong.privateB);
console.log(thong.privateC);


console.log(thang.privateB);

thang.privateC = 5;

Object.defineProperty(thang, 'hi', {value: 4});
console.log(Object.getOwnPropertyNames(thang));
console.log(thang);
console.log(thang.meep);

console.log(Object.getOwnPropertyNames([]));



let myObj = {
  hi: 'hello there',
  '1': 'hola',
  funky() {
    console.log(this.hi);
  },
  fanky() {
    console.log(this['1']);
  }
}


myObj.funky();
myObj.fanky();

let myArr = ['hi1', 'hi2', 'hi3', myObj.fanky];

myArr[3]();

// myArr.forEach(el => {console.log(this[el - 1])});

let str = 'hello';
console.log(Array.prototype.every.call(str, char => char > 'a')); //true