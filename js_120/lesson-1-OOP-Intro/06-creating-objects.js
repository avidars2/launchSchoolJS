let rlSync = require('readline-sync');
let raceCar = {
    make: 'BMW',
    fuelLevel: 0.5,
    engineOn: false,
  
    startEngine: function() {
      raceCar.engineOn = true;
    },
  
    drive: function() {
      raceCar.fuelLevel -= 0.1;
    },
  
    stopEngine: function() {
      raceCar.engineOn = false;
    },
  
    refuel: function(percent) {
      if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
        raceCar.fuelLevel += (percent / 100);
      } else {
        raceCar.fuelLevel = 1;
      }
    },
    turnRight() {console.log('steered right')},
  };

  let x = Object.assign({}, raceCar);



  while (true) {
    console.log(x);
    console.log(raceCar);
    let action = rlSync.question(`What do you want to do with your raceCar?: `);
    if (action.startsWith('sta')) x.startEngine();
    if (action.startsWith('sto')) {
        x.stopEngine();
        break;
    }
    if (action.startsWith('d')) x.drive();
    if (action.startsWith('r')) {
        let refuelAmount = rlSync.question(`How much to refuel? Current fuel: ${x.fuelLevel}\n`);
        raceCar.refuel(Number(refuelAmount));
    } if (action.startsWith('t')) x.turnRight();


  }