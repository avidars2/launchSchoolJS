{//1
  /**
   * Given the following three objects, 
   * create an object factory that can eliminate 
   * the code duplication:
   */

function createFruit(name, color) {
  return {
    name,
    color,
    isRipe() {
      return `This ${this.name} is ripe`
    },
    describe() {
      return `This ${this.name} is ${this.color}`
    }
  }
}

let apple = createFruit('Apple', 'Red');
let banana = createFruit('Banana', 'Yellow');
let blackberry = createFruit('Blackberry', 'Black');

console.log(
  apple.color,
  banana.isRipe(),
  blackberry.describe(),
)

{ //Original:
let apple = {
  name: 'Apple',
  color: 'Red',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};

let banana = {
  name: 'Banana',
  color: 'Yellow',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};

let blackberry = {
  name: 'Blackberry',
  color: 'Black',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};
}

}

{//2
  /**
   * This exercise re-examines exercise 4 from the 
   * previous chapter. In that exercise, you wrote a 
   * constructor function to instantiate smartphone 
   * objects. In this exercise, we'll 
   * rewrite that constructor as an object factory.
   */

  /**
   * Write a factory function that creates objects that 
   * represent smartphones. Each smartphone should have a 
   * brand, model, and release year. Add methods to check 
   * the battery level and to display the smartphones's 
   * information. Create objects that represent the 
   * following two smartphones:
Brand	Model	Release Year
Apple	iPhone 12	2020
Samsung	Galaxy S21	2021

   */
}

function createPhone(brand, model, releaseYear) {
  return {
    brand,
    model,
    releaseYear,
    battery: 100,
    checkBattery() {
      return `The battery is at ${this.battery}%`;
    },
    displayInfo() {
      return `Brand: ${this.brand}, Model: ${this.model}, Release: ${this.releaseYear}`;
    }
  }
}

let iPhone = createPhone('Apple', 'iPhone 12', '2020');
let galaxy = createPhone('Android', 'Galaxy S21', '2021');

console.log(
  iPhone,
  galaxy.checkBattery(),
  iPhone.displayInfo(),
)

{//3
  /**
   * Create an object factory that returns objects representing 
   * musical instruments. Each instrument should have a 
   * name and a type. Users of these objects should be able 
   * to play the instrument and show its type. Use the 
   * factory function to create three instruments:

A cello is a string instrument.
A flute is a wind instrument.
A drum is a percussion instrument.

   */

}

function createInstrument(name, type) {
  return {
    name,
    type,
    play() {
      return `We are playing a tune on this ${this.name}`
    },
    showType() {
      return `This ${this.name} is a ${this.type} instrument`;
    }
  }
}

let violin = createInstrument('violin', 'string');
console.log(violin.play());     // We are playing a tune on this violin
console.log(violin.showType()); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
console.log(flute.play());      // We are playing a tune on this flute
console.log(flute.showType());  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
console.log(drum.play());       // We are playing a tune on this drum
console.log(drum.showType());   // This drum is a percussion instrument