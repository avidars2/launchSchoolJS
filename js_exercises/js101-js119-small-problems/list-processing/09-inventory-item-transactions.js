/**
 * Write a function that takes two arguments, 
 * an inventory item ID and a list of transactions, 
 * and returns an array containing only the 
 * transactions for the specified inventory item.
 */

/**
 * I: Inventory item ID, list of transactions
 * O: Array containing only the transactions for the specified inventory item
 * 
 * Explicits:
 * 1. Function takes two arguments
 * --Item ID and array list of transactions
 * 2. Returns new array containing only transactions for specified ID
 * 
 * CQ:
 * 1. Are new objects returned or is a reference passed into the new array?
 * 
 * Implicits:
 * 1. ID can be multiple objects in the list
 * 2. Array will contain full object that has the matching id
 * 3. Parameter 1 is a Number
 * 
 *list = [{id: 1}, {id: 1}, {id: 2}] 
 * func(1, list) --> [{id: 1}, {id: 1}]
 */

 /**D
  * Array of objects
  * [{}] --> Iterate through array
  * {}, {}, id property contains filtering value
  * For each object.id, check if parameter 1
  * If so, push to new array
  * 
  * Algorithm
  * 1. Iterate through array
  * 2. For each object in array, check ID
  * 3. If ID === search ID, push object to new array
  * 4. Repeat until end of list
  * 5. Return new array
  * 
  * 
  * 2- Filter
  */
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function transactionsFor(id, list) {
  let newList = list.filter(obj => {
    return obj.id === id
  })
  console.log(newList);
  return newList;
}

function transactionsFor(id, list) {
  return list.filter(obj => obj.id === id);
}