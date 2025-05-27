function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
}

function Mammal(name, hasFur) {
  this.name = name;
  this.hasFur = hasFur;
}

Mammal.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`);
}

function Dog(name, hasFur, breed) {
  this.name = name;
  this.hasFur = hasFur;
  this.breed = breed;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} the ${this.breed} ` +
              'is barking.');
}

Object.setPrototypeOf(Dog.prototype, Mammal.prototype);
Object.setPrototypeOf(Mammal.prototype, Animal.prototype);


let myDog = new Dog('Rex', true, 'German Shepherd');
myDog.eat();    // Rex is eating.
myDog.sleep();  // Rex is sleeping.
myDog.bark();   // Rex the German Shepherd is barking.

console.log(myDog instanceof Mammal);
console.log(myDog instanceof Object);