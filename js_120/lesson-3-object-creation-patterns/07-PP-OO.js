/**1)
 * Organize below into groups
 */

let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
}

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
}

/**2
 * Create a function
 * I: Object above
 * O: Sets price to non-negative number
 * - Non-negative number passed as second argument
 * -If negative number passed, let user know it is invalid
 * 
 */

function adjustPrice(item, price) {
  if (price >= 0) {
    item.price = price;
  } else {
    console.log('Invalid Price!');
  }
}

/**3
 * Create function to output descriptions of product objects
 */

function describeProduct(item) {
  let desc = Object.entries(item);
  desc.forEach(set => {
    console.log(`${set[0]}: ${set[1]}`);
  })
}

describeProduct(scissors);

/**4
 * 
 */