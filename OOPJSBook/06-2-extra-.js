function Mammal(name) {
  this.name = name;
}

Mammal.prototype.getName = function() {
  console.log(this.name);
}

let smallMammal = new Mammal('bill');

smallMammal.getName();

console.log(Object.getPrototypeOf(smallMammal) === Mammal.prototype);
console.log(Object.keys(smallMammal));

function Animal(name, type) {
  Mammal(name);
  this.type = type;
}

Animal.prototype = Object.create(Mammal.prototype);

Animal.prototype.bite = function() {
  console.log(`The ${this.type} bites!`);
}

let smallAnimal = new Animal('Tiger');

smallAnimal.bite();
smallAnimal.getName();

console.log(smallAnimal instanceof Mammal);
console.log(smallAnimal instanceof Animal);
