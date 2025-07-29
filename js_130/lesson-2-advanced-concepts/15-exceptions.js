console.log(Error);

class myError extends Error {

}

Error.prototype.bye = () => {};

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(myError)));

console.log(Error.prototype.captureStackTrace instanceof Function);

let a = new Error;


try {
throw a;
} catch(e) {
  console.log(a, 'was thrown');
  console.log('hi');

}
