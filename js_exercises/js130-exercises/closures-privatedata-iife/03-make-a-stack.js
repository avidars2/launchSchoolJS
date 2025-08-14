function newStack() {
  let stack = [];
  let stackObj = {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(el => console.log(el));

    },
  }

  return stackObj;
}


let myStackObj = newStack();

myStackObj.push(1);
myStackObj.push(2);
myStackObj.push(4);
let value = myStackObj.pop();

myStackObj.printStack();
console.log(value);