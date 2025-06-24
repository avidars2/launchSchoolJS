function objectsEqual(obj1, obj2) {
  let order = (str) => str.split('').sort().join('');
  let objStr1 = order(JSON.stringify(obj1));
  let objStr2 = order(JSON.stringify(obj2));

  return objStr1 === objStr2;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false