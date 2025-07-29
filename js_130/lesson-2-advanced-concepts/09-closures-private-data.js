//1
// Create a function named makeCounterLogger that 
// takes a number as an argument and returns a function. 
// When we invoke the returned function with a second number, 
// it should count up or down from the first number to the 
// second number, logging each number to the console:

function makeCounterLogger(num) {
  let start = num;
  return function(targetNum) { 
    let newNum = start;
    while(newNum !== targetNum) {
      console.log(newNum);
      if (newNum < targetNum) {
        newNum++; 
      } else if (newNum > targetNum) {
        newNum--;
      }
    }
    console.log(newNum); 
      
  }
}
let countlog = makeCounterLogger(5);
// countlog(8);
// 5
// 6
// 7
// 8
// console.log('\n');
// countlog(2);
// 5
// 4
// 3
// 2

{
function makeList() {
  let listArr = [];
  return function(item=null) {
    if (item === null) {
      listArr.forEach((item) => console.log(item));
      if (listArr.length === 0) console.log(`The list is empty.`);

    } else if (listArr.includes(item)) {
      console.log(`${
      listArr.splice(listArr.findIndex((el) => el === item), 1)
      } removed!`);
    } else {
      listArr.push(item);
      console.log(`${item} added!`)
    }
  }
}

let list = makeList();
// list();
// The list is empty.

// list("make breakfast");
// make breakfast added!

// list("read book");
// read book added!

// list();
// make breakfast
// read book

// list("make breakfast");
// make breakfast removed!

// list();
// read book
}

{
  function makeList() {
    let listArr = [];
    return {
      add(item) {
        listArr.push(item);
        console.log(`${item} added!`);
      },
      remove(item) {
        console.log(`${
        listArr.splice(listArr.findIndex((el) => el === item), 1)
        } removed!`);
      },
      list() {
        listArr.forEach((item) => console.log(item));
        if (listArr.length === 0) console.log(`The list is empty.`);
      },

    }
  }

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn
}