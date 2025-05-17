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


class GetStuff {
  #midname;
  #nickname;

  constructor(midname, nickname) {
    this.firname = 'meep' //Let's say this was stored as an array initially
    this.lasname = 'monster'
    this.#midname = midname;
    this.nickname = nickname; //this.nickname invokes the setter, 'andy' is passed as an argument
  }

  get names() {
    return [this.firname, this.lasname, this.midname, this.#nickname];
  }
  get name() {
    return this.firname;
  }

  get midname() {
    return this.#midname;
  }
  set nickname(name) {
    this.#nickname = name;
  }
  get nickname() {
    return this.#nickname;
  }
}

let moopObjects = new GetStuff('hi', 'andy');

console.log(moopObjects.names); //['meep'];
moopObjects.name = 5; //ATtempting to re-assign 'meep' to 5
console.log(moopObjects.name); //Still 'meep'



class myClass {
  static #prop = 'hi'
  static classCount = 0;
  static _randomName = 'holaa';
  static #propCall() {
    console.log(this.#prop);
    return this.#prop;
  }
 
  static propCall() {
    return this.#propCall();
  }

  constructor(name) {
    myClass.classCount += 1;
    this.school = 'JS';
    this.name = name;
  }

  get randomName() {
    return myClass._randomName;
  }

  static instancesCreated() {
    return `myClass was invoked ${myClass.classCount} times`;
  }

  whatCourse() {
    return `${this.name} is in ${this.school}`;
  }

  get schoolAndName() {
    return `${this.school} ${this.name}`;
  }
}

let jeremy = new myClass();
console.log(myClass.classCount);
let phil = new myClass();

console.log(myClass.propCall());
console.log(jeremy.randomName);
console.log(myClass.instancesCreated());
