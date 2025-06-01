let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  // Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.

}

Dog.prototype.purr = function() {
  console.log(`${this.weight} moo!`);
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'
maxi.purr(); //While prototype is set to 'DogPrototype', this method
////is unusable

console.log(Dog.prototype.constructor);

function circularPrototype(num) {
  if (num > 0) {
  console.log(circularPrototype.prototype.constructor(num - 1));
  }

  return num;
}

circularPrototype(5);