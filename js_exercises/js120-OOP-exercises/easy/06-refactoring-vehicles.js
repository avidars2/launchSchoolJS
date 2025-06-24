class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}
class Car extends Vehicle {
  // constructor(make, model) {
  //   super(make, model, 4);
  // }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }

}

let tonka = new Truck('Toyota', 'Brigadier', 80000);

console.log(tonka.getWheels());
console.log(tonka.info());

let car = new Car('Honda', 'Civic', 4);
console.log(car.info());