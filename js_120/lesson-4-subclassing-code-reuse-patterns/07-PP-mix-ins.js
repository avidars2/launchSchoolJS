/**
 * If we have a Car class and a Truck class, 
 * how can you use the Speed object as a mix-in to make them 
 * goFast? How can you check whether your Car or Truck can now 
 * go fast?


 */
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

let fastCar = new Car();
if ('goFast' in fastCar) fastCar.goFast(); //Executes
if ('goVeryFast' in fastCar) fastCar.goVeryFast(); //Doesn't execute

/**
Ben and Alyssa are working on a vehicle management system. 
Thus far, they have created classes named Auto and Motorcycle 
to represent automobiles and motorcycles. After they noticed 
that the information and calculations performed was common to 
both vehicle types, they decided to break out the commonality 
into a separate class named WheeledVehicle. Their code, thus 
far, looks like this:

 */

class Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class WheeledVehicle extends Vehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.tires = tirePressure;

  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran extends Vehicle {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

let boat = new Catamaran(4, 2, 10, 100);
console.log(boat.range());
console.log('tirePressure' in boat);

let bike = new Motorcycle();
console.log(bike.range());
console.log(bike.tirePressure(1));
bike.inflateTire(1, 35)
console.log(bike.tirePressure(1));