function Vampire() {} //
/**
 * Function prototype === {}
 * ---
 * Object prototype === Object.prototype
 */
function Bat() {}
Bat.prototype = new Vampire(); //{} {}.__proto__ === Vampire.prototype
Bat.prototype = Object.create(Vampire.prototype);
let vampy = new Bat(); //{}.__proto__ === Bat.prototype --> {}.__proto__ === 'Vampire.prototype'
// console.log(vampy instanceof Vampire);

/**
 * In the above, vampy === an instance of 'Bat', and it's object prototpe is 'Bat.prototype'.
 * 
 * vampy instanceof Bat === true
 * 
 * vampy instanceof Vampire ?
 * 
 * vampy has an object prototype of 'Bat.prototype', and teh constructor is 'Bat', therefore vampy is an instance of 'Bat'
 * 
 * Bat.prototype === VampireInstance with object prototype of 'Vampire.prototype'
 * 
 * 
 * instanceof will look at vampy and check if 'Vampire is the constructor of it's object prototype
 * 
 * The constructor of it's object prototype is 'Bat', so it then will look at the constructor of the object prototype of 'Bat.prototype'
 * 
 * 'Bat.prototype' is an Vampire instance which has an object prototype of 'Vampire.prototype', so when the method checks the object prototype of 'Bat.prototype' aka Vampire instance
 * it will see that the constructor of it is 'Vampire'
 * 
 */

console.log(Bat.prototype instanceof Vampire);
console.log(Object.getPrototypeOf(Bat.prototype) === Vampire.prototype);


let a = {a: 1};

let b = Object.create(a);


// console.log(Object.getPrototypeOf(b) === a);
// console.log(b instanceof a);


