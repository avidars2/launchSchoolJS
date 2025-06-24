class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];

  }

  numberOfPets() {
    return this.pets.length;
  }

  addPet(pet) {
    this.pets.push(pet);
  }
  removePet(pet) {
    let petToRemove = this.pets.findIndex(animal => animal.name === pet.name);
    console.log(petToRemove);
    if (petToRemove === -1) return;
    this.pets.splice(petToRemove, 1); 
  }
  getPetList() {
    return this.pets;
  }

}

class Shelter {
  constructor() {
    this.log = {};
    this.pets = [];
    this.shelter = new Owner('The Animal Shelter');
  }
  adopt(owner, pet) {
    owner.addPet(pet);
    this.getShelter().removePet(pet);
    this.updateLog(owner, pet);
  }

  getShelter() {
    return this.shelter
  }

  housePet(pet) {
    let shelter = this.getShelter();
    shelter.addPet(pet);
    this.updateLog(shelter, pet);
  }

  updateLog(owner, pet) {
    if(!this.log[owner.name]) {
      this.log[owner.name] = [];
    }
    this.log[owner.name].push(pet);
    if (owner.name !== this.getShelter().name) {
      this.log[this.getShelter().name] = this.log[this.getShelter().name].filter(pets => {
        return pets.name !== pet.name;
      })
    }
  }

  getLog() {
    return this.log;
  }

  printAdoptions() {
    let log = this.getLog();

    for (let owners in log) {
      console.log(`${owners} has ${owners === this.shelter.name ? 'the following unadopted' : 'adopted the following'} pets:`);
      log[owners].forEach(pet => {
        console.log(pet.info());
      })
      console.log(`\n`);
    }

  }
}

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  goToShelter(shelter) {
    shelter.housePet(this);        
  }

  info() {
    return `a ${this.type} named ${this.name}`
  }

}



let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let fish         = new Pet('fish', 'fish');
let cheetah      = new Pet('cheetah', 'Jim');



let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();

[butterscotch, pudding, darwin, kennedy, sweetie, molly, chester, fish, cheetah].
forEach(pet => pet.goToShelter(shelter));
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

