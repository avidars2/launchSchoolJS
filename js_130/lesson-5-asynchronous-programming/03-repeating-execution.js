function printHi() {
  return setInterval(() => console.log('hi'), 1000);
}

let cancelID = printHi();

setTimeout(() => clearInterval(cancelID), 5000);
