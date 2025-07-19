class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    console.log('Vroom')
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    super.startEngine();
    this.startEngine();
  }
  startEngine() {
    console.log('Ready to go!');
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003