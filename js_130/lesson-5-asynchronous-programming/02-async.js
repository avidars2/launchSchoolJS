let timer = (delay, action) => setTimeout(() => {action()}, delay);

console.log(timer(5000, console.log.bind(this, 'hola')));

// Be sure you run this code from a file!

setTimeout(function() {
  console.log('!');
}, 0);

setTimeout(function() {
  console.log('World');
}, 0);

console.log('Hello');