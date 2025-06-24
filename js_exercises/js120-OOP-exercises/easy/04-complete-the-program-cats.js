class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Cat extends Pet {
  constructor(name, age, furPattern) {
    super(name, age);
    this.furPattern = furPattern;
  }

  info() {
    return `My cat ${this.getName()} is ${this.getAge()} years old and has ${
      this.getFurPattern()
    } fur.`;
  }

  getFurPattern() {
    return this.furPattern
  }

}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());


/**Output should be:
 * My cat Pudding is 7 years old and has black and white fur.
My cat Butterscotch is 10 years old and has tan and white fur.
 */