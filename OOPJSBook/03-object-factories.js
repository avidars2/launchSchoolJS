function makeObj(name) {
  this.name = name;
  this.speak = function () {
    console.log(`My name is ${this.name}`);
  }
  this.whoAmI = function () {
    console.log(`I was created by ${this.constructor}`)
  }
}

let bob = new makeObj('bob');

bob.speak();
bob.whoAmI();

console.log(`${{}.constructor}`);