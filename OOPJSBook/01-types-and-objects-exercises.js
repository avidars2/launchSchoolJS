// exercise1();
// exercise2();
// exercise3();
exercise4();
function exercise1() {

function Aircraft(name, fuel, cruisingSpeed) {
    this.name = name;
    this.fuel = fuel;
    this.cruisingSpeed = cruisingSpeed;

    this.takeOff = () => console.log(`${this.name} is Taking off...`);
    this.land = () => console.log(`${this.name} is Landing...`)
}

let cessna = new Aircraft('Cessna 152', '24.5 gallons', '111 knots');

console.log(cessna)

cessna.takeOff();
cessna.land();

//Alternate way:
let cessna152 = {
    fuelCapacity: '24.5 gallons',
    cruisingSpeed: 11,

    takeOff() {
        console.log(`Taking off!`)
    },

    land() {
        console.log(`Landing!`)
    }
    
}

cessna152.takeOff()

/**
 * State: Cessna 152 name, 24.5 gallons fuel, 111 knots cruising speed
 * Behavior: Takeoff and land
 */

}

function exercise2() {

function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;

}

let [neuromancer, doomsday] = [new Book('Neuromancer', 'William Gibson', 1984), new Book('Doomsday Book', 'Connie Willis', 1992)];

console.log(neuromancer, doomsday);

/**
 * Type of objects: Instance objects of 'Book' type
 * Constructor function: 'function Book()'
 * Instance objects: neuromancer, doomsday point to the created instance object references
 */

}

function exercise3() {

function MusicalAlbums(title, artist, releaseYear) {
    this.title = title;
    this.artist = artist;
    this.releaseYear = releaseYear;
}

let thriller = new MusicalAlbums('Thriller', 'Michael Jackson', 1982);
let darkSide = new MusicalAlbums('The Dark Side of the Moon', 'Pink Floyd', 1973);

console.log(thriller, darkSide);

/**
 * Types of objects: MusicalAlbums
 * Constructor function: function MusicalAlbums
 * Instance objects: Instance objects referenced by variable thriller and darkSide
 */

}

function exercise4() {

function SmartPhone(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;

    this.checkBattery = () => console.log('Battery life: 100%');
    this.checkInfo = () => console.log(`Brand: ${this.brand}\nModel: ${this.model}\nRelease Year: ${this.releaseYear}`);
}

let galaxy = new SmartPhone('Samsung', 'Galaxy S21', 2021);
let iPhone = new SmartPhone('Apple', 'iPhone 12', 2020);

console.log(galaxy, iPhone);

galaxy.checkBattery();
galaxy.checkInfo();

}