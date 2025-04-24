function regularApproach() {
function createCar(make, fuelLevel, engineOn) {
    return {
        'make': make,
        'fuelLevel': fuelLevel,
        'engineOn': engineOn,

        drive() {
            this.fuelLevel -= 0.1
        },
        startEngine() {
            this.engineOn = true;
        },
        stopEngine() {
            this.engineOn = false;
        },
        refuel(percent) {
            if (this.fuelLevel + (percent / 100) <= 1) {
                this.fuelLevel+= (percent / 100)
            } else this.fuelLevel = 1;
        }
    }
    }
    
    let raceCar1 = createCar('BMW', 0.5, false);
    raceCar1.drive();
    
    let raceCar2 = createCar('Ferrari', 0.7, true);
    raceCar2.drive();

    let raceCar3 = createCar('Jaguar', 0.4, false);

    console.log(raceCar1, raceCar2, raceCar3);
}
function constructorApproach() {
//Constructor function approach
function createCar(make, fuelLevel, engineOn) {
    this.make = make;
    this.fuelLevel = fuelLevel
    this.engineOn = engineOn;

    this.drive = () => {
        this.fuelLevel -= 0.1
    }
  }
  
  let raceCar1 = new createCar('BMW', 0.5, false);
  raceCar1.drive();
  
  let raceCar2 = new createCar('Ferrari', 0.7, true);
  raceCar2.drive();

  console.log(raceCar1, raceCar2);
}

regularApproach();
// constructorApproach();