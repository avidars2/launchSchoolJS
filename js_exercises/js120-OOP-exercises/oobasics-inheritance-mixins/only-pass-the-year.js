class Vehicle {
  constructor(year) {
    this.year = year;
  }

  print5() {
    console.log(5);
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }

  thing() {
    super.print5();
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);
truck1.thing();