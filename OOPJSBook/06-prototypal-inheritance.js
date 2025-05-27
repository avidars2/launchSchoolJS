
class Animal {
  constructor(type) {
    this.type = type;

  }

  eat() {
    console.log('Nom nom nom');
  }
}
class Cat extends Animal{
  constructor(name, color) {
    super('cat');
    this.name = name;
    this.color = color;
  }

  whoAmI() {
    console.log(`My name is ${this.name}.`,
                `\nI am a ${this.color} ${this.type}.`);
  }
}

console.log(Cat.prototype.hasOwnProperty('whoAmI'));

let meep = new Cat();

let meepProto = Object.getPrototypeOf(meep);

console.log(Object.getOwnPropertyNames(meepProto));
console.log(Object.keys(Cat.prototype)); //Returns an empty array because properties/methods are not enumerable
console.log(Object.getPrototypeOf(Cat));

console.log(Object.getPrototypeOf(Cat.prototype) === Animal.prototype);


class Tests {
  static hi = 5;
  static ho() {
    return 'ayo';
  }
  map = 'hola'
  constructor() {
    this.x = 1;
    this.y = function() {
      console.log('meep');
    }
  }

  meep() {
    this.x += 1;
  }
}

class Toots {
  // static hi = 3;
  static hey() {
    console.log('hey');
    return 'ho';
  }

  constructor() {

  }
}

let moop = new Tests();

console.log(Object.keys(moop));
console.log(Toots.hey());
console.log(Object.getPrototypeOf(Toots) === Function.prototype);
Object.setPrototypeOf(Toots, Tests);

console.log(Toots.hi);
console.log(Toots.ho());

console.log(Object.getPrototypeOf(Toots) === Function.prototype);
console.log(Object.getPrototypeOf(Toots) === Tests);


class SuperClass {
  static b = 1;
  constructor() {
    this.x = 1;
    this.y = function() {
      return 2;
    }
  }

  z() {
    return 3;
  }
}

console.log(SuperClass.b);

let superInstance = new SuperClass();

console.log(Object.keys(superInstance)); //x, y (only properties which the constructor function instantiates the new object with are superInstances 'own' properties)
console.log(superInstance.z());
console.log(Object.getPrototypeOf(superInstance) === SuperClass.prototype); //True because the class prototype is used as the object prototype of the classes instance


class SubClass extends SuperClass {
  static shock = 'zap';
  constructor() {
    super();
    this.a = 4;
  }

  c() {
    return this.a + 1;
  }
}

let subInstance = new SubClass();
console.log(subInstance.c());
console.log(SubClass.b);


console.log(Object.getPrototypeOf(SubClass) === SuperClass);
/**
 * Even though 'c' is technically being invoked through the function prototype of SubClass,
 * the execution context remains bound to the object subInstance refers to.
 * 
 * In a way, the execution context works as it would if 'c' was actually a method of the subInstance
 * object, as normally invoking a method in this way would implicitly bind the execution context to
 * the object which holds the method.
 * 
 */

function hi() {
  return 'bye ;)';
}

let mappy = new hi();

console.log(Object.getPrototypeOf(hi));
console.log(Object.getPrototypeOf(mappy) === hi.prototype);
hi.prototype.byebye = () => 5;
console.log(mappy.byebye()); //Returns 5



let foo = () => console.log('map');

// let moopy = new foo();
// console.log(Object.getPrototypeOf(moopy));
// console.log(Object.getPrototypeOf(moopy) === foo.prototype);


{}

class Animals {
  constructor() {
    this.blood = 'warm';
  }
}

class Cats extends Animals {
  constructor(name) {
    super();
    this.name = name;
  }
}

let cheddar = new Cats();

console.log(cheddar.blood);
console.log(Object.getPrototypeOf(cheddar) === Cats.prototype); //true
console.log(Object.getPrototypeOf(Cats) === Animals); //true
console.log(Object.getPrototypeOf(Cats.prototype) === Animals.prototype); //true
