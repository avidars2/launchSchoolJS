//Exercise 1
class SmartPhone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.battery = 100;
  }

  checkBattery() {
    return `Battery: ${this.battery}%`;    
  }

  displayInfo() {
    return `${this.brand}, ${this.model}, ${this.year}`
  }
}

let iPhone = new SmartPhone('Apple', 'iPhone12', '2020');
let galaxy = new SmartPhone('Samsung', 'Galaxy S21', '2021');

console.log(
  iPhone,
  galaxy.checkBattery(),
  iPhone.displayInfo(),
)

//Exercise 2
class Dog {
  //example code
}

// let boo = {};
let boo = new Dog;

console.log(boo instanceof Dog); //Evaluates to true if instance of Dog, false otherwise

//Exercise 3

class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
    }

  accelerate() {
    console.log(`Accelerating!`);
  }

  decelerate() {
    console.log(`Decelerating!`);
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log('BEEP!!');
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log('Dropping anchor!');
  }

}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log('Taking off!');
  }

  land() {
    console.log('Landing!');
  }
}

let genericVehicle = new Vehicle('blue', 8000);
genericVehicle.accelerate(),
console.log(
  genericVehicle.color,
)

let ferrari = new Car('red', 300, 'AZN');
ferrari.accelerate(),
console.log(
  ferrari.color,
)
ferrari.honk();

let voyagerOfSea = new Boat('white', 800000, 'Florida');
console.log(voyagerOfSea.homePort);

let airbus = new Plane('black', 500000, 'Jet Blue');
airbus.land();
airbus.takeOff();
console.log(airbus.weight);

//Exercise 4

console.log(ferrari instanceof Vehicle); //True
console.log(voyagerOfSea instanceof Vehicle); //True

console.log(ferrari instanceof Car); //True

console.log(voyagerOfSea instanceof Car); //false