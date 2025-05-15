class Foo {
  #privateField;
  #otherPrivate = 5;

  constructor() {
    this.#privateField = 10;
  }

  accessPrivate() {
    return this.#privateField;
  }
  accessOtraPrivate() {
    return this.#otherPrivate;
  }

  #calculatePrivateValues() {
    return this.#privateField + this.#otherPrivate;
  }

  totalPrivateValue() {
    return this.#calculatePrivateValues();
  }

}

let mice = new Foo;

console.log(mice.privateField);
console.log(mice.accessPrivate());
console.log(mice.totalPrivateValue());