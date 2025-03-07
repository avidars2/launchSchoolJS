/**
 * Building on the previous exercise, write a function that returns 
 * true or false based on whether or not an inventory item is available. 
 * As before, the function takes two arguments: an inventory item and a 
 * list of transactions. The function should return true only if the sum 
 * of the quantity values of the item's transactions is greater than zero. 
 * Notice that there is a movement property in each transaction object. 
 * A movement value of 'out' will decrease the item's quantity.
 */

/**
 * I: Inventory item ID, list of transactions
 * O: True or false
 * 
 * Explicits:
 * 1. Return boolean if item is available
 * 2. Availability means quantity for a given id is greater than zero
 * 3. quantity is the difference of 'in' and 'out for an id
 * 4. Return true if sum of quantity values of the item's transactions is greater than zero
 * 5. 'out' decreases quantity
 * 
 * Implicits:
 * 1. Quantity remaining is sum of 'in's for an id minus sum of 'out's
 * 2. Previous function of getting relevant objects can be used first, and then that list
 * can be worked with
 * 
 * [{id: 1, m: 'in', q: 5}, {id: 1, m: 'out', q: 5}, {id: 1, m: 'in', q: 5}] --> quantity === 5, return true for id 1
 * [{id: 1, m: 'in', q: 5}, {id: 1, m: 'out', q: 5}, {id: 1, m: 'out', q: 10}] --> quantity === 0, return false for id 1
 */

/** D
 * Objects can be iterated through
 * Relevant objects can be filtered in to new array
 * total = 0 + {}.q if m === in, and - {}.q if m === 'out'
 * 
 * Algorithm:
 * 1. Filter list for objects matching id, return array of matching objects
 * 2. For each object in list [{}, {}, {}], totalQuantity is added if movement is 'in', and subtracted
 * if movement is 'out'
 * 3. return totalQuantity > 0 boolean
 * 
 */

function isItemAvailable(id, list) {
  let filteredList = list.filter(obj => obj.id === id);
  let totalQuantity = filteredList.reduce((quantityRemaining, currentObj) => {
    if (currentObj.movement === 'in') {
      quantityRemaining += currentObj.quantity;
    } else quantityRemaining -= currentObj.quantity;

    return quantityRemaining;
  }, 0)

  console.log(totalQuantity > 0);
  return totalQuantity > 0;
}

function isItemAvailable(id, list) {
  return (list.filter(obj => obj.id === id)
  .reduce((quantityRemaining, currentObj) => quantityRemaining = currentObj.movement === 'in' ?
     quantityRemaining += currentObj.quantity : quantityRemaining -= currentObj.quantity, 0)) > 0
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
isItemAvailable(103, transactions);     // false
console.log(isItemAvailable(105, transactions));     // true